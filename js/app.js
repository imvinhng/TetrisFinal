document.addEventListener('DOMContentLoaded', () => {
    // // TODO: we can also get the grid size from user
    // const GRID_WIDTH = 10
    // const GRID_HEIGHT = 20
    // const GRID_SIZE = GRID_WIDTH * GRID_HEIGHT
  
    // // no need to type 200 divs :)
    // const grid = createGrid();
    // let squares = Array.from(grid.querySelectorAll('div'))
    // const startBtn = document.querySelector('.button')
    const hamburgerBtn = document.querySelector('.toggler')
    const menu = document.querySelector('.menu')
    const span = document.getElementsByClassName('close')[0]
    // const scoreDisplay = document.querySelector('.score-display')
    // const linesDisplay = document.querySelector('.lines-score')
    // let currentIndex = 0
    // let currentRotation = 0
    // const width = 10
    // let score = 0
    // let lines = 0
    // let timerId
    // let nextRandom = 0
    // const colors = [
    //   'url(images/blue_block.png)',
    //   'url(images/pink_block.png)',
    //   'url(images/purple_block.png)',
    //   'url(images/peach_block.png)',
    //   'url(images/yellow_block.png)'
    // ]
  
  
    // function createGrid() {
    //   // the main grid
    //   let grid = document.querySelector(".grid")
    //   for (let i = 0; i < GRID_SIZE; i++) {
    //     let gridElement = document.createElement("div")
    //     grid.appendChild(gridElement)
    //   }
  
    //   // set base of grid
    //   for (let i = 0; i < GRID_WIDTH; i++) {
    //     let gridElement = document.createElement("div")
    //     gridElement.setAttribute("class", "block3")
    //     grid.appendChild(gridElement)
    //   }
  
    //   let previousGrid = document.querySelector(".previous-grid")
    //   // Since 16 is the max grid size in which all the Tetrominoes 
    //   // can fit in we create one here
    //   for (let i = 0; i < 16; i++) {
    //     let gridElement = document.createElement("div")
    //     previousGrid.appendChild(gridElement);
    //   }
    //   return grid;
    // }
  
  
    // //assign functions to keycodes
    // function control(e) {
    //   if (e.keyCode === 39)
    //     moveright()
    //   else if (e.keyCode === 32)
    //     rotate()
    //   else if (e.keyCode === 37)
    //     moveleft()
    //   else if (e.keyCode === 40)
    //     moveDown()
    // }
  
    // // the classical behavior is to speed up the block if down button is kept pressed so doing that
    // document.addEventListener('keydown', control)
  
    // //The Tetrominoes
    // const lTetromino = [
    //   [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, 2],
    //   [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 2],
    //   [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2],
    //   [GRID_WIDTH, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2 + 2]
    // ]
  
    // const zTetromino = [
    //   [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
    //   [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1],
    //   [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
    //   [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1]
    // ]
  
    // const tTetromino = [
    //   [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2],
    //   [1, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
    //   [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
    //   [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1]
    // ]
  
    // const oTetromino = [
    //   [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
    //   [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
    //   [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
    //   [0, 1, GRID_WIDTH, GRID_WIDTH + 1]
    // ]
  
    // const iTetromino = [
    //   [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
    //   [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3],
    //   [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
    //   [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3]
    // ]
  
    // const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]
  
    // //Randomly Select Tetromino
    // let random = Math.floor(Math.random() * theTetrominoes.length)
    // let current = theTetrominoes[random][currentRotation]
  
  
    // //move the Tetromino moveDown
    // let currentPosition = 4
    // //draw the shape
    // function draw() {
    //   current.forEach(index => {
    //     squares[currentPosition + index].classList.add('block')
    //     squares[currentPosition + index].style.backgroundImage = colors[random]
    //   })
    // }
  
    // //undraw the shape
    // function undraw() {
    //   current.forEach(index => {
    //     squares[currentPosition + index].classList.remove('block')
    //     squares[currentPosition + index].style.backgroundImage = 'none'
    //   })
    // }
  
    // //move down on loop
    // function moveDown() {
    //   undraw()
    //   currentPosition = currentPosition += width
    //   draw()
    //   freeze()
    // }
  
    // startBtn.addEventListener('click', () => {
    //   if (timerId) {
    //     clearInterval(timerId)
    //     timerId = null
    //   } else {
    //     draw()
    //     timerId = setInterval(moveDown, 1000)
    //     nextRandom = Math.floor(Math.random() * theTetrominoes.length)
    //     displayShape()
    //   }
    // })
  
    // //move left and prevent collisions with shapes moving left
    // function moveright() {
    //   undraw()
    //   const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
    //   if (!isAtRightEdge) currentPosition += 1
    //   if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
    //     currentPosition -= 1
    //   }
    //   draw()
    // }
  
    // //move right and prevent collisions with shapes moving right
    // function moveleft() {
    //   undraw()
    //   const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
    //   if (!isAtLeftEdge) currentPosition -= 1
    //   if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
    //     currentPosition += 1
    //   }
    //   draw()
    // }
  
    // //freeze the shape
    // function freeze() {
    //   // if block has settled
    //   if (current.some(index => squares[currentPosition + index + width].classList.contains('block3') || squares[currentPosition + index + width].classList.contains('block2'))) {
    //     // make it block2
    //     current.forEach(index => squares[index + currentPosition].classList.add('block2'))
    //     // start a new tetromino falling
    //     random = nextRandom
    //     nextRandom = Math.floor(Math.random() * theTetrominoes.length)
    //     current = theTetrominoes[random][currentRotation]
    //     currentPosition = 4
    //     draw()
    //     displayShape()
    //     addScore()
    //     gameOver()
    //   }
    // }
    // freeze()
  
    // //Rotate the Tetromino
    // function rotate() {
    //   undraw()
    //   currentRotation++
    //   if (currentRotation === current.length) {
    //     currentRotation = 0
    //   }
    //   current = theTetrominoes[random][currentRotation]
    //   draw()
    // }
  
    // //Game Over
    // function gameOver() {
    //   if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
    //     scoreDisplay.innerHTML = 'end'
    //     clearInterval(timerId)
    //   }
    // }
  
    // //show previous tetromino in scoreDisplay
    // const displayWidth = 4
    // const displaySquares = document.querySelectorAll('.previous-grid div')
    // let displayIndex = 0
  
    // const smallTetrominoes = [
    //   [1, displayWidth + 1, displayWidth * 2 + 1, 2], /* lTetromino */
    //   [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1], /* zTetromino */
    //   [1, displayWidth, displayWidth + 1, displayWidth + 2], /* tTetromino */
    //   [0, 1, displayWidth, displayWidth + 1], /* oTetromino */
    //   [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1] /* iTetromino */
    // ]
  
    // function displayShape() {
    //   displaySquares.forEach(square => {
    //     square.classList.remove('block')
    //     square.style.backgroundImage = 'none'
    //   })
    //   smallTetrominoes[nextRandom].forEach(index => {
    //     displaySquares[displayIndex + index].classList.add('block')
    //     displaySquares[displayIndex + index].style.backgroundImage = colors[nextRandom]
    //   })
    // }
  
    // //Add score
    // function addScore() {
    //   for (currentIndex = 0; currentIndex < GRID_SIZE; currentIndex += GRID_WIDTH) {
    //     const row = [currentIndex, currentIndex + 1, currentIndex + 2, currentIndex + 3, currentIndex + 4, currentIndex + 5, currentIndex + 6, currentIndex + 7, currentIndex + 8, currentIndex + 9]
    //     if (row.every(index => squares[index].classList.contains('block2'))) {
    //       score += 10
    //       lines += 1
    //       scoreDisplay.innerHTML = score
    //       linesDisplay.innerHTML = lines
    //       row.forEach(index => {
    //         squares[index].style.backgroundImage = 'none'
    //         squares[index].classList.remove('block2') || squares[index].classList.remove('block')
  
    //       })
    //       //splice array
    //       const squaresRemoved = squares.splice(currentIndex, width)
    //       squares = squaresRemoved.concat(squares)
    //       squares.forEach(cell => grid.appendChild(cell))
    //     }
    //   }
    // }
  
    //Styling eventListeners
    // hamburgerBtn.addEventListener('click', () => {
    //   menu.style.display = 'flex'
    //   startGame()
    // })
    span.addEventListener('click', () => {
      menu.style.display = 'none'
      startGame()
    })
  

    // From Basics
    function startGame() {
      const canvas = document.getElementById('tetris');
      const context = canvas.getContext('2d');
      const nextup_canvas = document.querySelector('.nextup-grid')
      const nextup_context = nextup_canvas.getContext('2d')

      context.scale(20, 20);
  
  
      function arenaSweep() {
          let rowCount = 1;
          outer: for (let y = arena.length -1; y > 0; --y) {
              for (let x = 0; x < arena[y].length; ++x) {
                  if (arena[y][x] === 0) {
                      continue outer;
                  }
              }
  
              const row = arena.splice(y, 1)[0].fill(0);
              arena.unshift(row);
              ++y;
  
              player.score += rowCount * 10;
              rowCount *= 2;
          }
      }

      
  
      function collide(arena, player) {
          const m = player.matrix;
          const o = player.pos;
          for (let y = 0; y < m.length; ++y) {
              for (let x = 0; x < m[y].length; ++x) {
                  if (m[y][x] !== 0 &&
                    (arena[y + o.y] &&
                      arena[y + o.y][x + o.x]) !== 0) {
                      return true;
                  }
              }
          }
          return false;
      }
  
      function createMatrix(w, h) {
          const matrix = [];
          while (h--) {
              matrix.push(new Array(w).fill(0));
          }
          return matrix;
      }
  
      function createPiece(type)
      {
          if (type === 'I') {
              return [
                  [0, 1, 0, 0],
                  [0, 1, 0, 0],
                  [0, 1, 0, 0],
                  [0, 1, 0, 0],
              ];
          } else if (type === 'L') {
              return [
                  [0, 2, 0],
                  [0, 2, 0],
                  [0, 2, 2],
              ];
          } else if (type === 'J') {
              return [
                  [0, 3, 0],
                  [0, 3, 0],
                  [3, 3, 0],
              ];
          } else if (type === 'O') {
              return [
                  [4, 4],
                  [4, 4],
              ];
          } else if (type === 'Z') {
              return [
                  [5, 5, 0],
                  [0, 5, 5],
                  [0, 0, 0],
              ];
          } else if (type === 'S') {
              return [
                  [0, 6, 6],
                  [6, 6, 0],
                  [0, 0, 0],
              ];
          } else if (type === 'T') {
              return [
                  [0, 7, 0],
                  [7, 7, 7],
                  [0, 0, 0],
              ];
          }
      }
  
      function drawMatrix(matrix, offset) {
          matrix.forEach((row, y) => {
              row.forEach((value, x) => {
                  if (value !== 0) {
                      context.fillStyle = colors[value];
                      context.fillRect(x + offset.x,
                                      y + offset.y,
                                      1, 1);
                      console.log('Original matrix '+ matrix)
                  
                  }
              });
          });
          if (player.matrix!== null) {
            drawMatrix_nextup(player.matrix_nextup, 20);
          }
      }

      function drawMatrix_nextup(matrix, offset) {
        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
              if (value !== 0) {
                // console.log(matrix)
                nextup_context.fillStyle = colors[value];          
                nextup_context.fillRect(x*offset + offset,
                  y*offset + offset,
                  20, 20);     
                  
                console.log('Nextup matrix '+ matrix)
              }


            });
        });     
    }
  
      function draw() {
          context.fillStyle = '#003366';
          context.fillRect(0, 0, canvas.width-5, canvas.height-5);
  
          nextup_context.fillStyle = '#D7DBDD';
          nextup_context.fillRect(0, 0, 100, 100);

          // how the Matrix is drawn

          drawMatrix(arena, {x: 0, y: 0});
          drawMatrix(player.matrix, player.pos);
      }
  
      function merge(arena, player) {
          player.matrix.forEach((row, y) => {
              row.forEach((value, x) => {
                  if (value !== 0) {
                      arena[y + player.pos.y][x + player.pos.x] = value;
                  }
              });
          });
      }
  
      function rotate(matrix, dir) {
          for (let y = 0; y < matrix.length; ++y) {
              for (let x = 0; x < y; ++x) {
                  [
                      matrix[x][y],
                      matrix[y][x],
                  ] = [
                      matrix[y][x],
                      matrix[x][y],
                  ];
              }
          }
  
          if (dir > 0) {
              matrix.forEach(row => row.reverse());
          } else {
              matrix.reverse();
          }
      }
  
      function playerDrop() {
          player.pos.y++;
          if (collide(arena, player)) {
              player.pos.y--;
              merge(arena, player);
              player.matrix = player.matrix_nextup ;
              playerReset();
              arenaSweep();
              updateScore();
              console.log('I touched the bottom')
          }
          dropCounter = 0;
      }
  
      function playerMove(offset) {
          player.pos.x += offset;
          if (collide(arena, player)) {
              player.pos.x -= offset;
          }
      }
  
      function playerReset() {
          const pieces = 'TJLOSZI';
          player.matrix_nextup = createPiece(pieces[pieces.length * Math.random() | 0]);
          if (player.matrix === null) {
              player.matrix = player.matrix_nextup;
          }
          player.pos.y = 0;
          player.pos.x = (arena[0].length / 2 | 0) -
                        (player.matrix[0].length / 2 | 0);
          if (collide(arena, player)) {
              arena.forEach(row => row.fill(0));
              player.score = 0;
              updateScore();
          }
      }
  
      function playerRotate(dir) {
          const pos = player.pos.x;
          let offset = 1;
          rotate(player.matrix, dir);
          while (collide(arena, player)) {
              player.pos.x += offset;
              offset = -(offset + (offset > 0 ? 1 : -1));
              if (offset > player.matrix[0].length) {
                  rotate(player.matrix, -dir);
                  player.pos.x = pos;
                  return;
              }
          }
      }
  
      let dropCounter = 0;
      let dropInterval = 1000;
  
      let lastTime = 0;
      function update(time = 0) {
          const deltaTime = time - lastTime;
  
          dropCounter += deltaTime;
          if (dropCounter > dropInterval) {
              playerDrop();
          }
  
          lastTime = time;
  
          draw();
          requestAnimationFrame(update);
      }
  
      function updateScore() {
          document.getElementById('score').innerText = player.score;
      }
  
      document.addEventListener('keydown', event => {
          if (event.keyCode === 37) {
              playerMove(-1);
          } else if (event.keyCode === 39) {
              playerMove(1);
          } else if (event.keyCode === 40) {
              playerDrop();
          } else if (event.keyCode === 81) {
              playerRotate(-1);
          } else if (event.keyCode === 87) {
              playerRotate(1);
          } else if (event.keyCode === 32) {
              alert("PAUSE MENU");
          }
      });
  
      const colors = [
          null,
          '#FF0D72',
          '#0DC2FF',
          '#0DFF72',
          '#F538FF',
          '#FF8E0D',
          '#FFE138',
          '#3877FF',
      ];
  
      const arena = createMatrix(12, 20);
  
      const player = {
          pos: {x: 0, y: 0},
          matrix_nextup : null,
          matrix: null,
          score: 0,
      };
  
      playerReset();
      updateScore();
      update();
    }
})