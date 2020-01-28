# Coordinates class
class Coordinates(object):

    # Constructor
    def __init__(self, latitude, longitude):
        self.latitude = latitude
        self.longitude = longitude

    # Returns a list of coordinates [x, y]
    def getCoordinates(self):
        return [self.latitude, self.longitude]