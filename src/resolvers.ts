import { AddFlightInput, Flight } from './types';

const flights: Flight[] = [
  { id: 1, company: 'LH', from: 'stockholm', to: 'Madrid', flightNumber: "LH800" },
  { id: 2, company: 'Rynair', from: 'stockholm', to: 'Gdansk', flightNumber: "RN800" },
  { id: 3, company: 'AF', from: 'stockholm', to: 'Paris', flightNumber: "AF800" }
];

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    getFlights: () => flights,
    getOneflight: (_: any, args: any) =>  {
        const flight = flights.find(f => f.id == args.id);
        return flight;
    }
  },
  Mutation: {
    addFlight: (_parent: any, { input }: { input: AddFlightInput }): Flight => {
      const id = flights.length + 1;
      const flight = { id, ...input };
      flights.push(flight);
      return flight;
    },
  },
};

export default resolvers;