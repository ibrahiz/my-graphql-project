export class Flight {
  constructor(id: number, company: String, from: String, to: String, flightNumber: String) {
    this.id = id;
    this.company = company;
    this.from = from;
    this.to = to;
    this.flightNumber = flightNumber;
  }
  id: number;
  company: String
  from: String
  to: String
  flightNumber: String
}

export class AddFlightInput {
    constructor(company: String, from: String, to: String, flightNumber: String) {
      this.company = company;
      this.from = from;
      this.to = to;
      this.flightNumber = flightNumber;
    }
    company: String
    from: String
    to: String
    flightNumber: String
  }