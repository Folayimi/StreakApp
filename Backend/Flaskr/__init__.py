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
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS')
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        return response

    @cross_origin
    @app.route('/signup/check_email', methods=['POST'])
    def check_email():
        try:
            if request.method == 'POST':
                request_body = request.get_json()
                email = request_body.get('email')

                if email:
                    users = Users.query.order_by(Users.email).all()
                    user_emails = [user.format()['email'] for user in users]
                    if len(user_emails) != 0:
                        if email in user_emails:
                            return jsonify({
                                "success":False
                            })
                        else:
                            return jsonify({
                                "success":True
                            })
                    elif len(user_emails) == 0:
                        return jsonify({
                            'success':True
                        })
                else :
                    abort(422)
            else:
                abort(405)
        except SystemError:
            abort(404)
        
    
    @cross_origin
    @app.route('/signup/submitdetails', methods=['POST'])
    def submit_details():
        try:
            if request.method == 'POST':
                request_body = request.get_json()
                firstName = request_body.get('firstName',None)
                lastName = request_body.get('lastName',None)
                email = request_body.get('email', None)
                dateOfBirth = request_body.get('dateOfBirth',None)
                phoneNo = request_body.get('phoneNo',None)
                password = request_body.get('password',None)

                if firstName and lastName and email and dateOfBirth and phoneNo and password:
                    user_details = Users(
                        firstName = firstName,
                        lastName = lastName,
                        email = email,
                        password = password,
                        phoneNo = phoneNo,
                        dateOfBirth = dateOfBirth,          
                    )
                    user_details.insert()
                    
                    return jsonify({
                        'success':True
                    })
                else:
                    abort(422)
            else:
                abort(405)
        except SystemError:
            abort(404)
    return app
    
