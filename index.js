let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
   constructor (name, startDate) {
     this.name = name;
     this.startDate = new Date(startDate)
   }

   yearsExperienceFromBeginningOf (year) {
      return Math.abs(year - this.startDate.getFullYear());
   }

}

class Location {
  constructor (horizontal, vertical) {
    this.horizontal = horizontal;
    this.vertical = vertical;
  }
}

class BeginningLocation extends Location {

}

class EndingLocation extends Location {

}

class Route {
  constructor (beginningLocation, endingLocation) {
     this.beginningLocation = beginningLocation;
     this.endingLocation = endingLocation;
  }

  blocksTravelled(){

    return Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical) +
    Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
  }

  estimatedTime (peak){
    let blocks = this.blocksTravelled();
    if (peak) {
      return Math.round(blocks / 2, 0);
    } else {
     return Math.round(blocks / 3, 0);
    }
}


}
