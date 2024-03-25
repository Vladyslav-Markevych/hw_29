function drive() {
  this.start = function () {
    console.log("start");
  };
  this.stop = function () {
    console.log("stop");
  };
}

function forCar() {
  this.turnOnWipers = function () {
    console.log("eu-eu");
  };
  this.brake = function () {
    console.log("brake");
  };
}

function forBike() {
  this.goFast = function () {
    console.log("vrum-vrum");
  };
  this.nextGear = function () {
    console.log("click-click");
  };
}

function forTruck() {
  this.loadСargo = function () {
    console.log("Loading cargo");
  };
}

function forSedan() {
  this.openDoor = function () {
    console.log("door opened");
  };
}

function forSportBike() {
  this.turnOnHeadlight = function () {
    console.log("Light ON");
  };
}

function forScooter() {
  this.turnOnHeadlight = function () {
    console.log("Light ON");
  };
}

const vehicle = new drive();

forCar.prototype = vehicle;
const car = new forCar();
forBike.prototype = vehicle;
const bike = new forBike();

forTruck.prototype = car;
const truck = new forTruck();
forSedan.prototype = car;
const sedan = new forSedan();

forSportBike.prototype = bike;
const sportBike = new forSportBike();

forScooter.prototype = bike;
const scooter = new forScooter();

//
forCar.prototype.start = function () {
  console.log("New Start");
};
forBike.prototype.stop = function () {
  console.log("New Stop");
};

scooter.start();
scooter.nextGear();
scooter.turnOnHeadlight();

truck.stop();
