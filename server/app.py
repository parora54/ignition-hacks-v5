from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, login_user
from db import db
from models import User
from models import *
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)  # Initialize db with the app
# with app.app_context():
#     db.create_all(bind=['competitions'])
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/')
def home():
    return "test"

@app.route('/api/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    if user:
        return jsonify({
            'full_name': user.full_name,
            'email': user.email,
            'password': user.password  # For testing purposes only; do not expose in production
        }), 200
    else:
        return jsonify({"message": "User not found"}), 404


@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()  # Get JSON data from the request body
    email = data.get('email')
    password = data.get('password')

    # Find the user by email
    user = User.query.filter_by(email=email).first()

    # Check if the user exists and the password is correct
    if user and bcrypt.check_password_hash(user.password, password):
        login_user(user)
        return jsonify({"message": "Login successful", "user": user.email, "name": user.full_name}), 200
        return jsonify({"message": "Login successful", "email": user.email, "name": user.full_name}), 200
    else:
        return jsonify({"message": "Invalid email or password"}), 401


@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    full_name = data.get('full_name')
    email = data.get('email')
    password = data.get('password')

    # Check if the user already exists
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"message": "User already exists"}), 409  # Conflict

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create a new user instance
    new_user = User(full_name=full_name, email=email, password=hashed_password)

    # Add the new user to the database
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully", "user": new_user.email}), 201  # Created


@app.route('/api/competitions', methods=['GET'])
# Fetch all competitions
def get_competitions():
    competitions = Competition.query.all()
    competitions_list = []
    for comp in competitions:
        competitions_list.append({
            "id": comp.id,
            "title": comp.title,
            "description": comp.description,
            "type": comp.type,
            "difficulty": comp.difficulty,
            "time": comp.time,
            "constraints": comp.constraints
        })
    return jsonify(competitions_list), 200


@app.route('/api/competitions/<int:id>', methods=['GET'])
# Fetch a single competition by ID
def get_competition(id):
    competition = Competition.query.get_or_404(id)
    return jsonify({
        "id": competition.id,
        "title": competition.title,
        "description": competition.description,
        "type": competition.type,
        "difficulty": competition.difficulty,
        "time": competition.time,
        "constraints": competition.constraints
    }), 200


if __name__ == '__main__':
    app.run(debug=True)
