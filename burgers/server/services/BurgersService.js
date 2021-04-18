import { fakeDb } from "../db/FakeDb.js";
import { BadRequest } from "../utils/Errors";
import { generateId } from "../utils/GenerateId";

class BurgersService {
  delete(id) {
    let value = fakeDb.burgers.find(b => b.id === id)
    if (!value) {
      throw new BadRequest("Invalid Id Casting Failed");
    }
    fakeDb.burgers.filter(b => b.id !== id)
  }
  create(newBurger) {
    newBurger.id = generateId()
    // other business logic

  fakeDb.burgers.push(newBurger)
    return newBurger
  }
  async find(query = {}) {
    //let values = await dbContext.Values.find(query);
    return fakeDb.burgers;
  }
  async findById(id) {
    let value = fakeDb.burgers.find(b => b.id === id)
    if (!value) {
      throw new BadRequest("Invalid Id Casting Failed");
    }
    return value;
  }
}

export const burgersService = new BurgersService();