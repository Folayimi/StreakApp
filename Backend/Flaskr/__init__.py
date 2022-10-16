from flask import (
    Flask,
    request,
    abort,
    jsonify
)
from flask_cors import *
from models import setup_db

def create_app():
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
    @app.route('/get',methods=['GET'])
    def get():


    
