import os
from sqlalchemy import Column, String, Integer, DateTime, TIME, create_engine
from flask_sqlalchemy import SQLAlchemy
import json
from flask_migrate import Migrate

database_name = "streak"
database_password = os.environ.get('DATABASE_PASSWORD','Folayimi')
database_path = "postgresql://{}:{}@{}/{}".format('postgres',database_password,'localhost:5432',database_name)

db = SQLAlchemy()


def setup_db(app, database_path=database_path):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    db.create_all()
    migrate = Migrate(app,db)

class Users(db.Model):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, unique=True)
    firstName = Column(String, nullable=False)
    lastName = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    phoneNo = Column(Integer, unique=True, nullable=False)
    password = Column(String, nullable=False)
    friends = Column(String, nullable=True)

    def __inti__(self, firstName, lastName, email, phoneNo, password, friends):
        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.phoneNo = phoneNo
        self.password = password
        self.friends = friends

    def insert(self):
        db.session.add(self)
        db.session.commit()
        
    def update(self):
        db.session.commit()

    def finalize(self):
        db.session.close()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id':self.id,
            'firstName':self.firstName,
            'lastName':self.lastName,
            'email':self.email,
            'phoneNo':self.phoneNo,
            'password':self.password,
            'friends':self.friends
        }


class Messages(db.Model):
    __tablename__ = "messages"

    message_id = Column(Integer, primary_key=True, unique=True)
    time = Column(TIME, nullable=False)
    date = Column(DateTime, nullable=False)
    messages = Column(String, nullable=True)

    def __init__(self, message_id, time, date, messages):
        self.message_id = message_id
        self.time = time
        self.date = date
        self.messages = messages

    def insert(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def finalize(self):
        db.session.close()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return{
            'message_id':self.message_id,
            'time': self.time,
            'date': self.date,
            'messages': self.messages
        }