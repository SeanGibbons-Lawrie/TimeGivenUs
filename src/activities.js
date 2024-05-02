'use strict'

class Activity {
  constructor({ name, description, reward = {} }) {
    this.name = name //needs to be the same as key in events
    this.description = description
    this.reward = reward
  }
}
