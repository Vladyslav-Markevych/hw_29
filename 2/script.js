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

Object.setPrototypeOf(car, vehicle);
Object.setPrototypeOf(bike, vehicle);

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

Object.setPrototypeOf(truck, car);
Object.setPrototypeOf(sedan, car);

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

Object.setPrototypeOf(sportBike, bike);
Object.setPrototypeOf(scooter, bike);

scooter.start();
scooter.nextGear();
scooter.turnOnHeadlight();
