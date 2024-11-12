class Page1Model {
  #remoteData;

  constructor(remoteData) {
    this.#remoteData = remoteData;
  }

  duration() {
    return this.#remoteData.duration;
  }

  setDuration(value) {
    this.#remoteData.duration = value;
  }

  airline() {
    return this.#remoteData.airline;
  }

  setAirline(value) {
    this.#remoteData.airline = value;
  }

  time() {
    return this.#remoteData.time;
  }

  setTime(value) {
    this.#remoteData.time = value;
  }

  stoppage() {
    return this.#remoteData.stoppage;
  }

  setStoppage(value) {
    this.#remoteData.stoppage = value;
  }

  cost() {
    return this.#remoteData.cost;
  }

  setCost(value) {
    this.#remoteData.cost = value;
  }

}

export default Page1Model;
