'use strict'

import { update_displayed_health } from './display.js'

class Hero {
  constructor() {}
}

const character = new Hero()
character.base_stats = {
  max_health: 40,
  health: 40,
}

character.stats = {}
character.stats.full = { ...character.base_stats }
character.stats.total_flat = {}
character.stats.total_multiplier = {}

/**
 * full stat recalculation, call whenever something changes
 */
character.update_stats = function () {
  const missing_health =
    Math.max(
      character.stats.full['max_health'] - character.stats.full['health'],
      0
    ) || 0
  //to avoid fully restoring all whenever this function is called

  Object.keys(character.stats.full).forEach(function (stat) {
    if (stat === 'health') {
      character.stats.full['health'] = Math.max(
        1,
        character.stats.full['max_health'] - missing_health
      )
    }
  })
}

// character.get_attack_power = function () {
//   return character.stats.full.attack_power * character.get_stamina_multiplier();
// }

function update_character_stats() {
  character.update_stats()

  update_displayed_health()
}

export { character, update_character_stats }
