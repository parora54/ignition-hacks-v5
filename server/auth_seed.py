from app import app, db
from models import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

with app.app_context():
    db.create_all()
    hashed_password = bcrypt.generate_password_hash('password123').decode('utf-8')
    user = User(full_name='Test User', email='test@example.com', password=hashed_password)
    db.session.add(user)
    db.session.commit()
    print("Auth Seeded.")
