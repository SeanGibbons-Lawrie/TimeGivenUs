'use strict'
import { character, update_character_stats } from './character.js'
import {
  update_displayed_health,
  set_default_name,
  update_activity_boxes,
} from './display.js'

const name_field = document.getElementById('character_name_field')
name_field.value = character.name
name_field.addEventListener(
  'change',
  () =>
    (character.name =
      name_field.value.toString().trim().length > 0 ? name_field.value : 'Hero')
)

function run() {
  set_default_name()
  update_displayed_health()
  update_character_stats()
  update_activity_boxes()
}

run()
