"""Module to manage ORM User model"""

import os
import time
import hashlib

import jwt

from database import db


class Book(db.Model):
    """User table specification"""

    JWT_LIFETIME_SECONDS = 600
    JWT_ALGORITHM = "HS256"

    __tablename__ = "books"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(256), unique=True, nullable=False)
    author = db.Column(db.String(256), nullable=False)
    category = db.Column(db.String(256), nullable=False)
    price = db.Column(db.Float, nullable=False)





