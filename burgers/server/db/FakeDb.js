import { generateId } from "../utils/GenerateId"

class FakeDb {
  burgers = [{ name: 'Death Mac', description: "Itll clog your arteries with meaty goodness", pickles: "dill", patties: "15", cheese: "cheddar", lettuce: "iceberg", onions: "fried", bacon: "15 pieces", id:generateId() }, { name: 'Krabby Patty', description: "Made with delicious imitation krab!", patties: "2", pickles: "dill", lettuce: "iceberg", onions: "red", id:generateId() }]
}

export const fakeDb = new FakeDb()