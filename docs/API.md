# Pong Game API Documentation

## Ball Class

### Constructor
```javascript
new Ball(x, y, size, speed)
```
Creates a new ball instance.

#### Parameters
- `x` (number): Initial x position
- `y` (number): Initial y position
- `size` (number): Ball diameter
- `speed` (number): Initial ball speed

### Methods

#### move()
```javascript
ball.move()
```
Updates the ball's position based on its velocity.

#### checkCollision()
```javascript
ball.checkCollision(paddle1, paddle2)
```
Checks for collisions with paddles and walls.

#### Parameters
- `paddle1` (Paddle): Left paddle instance
- `paddle2` (Paddle): Right paddle instance

#### reset()
```javascript
ball.reset()
```
Resets the ball to the center position with random direction.

## Paddle Class

### Constructor
```javascript
new Paddle(x, y, width, height, speed)
```
Creates a new paddle instance.

#### Parameters
- `x` (number): Initial x position
- `y` (number): Initial y position
- `width` (number): Paddle width
- `height` (number): Paddle height
- `speed` (number): Paddle movement speed

### Methods

#### move()
```javascript
paddle.move(direction)
```
Moves the paddle up or down.

#### Parameters
- `direction` (number): 1 for up, -1 for down

#### setPosition()
```javascript
paddle.setPosition(x, y)
```
Sets the paddle's position.

#### Parameters
- `x` (number): New x position
- `y` (number): New y position

#### getPosition()
```javascript
paddle.getPosition()
```
Returns the current position of the paddle.

#### Returns
- `Object`: {x: number, y: number}

## Game Controller

### Methods

#### start()
```javascript
game.start()
```
Starts the game loop.

#### stop()
```javascript
game.stop()
```
Stops the game loop.

#### reset()
```javascript
game.reset()
```
Resets the game state.

#### updateScore()
```javascript
game.updateScore(player, computer)
```
Updates the score display.

#### Parameters
- `player` (number): Player's score
- `computer` (number): Computer's score

## Event Handlers

### Keyboard Controls
- Up Arrow: Move right paddle up
- Down Arrow: Move right paddle down

### Game Events
- Ball collision with paddle
- Ball collision with wall
- Score update
- Game reset

## CSS Classes

### Game Elements
- `.ball`: Ball styling
- `.paddle`: Paddle styling
- `.score`: Score display
- `.player-score`: Player's score
- `.computer-score`: Computer's score

### States
- `.game-over`: Game over state
- `.paused`: Paused state
- `.active`: Active game state 