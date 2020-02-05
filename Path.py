from datetime import datetime
from Coordinates import Coordinates

# Path class
class Path(object):
    
    # Constructor
    def __init__(self, coordinatesList):
        self.creationDate = datetime.now()
        self.coordinatesList = coordinatesList