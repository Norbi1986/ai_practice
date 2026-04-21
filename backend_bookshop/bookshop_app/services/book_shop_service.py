"""Services module"""
from data_access_objects.book_shop_dao import BookShopDao
from models.book_shop_model import Book
from models.book_shop_schema import BookShopSchema
from flask import request, jsonify, session

bookshop_shema = BookShopSchema()
bookshop_schemas = BookShopSchema(many=True)

class BookShopService:
    """To support CRUD operations for user resource"""

    @staticmethod
    def get_all():
        """Get user resource"""
        user_data = BookShopDao.fetch_all()
        return bookshop_schemas.dump(user_data)

    @staticmethod
    def get(book_id: int):
        """Get user resource"""
        user_data = BookShopDao.fetch_by_id(book_id)
        print(user_data)
        return bookshop_shema.dump(user_data)

    @staticmethod
    def create():
        """Get user resource"""
        book_shop_req_json = request.get_json()
        book: Book = bookshop_shema.load(book_shop_req_json)
        BookShopDao.create(book)
        return bookshop_shema.dump(book), 201


