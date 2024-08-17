from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, login_user
from db import db
from models import User
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config.from_object('config.Config')

db.init_app(app)  # Initialize db with the app
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
        return jsonify({"message": "Login successful", "user": user.email}), 200
    else:
        return jsonify({"message": "Invalid email or password"}), 401

if __name__ == '__main__':
    app.run(debug=True)
