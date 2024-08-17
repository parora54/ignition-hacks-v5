import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = 'key_idk'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'auth.db')  # Auth DB
    #SQLALCHEMY_BINDS = {
    #    'competitions': 'sqlite:///' + os.path.join(basedir, 'competitions.db')
    #}
    SQLALCHEMY_BINDS = {
        'competitions': 'sqlite:///' + os.path.join(basedir, 'competitions.db')
    }
    SQLALCHEMY_TRACK_MODIFICATIONS = False


