"""Controller module."""

from flask import Blueprint, jsonify, request, abort

from services.book_shop_service import BookShopService

book_bp = Blueprint('books', __name__)

@book_bp.route('/<int:book_id>', methods=['GET'])
def get(book_id: int):
    """Get user resource."""
    return BookShopService.get(book_id)

@book_bp.route('', methods=['POST'])
def create():
    """Create user resource."""
    return BookShopService.create()


