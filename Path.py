from datetime import date
from Coordinates import Coordinates

# Path class
class Path(object):
    
    # Constructor
    def __init__(self, coordinatesList):
        self.creationDate = date.today()
        self.coordinatesList = coordinatesList