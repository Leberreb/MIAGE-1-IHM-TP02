import os

from flask import Flask
from flask import render_template
from flask import send_from_directory
from flask import request

from Coordinates import Coordinates
from Path import Path


app = Flask(__name__)

savedPath = []

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

@app.route('/path/<arrayPath>')
def path(arrayPath):
    return render_template('new_path.html', title='Trajet')

# Path history page
@app.route('/history_path')
def history_path():
    return render_template('history_path.html', title='Historique des trajets', path=savedPath)

# Help page
@app.route('/help')
def help():
    return render_template('help.html', title="Guide d'utilisation")

# Save REST Call
@app.route('/save_path/<data>', methods=['POST'])
def save_path(data):
    # New path
    newPath = []

    # Remove unnecessary double quotes put the data in a new list
    data = data.replace('"', '')
    arrayData = data[1:-1].split("][")

    # Remove the number of the coordinates
    for arrayCoordinate in arrayData:
        arrayCoordinate = arrayCoordinate.split(",,")[1]
        newCoordinate = arrayCoordinate.split(",")
        coordinate = Coordinates(newCoordinate[1], newCoordinate[0], newCoordinate[2])
        newPath.append(coordinate)

    newSavedPath = Path(newPath)
    savedPath.append(newSavedPath)

    return "Trajet sauvegardé"

# Page not found page
@app.errorhandler(404)
def page_not_found(error):
    return render_template('error.html', title='404'), 404

# Error page
@app.errorhandler(500)
def server_error(error):
    return render_template('error.html', title='500'), 500
