# React Tic-Tac-Toe

## How to Play

1. Fork/Clone this repo onto your local system.
2. `cd` into "tic-tac-toe" and run `npm i && npm start` in your terminal/prompt.
3. If the application doesn't automatically launch, click (or type) <http://localhost:3000/> into a browser of your choice (Google Chrome is recommended).
4. Play as many games of Tic-Tac-Toe against the computer as you wish!

## Technologies

- React
- Enzyme
- Chai
- HTML/CSS

## Testing

To run the tests type `npm test` into your terminal/prompt. All tests can be found in "tests" folder inside the "src" folder.

## Issues

- Clicking on a square that has already been selected causes the application to break. As a workaround, I have decided that the program should clear the board and start a new game if a square is clicked on twice.

- After a winner has been declared, the "Update Score!" button can be pressed multiple times, causing the wins and losses to be incremented by the amount of times the button has been pushed.

## Resources

- [MiniMax Algorithm Tic Tac Toe](https://www.youtube.com/watch?v=cGN6LfnOPeo)
- [Enzyme Tutorial - How to Write Test Code for React](https://www.youtube.com/watch?v=nvL2ha0XUYo&t=254s
)
- [Creating an AI for Tic-Tac-Toe with the Minimax Algorithm](https://www.youtube.com/watch?v=tK6CxQxF_9g&t=413s)
