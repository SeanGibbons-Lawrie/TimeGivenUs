import { Button } from './Button.js'

//Testing adding resources on click
let gold = 0
let str = 0

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
        // gold++
        // console.log(gold)
      } else {
        console.log(`clicked outside ${test}`)
      }
    },
    false
  )
}
