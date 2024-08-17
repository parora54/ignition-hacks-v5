from flask import Flask
from db import db
from config import Config
from models import Competition

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)

with app.app_context():
    # Create a specific engine for the competitions database
    engine = db.get_engine(app, bind='competitions')
    Competition.__table__.create(bind=engine)

print("Competition database and table created successfully.")
