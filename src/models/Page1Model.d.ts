/** @format */

export interface remoteData {
  duration: string;
  airline: string;
  time: string;
  stoppage: string;
  cost: string;
}

declare class Page1Model {
  constructor(remoteData: remoteData);
  duration(): string;
  setDuration(value: string): void;
  airline(): string;
  setAirline(value: string): void;
  time(): string;
  setTime(value: string): void;
  stoppage(): string;
  setStoppage(value: string): void;
  cost(): string;
  setCost(value: string): void;
}

export default Page1Model;
