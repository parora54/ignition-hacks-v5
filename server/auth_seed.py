from app import app, db
from models import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)


def seed_auth():
    with app.app_context():
        db.create_all()
        hashed_password = bcrypt.generate_password_hash('password123').decode('utf-8')
        user = User(full_name='Test User', email='test@example.com', password=hashed_password)
        db.session.add(user)
        db.session.commit()
        print("Auth Seeded.")


def seedTen():
    users_data = [
        {"full_name": "Alice Smith", "email": "alice@example.com", "password": "alicepassword"},
        {"full_name": "Bob Johnson", "email": "bob@example.com", "password": "bobpassword"},
        {"full_name": "Charlie Brown", "email": "charlie@example.com", "password": "charliepassword"},
        {"full_name": "David Williams", "email": "david@example.com", "password": "davidpassword"},
        {"full_name": "Eve Davis", "email": "eve@example.com", "password": "evepassword"},
        {"full_name": "Frank Moore", "email": "frank@example.com", "password": "frankpassword"},
        {"full_name": "Grace Wilson", "email": "grace@example.com", "password": "gracepassword"},
        {"full_name": "Hank Miller", "email": "hank@example.com", "password": "hankpassword"},
        {"full_name": "Ivy Anderson", "email": "ivy@example.com", "password": "ivypassword"},
        {"full_name": "Jack Thompson", "email": "jack@example.com", "password": "jackpassword"},
    ]

    with app.app_context():
        db.create_all()
        for user_data in users_data:
            hashed_password = bcrypt.generate_password_hash(user_data["password"]).decode('utf-8')
            user = User(full_name=user_data["full_name"], email=user_data["email"], password=hashed_password)
            db.session.add(user)
            print(
                f"Name: {user_data['full_name']}, Email: {user_data['email']}, Password: {user_data['password']} (hashed: {hashed_password})")

        db.session.commit()
        print("10 Users Seeded.")


if __name__ == "__main__":
    seedTen()
    #seed_auth()

