"""Main application module"""

import connexion

from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS

from controllers.book_shop_controller import book_bp
from config import get_environment_config
from database import db
from dependencies import ma


def create_app() -> Flask:
    """Factory method for Flask provider"""
    app = Flask(__name__)
    cors = CORS()
    app.config.from_object(get_environment_config())
    db.init_app(app)
    ma.init_app(app)
    cors.init_app(app)

    app.register_blueprint(book_bp, url_prefix='/api/books')
    with app.app_context():
        db.create_all()
        return app

app = create_app()
migrate = Migrate(app, db, render_as_batch=True)


if __name__ == "__main__":
    """Entry point"""
    # add_routes(app)
    app.run()
