export interface remoteData {
  duration: string;
  airline: string;
  time: string;
  stoppage: string;
  cost: string;
}

class Page1Model {
  #remoteData : remoteData;

  constructor(remoteData = {
    duration: '',
    airline: '',
    time: '',
    stoppage: '',
    cost: ''
  }) {
    this.#remoteData = remoteData;
  }

  duration() {
    return this.#remoteData.duration;
  }

  setDuration(value : string) {
    this.#remoteData.duration = value;
  }

  airline() {
    return this.#remoteData.airline;
  }

  setAirline(value : string) {
    this.#remoteData.airline = value;
  }

  time() {
    return this.#remoteData.time;
  }

  setTime(value : string) {
    this.#remoteData.time = value;
  }

  stoppage() {
    return this.#remoteData.stoppage;
  }

  setStoppage(value : string) {
    this.#remoteData.stoppage = value;
  }

  cost() {
    return this.#remoteData.cost;
  }

  setCost(value : string) {
    this.#remoteData.cost = value;
  }

}

export default Page1Model;
