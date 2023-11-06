 class Button {
  constructor(config){
    this.xpoint = config.xpoint;
    this.ypoint = config.ypoint;
    this.width = config.width;
    this.height = config.height;
    this.lineWidth = config.lineWidth;
    this.fillColor = config.fillColor;
    this.lineColor = config.lineColor;
    this.fillText = config.fillText;
    this.fillStyle = config.fillStyle;
  }
  draw(context) {
    context.beginPath()
    context.rect(this.xpoint, this.ypoint, this.width, this.height); 
    context.fillStyle = this.fillColor; 
    // context.fillStyle = 'rgba(225,225,225,0.5)';
    context.fill(); 
    context.lineWidth = this.lineWidth;
    context.strokeStyle = this.lineColor; 
    context.stroke();
    context.closePath();
    context.font = '40pt Kremlin Pro Web';
    context.fillStyle = this.fillStyle;
    // context.fillText('Start', 100, 150);
    context.fillText(this.fillText, this.xpoint + 10, this.ypoint + 40);
 
  }
  clickButton(){
    console.log('clicked button')
  }
}

export { Button }
