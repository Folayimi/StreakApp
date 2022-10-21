import os
import sys
from select import select
from tkinter.messagebox import QUESTION
from unicodedata import category
from xmlrpc.client import FastMarshaller
from flask import (
    Flask,
    request,
    abort,
    jsonify
)
from flask_sqlalchemy import SQLAlchemy #, _or
from flask_cors import *
from models import setup_db, Users, Messages

def create_app(test_config=None):
    app = Flask(__name__)
    setup_db(app)
    CORS(app)

    @app.after_request
    def after_request(response):
        response.headers.add(
            'Access-Control-Allow-Headers', 'Content-Type, Authoriztion'
        )
        response.headers.add(
            'Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS'
        )
        response.headers.add(
            'Access-Control-Allow-Credentials', 'true'
        )
        return response

    @cross_origin
    @app.route('/get_users', methods=['GET'])
    def get_users():
        try:
            users = Users.query.order_by(Users.id).all()
            users = [user.format() for user in users]
            return jsonify({
                "success":True,
                "users":users
            })
        except Exception:
            abort(404)
    return app
    
