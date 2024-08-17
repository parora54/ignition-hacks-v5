from db import db
from flask_login import UserMixin

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

    def __repr__(self):
        return f"User('{self.email}', '{self.full_name}')"

class Competition(db.Model):
    __bind_key__ = 'competitions'  # Bind to the competitions.db
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text, nullable=False)
    type = db.Column(db.String(50), nullable=False)  # Hackathon or Case Comp
    difficulty = db.Column(db.String(50), nullable=False)  # Difficulty
    time = db.Column(db.String(10), nullable=False)  # Time
    education = db.Column(db.String(200), nullable=False)  # Comp education level
    theme = db.Column(db.String(300), nullable=True)  # Comp education level

    def __repr__(self):
        return f"<Competition {self.title} ({self.type})>"
