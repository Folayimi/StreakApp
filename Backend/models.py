import os
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, String, Integer, create_engine
import json

database_name = "streak"
database_password = os.environ.get('DATABASE_PASSWORD')
database_path = "postgresql://{}:{}@{}/{}".format('postgres',database_password,'localhost:5000',database_name)

db = SQLAlchemy()

def setup_db(app, database_path=database_path,):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHYMI_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()