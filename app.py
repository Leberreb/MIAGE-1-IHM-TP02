import os

from flask import Flask
from flask import render_template
from flask import send_from_directory

from Coordinates import Coordinates
from Path import Path


app = Flask(__name__)

# Favicon
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

# Main page
@app.route('/')
def index():
    return render_template('index.html', title='Bienvenue')

# New path page
@app.route('/new_path')
def new_path():
    return render_template('new_path.html', title='Nouveau trajet')

# Path history page
@app.route('/history_path')
def history_path():
    return render_template('history_path.html', title='Historique des trajets')

# Help page
@app.route('/help')
def help():
    return render_template('help.html', title="Guide d'utilisation")

# Save REST Call
@app.route('/path_save', methods=['POST'])
def save_path():
    return ''

# Page not found page
@app.errorhandler(404)
def page_not_found(error):
    return render_template('error.html', title='404'), 404

# Error page
@app.errorhandler(500)
def server_error(error):
    return render_template('error.html', title='500'), 500
