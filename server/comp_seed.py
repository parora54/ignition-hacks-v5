from db import db
from models import Competition
from app import app
from faker import Faker
import random
from datetime import datetime

faker = Faker()


def seed_competitions():
    competitions_data = [
        {
            "title": "Global Hackathon 2024",
            "description": "A global hackathon focused on solving real-world problems with innovative solutions.",
            "type": "Hackathon",
            "difficulty": "Intermediate",
            "time": "2024-05-16",
            "education": "High School",
            "theme": "Environmental Sustainability"
        },
        {
            "title": "Business Case Challenge 2024",
            "description": "A challenging case competition focused on business strategy and innovation.",
            "type": "Case Competition",
            "difficulty": "Advanced",
            "time": "2024-05-16",
            "education": "University",
            "theme": "Corporate Responsibility"
        },
        {
            "title": "University Coding Challenge",
            "description": "A coding competition designed for university students to showcase their programming skills.",
            "type": "Hackathon",
            "difficulty": "Beginner",
            "time": "2024-05-16",
            "education": "None",
            "theme": "Open Innovation"
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
                education=competition["education"],
                theme=competition["theme"]
            )
            db.session.add(new_competition)

        db.session.commit()
        print("Competitions seeded.")


def fifty():
    difficulties = ["Beginner", "Intermediate", "Advanced"]
    education_levels = ["High School", "None", "University"]
    competition_types = ["Hackathon", "Case Competition"]

    # Convert string dates to datetime objects
    start_date = datetime.strptime("2024-01-01", "%Y-%m-%d")
    end_date = datetime.strptime("2024-12-31", "%Y-%m-%d")

    with app.app_context():
        competitions = []
        for _ in range(50):
            title = faker.catch_phrase() + " " + random.choice(competition_types)
            description = faker.text(max_nb_chars=200)
            comp_type = random.choice(competition_types)
            difficulty = random.choice(difficulties)
            time = faker.date_between(start_date=start_date, end_date=end_date).strftime("%Y-%m-%d")
            education = random.choice(education_levels)
            theme = faker.bs()  # Generate a random theme

            competition = Competition(
                title=title,
                description=description,
                type=comp_type,
                difficulty=difficulty,
                time=time,
                education=education,
                theme=theme
            )
            competitions.append(competition)

        db.session.bulk_save_objects(competitions)
        db.session.commit()
        print("50 Competitions Seeded.")


if __name__ == "__main__":
    fifty()
    # seed_competitions()
