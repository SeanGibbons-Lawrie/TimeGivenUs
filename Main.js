import { Button } from './Button.js'
import { Character } from './Character.js'
import { Player } from './Player.js'
import { UI } from './UI.js'


window.onload = function () {
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')

  let window_height = window.innerHeight
  let window_width = window.innerWidth

  canvas.height = window_height
  canvas.width = window_width

  // Function to get the mouse position
  function getMousePos(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    let mousePos = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }
    console.log(mousePos)
    return mousePos
  }

  // Function to check whether a point is inside a rectangle
  function isInside(pos, Button) {
    return (
      pos.x > Button.xpoint &&
      pos.x < Button.xpoint + Button.width &&
      pos.y < Button.ypoint + Button.height &&
      pos.y > Button.ypoint
    )
  }
  //Test UI
  const ui = new UI({
    gold: 3,
    time: 3,
  })

  //Test Character
  const player = new Player({
    hp: 50,
    maxHp: 100,
    xp: 50,
    maxXp: 100,
  })
  console.log(player)

  //Test Box
  const test = new Button({
    xpoint: 100,
    ypoint: 100,
    width: 300,
    height: 100,
    lineWidth: 2,
    fillColor: 'white',
    lineColor: 'red',
    fillText: 'Start',
    fillStyle: 'black',
  })
  console.log(test)
  test.draw(context)

  //Testing clicking inside the test button
  isInside(getMousePos, test)
  canvas.addEventListener(
    'click',
    (evt) => {
      // console.log('clicked canvas')
      var mousePos = getMousePos(canvas, evt)

      if (isInside(mousePos, test)) {
        console.log(`clicked inside ${test}`)
        //testing player stats can be altered
        player.maxHp += 20
        console.log(player.maxHp)
        // gold++
        // console.log(gold)
      } else {
        console.log(`clicked outside ${test}`)
      }
    },
    false
  )
}
