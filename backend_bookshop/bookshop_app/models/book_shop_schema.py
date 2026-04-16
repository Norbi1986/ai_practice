"""
ORM Schemas
"""
from flask_marshmallow.fields import fields

from database import db
from dependencies import ma
from models.book_shop_model import Book


class BookShopSchema(ma.SQLAlchemySchema):
    """User schema"""

    class Meta:
        model = Book
        load_instance = True
        sqla_session = db.session

    id = ma.auto_field()
    title = ma.auto_field(unique=True)
    author = ma.auto_field()
    category = ma.auto_field()
    price = ma.auto_field()
