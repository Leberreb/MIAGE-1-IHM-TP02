# Coordinates class
class Coordinates(object):

    # Constructor
    def __init__(self, latitude, longitude, altitude):
        self.latitude = latitude
        self.longitude = longitude
        self.altitude = altitude

    # Returns a list of coordinates [x, y]
    def getCoordinates(self):
        return [self.latitude, self.longitude, self.altitude]

    # ToString function
    def __str__(self):
        return "[%s;%s;%s]" %(self.latitude, self.longitude, self.altitude)