import { Character } from "./Character.js";

class Player extends Character{
  constructor(config) {
    super(config);
    this.xp = config.xp;
    this.maxXp = config.maxXp;
  }
}

export {Player}
