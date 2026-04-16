"""
Module for BookShop Data Access Object
"""


from typing import List

from database import db
from models.book_shop_model import Book


class BookShopDao:
    """
    Data Access Object class for BookShop Model
    """

    BOOK_NOT_FOUND = "Book not found for id: {}"

    @staticmethod
    def create(book: Book):
        """Creates book in database"""
        db.session.add(book)
        db.session.commit()

    @staticmethod
    def fetch_by_id(book_id: int) -> Book:
        """Gets BookShop by id from database"""
        return db.session.query(Book).get_or_404(
            book_id,
            description=BookShopDao.BOOK_NOT_FOUND.format(book_id)
        )

    @staticmethod
    def fetch_by_login(login: str) -> Book:
        """Gets BookShop by login from database."""
        return db.session.query(Book).filter_by(login=login).first_or_404()

    @staticmethod
    def fetch_all() -> List[Book]:
        """Returns all BookShops from database"""
        return db.session.query(Book).all()

    @staticmethod
    def delete(book_id) -> None:
        """Deletes BookShop from database"""
        item = db.session.query(Book).filter_by(id=book_id).first()
        db.session.delete(item)
        db.session.commit()

    @staticmethod
    def update(bookShop_data):
        """Updates BookShop in database"""
        db.session.merge(bookShop_data)
        db.session.commit()
