const vehicle = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

const car = {
  turnOnWipers() {
    console.log("eu-eu");
  },
  brake() {
    console.log("brake");
  },
};

const bike = {
  goFast() {
    console.log("vrum-vrum");
  },
  nextGear() {
    console.log("click-click");
  },
};

car.__proto__ = vehicle;
bike.__proto__ = vehicle;

const truck = {
  loadСargo() {
    console.log("Loading cargo");
  },
};

const sedan = {
  openDoor() {
    console.log("door opened");
  },
};

truck.__proto__ = car;
sedan.__proto__ = car;

const sportBike = {
  turnOnHeadlight() {
    console.log("Light ON");
  },
};
const scooter = {
  turnOnHeadlight() {
    console.log("Light ON");
  },
};

sportBike.__proto__ = bike;
scooter.__proto__ = bike;

scooter.start();
scooter.nextGear();
scooter.turnOnHeadlight();
