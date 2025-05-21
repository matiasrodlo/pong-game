# Pong Game Architecture

## Overview
The Pong game is built using a modular architecture with separate components for different game elements. The game uses HTML5 for structure, CSS3 for styling, and JavaScript (ES6+) for game logic.

## Directory Structure
```
src/
├── index.html         # Main HTML file
├── js/               # JavaScript modules
│   ├── script.js     # Main game logic
│   ├── Ball.js       # Ball class
│   └── Paddle.js     # Paddle class
└── css/              # Styles
    └── styles.css    # Game styles
```

## Component Architecture

### Ball Class (`Ball.js`)
- Handles ball movement and collision detection
- Properties:
  - Position (x, y)
  - Velocity (dx, dy)
  - Size
- Methods:
  - `move()`: Updates ball position
  - `checkCollision()`: Handles paddle and wall collisions
  - `reset()`: Resets ball to center position

### Paddle Class (`Paddle.js`)
- Manages paddle movement and positioning
- Properties:
  - Position (x, y)
  - Size (width, height)
  - Speed
- Methods:
  - `move()`: Updates paddle position
  - `setPosition()`: Sets paddle position
  - `getPosition()`: Returns current position

### Main Game Logic (`script.js`)
- Coordinates game components
- Handles:
  - Game loop
  - Score tracking
  - Input handling
  - AI paddle movement
  - Game state management

## Game Loop
1. Update ball position
2. Check for collisions
3. Update paddle positions
4. Update score
5. Render changes
6. Repeat

## Event Handling
- Keyboard input for player paddle
- Collision detection for ball
- Score updates
- Game state changes

## Rendering
- Uses CSS for visual elements
- DOM manipulation for updates
- CSS transitions for smooth animations 