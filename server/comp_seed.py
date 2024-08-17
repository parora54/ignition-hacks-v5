from db import db
from models import Competition
from app import app

# Sample data for competitions
competitions_data = [
    {
        "title": "Global Hackathon 2024",
        "description": "A global hackathon focused on solving real-world problems with innovative solutions.",
        "type": "Hackathon",
        "difficulty": "Intermediate",
        "time": "48 hours",
        "constraints": "Team of 4"
    },
    {
        "title": "Business Case Challenge 2024",
        "description": "A challenging case competition focused on business strategy and innovation.",
        "type": "Case Competition",
        "difficulty": "Hard",
        "time": "1 week",
        "constraints": "Must be a student"
    },
    {
        "title": "University Coding Challenge",
        "description": "A coding competition designed for university students to showcase their programming skills.",
        "type": "Hackathon",
        "difficulty": "Easy",
        "time": "24 hours",
        "constraints": "Solo or Team of 2"
    }
]

with app.app_context():
    for competition in competitions_data:
        new_competition = Competition(
            title=competition["title"],
            description=competition["description"],
            type=competition["type"],
            difficulty=competition["difficulty"],
            time=competition["time"],
            constraints=competition["constraints"]
        )
        db.session.add(new_competition)

    db.session.commit()

print("Competitions seeded.")
