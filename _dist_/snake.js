const gridNode = document.querySelector(".snake>.grid")

class gridSnake{
  constructor(config){
    this.height = config.height
    this.width = config.width
    this.grid = config.grid
  }
  createGrid(){
    this.grid.style.width =  `${(this.width * 40) + 2}px`;
    let containerBricks = []
    for (let y = 0; y <  this.width; y++) {
      for (let x = 0; x < this.height; x++) {
        let bricks = document.createElement("div")
        bricks.style.width = "40px";
        bricks.style.height = "40px";
        bricks.className = "border border-gray"
        bricks.setAttribute("data-ax", x)
        bricks.setAttribute("data-ay", y)
        containerBricks.push(bricks)
      }
    }
    this.grid.append(...containerBricks)
  }
  movedSnake(axes, direction){
    let _axes = axes
    setInterval(() => {
      let brickToPaint = [...this.grid.childNodes].find((node) => {
        return +node.dataset.ax == _axes.x  && +node.dataset.ay == _axes.y
      })

      brickToPaint.classList.add('snake-color')
      _axes.x++
    }, 1000);
  }
}

const stage1 = new gridSnake({
  height: 10,
  width: 10,
  grid : gridNode,
})

stage1.createGrid()
//stage1.movedSnake({x:0, y:0})