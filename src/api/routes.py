"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # if email != "test" or password != "test":
    #     return jsonify({"msg": "Bad username or password"}), 401
    user = User.query.filter_by(email=email, password=password)

    if(user.count() == 1):
        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token)
    else:
        return jsonify({"msg": "Please sign up first!!"}), 401
    

   

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/signup", methods=["POST"])
def create_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    new_user = User(email=email, password=password, is_active=True)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "user created!!"}), 200


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/hello", methods=["GET"])
@jwt_required()
def get_hello():
    email = get_jwt_identity()
    dictionary = {
        "message": "Welcome Back " + email,
        "privateMessage": email + ", check out this cool information about PROTEAS!!!"
    }
    return jsonify(dictionary)

