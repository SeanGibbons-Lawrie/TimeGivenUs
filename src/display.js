'use strict'

import { character } from './character.js'

const current_health_value_div = document.getElementById(
  'character_health_value'
)
const current_health_bar = document.getElementById(
  'character_healthbar_current'
)

const activity_1_div = document.getElementById('activity_1_div')
const activity_1_text = document.getElementById('activity_1_text')

const default_name = document.getElementById('character_name_field')

function set_default_name() {
  default_name.value = 'Hero'
}

function update_displayed_health() {
  //call it when using healing items, resting or getting hit
  current_health_value_div.innerText =
    Math.round(character.stats.full.health) +
    '/' +
    Math.round(character.stats.full.max_health) +
    ' hp'
  current_health_bar.style.width =
    (
      (character.stats.full.health * 100) /
      character.stats.full.max_health
    ).toString() + '%'
}

function update_activity_boxes() {
  activity_1_text.innerText = 'Chop Firewood'
}

export { update_displayed_health, set_default_name, update_activity_boxes }
