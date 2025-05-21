# Pong Game

![download](https://github.com/matiasrodlo/pong-game/assets/52969662/93e9462e-41ea-41cc-a10d-4c0c855c7f90)

A classic Pong game implementation using HTML5 Canvas and JavaScript. This project recreates the iconic arcade game with modern web technologies.

## Game Features

- Classic Pong gameplay
- Smooth paddle and ball movement
- Score tracking
- Responsive design
- Modern visual effects

## Getting Started

### Prerequisites

- Python 3.x (for running the local server)
- A modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/matiasrodlo/pong-game.git
cd pong-game
```

2. Start the local server:
```bash
python3 -m http.server 8000
```

3. Open your web browser and navigate to:
```
http://localhost:8000
```

## How to Play

- Use the **Up Arrow** key to move the right paddle up
- Use the **Down Arrow** key to move the right paddle down
- The left paddle is controlled by the computer
- Score points by getting the ball past your opponent's paddle
- The game continues until you close the browser window

## Project Structure

```
pong-game/
├── src/                    # Source code directory
│   ├── index.html         # Main HTML file
│   ├── js/                # JavaScript files
│   │   ├── script.js      # Main game logic
│   │   ├── Ball.js        # Ball class implementation
│   │   └── Paddle.js      # Paddle class implementation
│   └── css/               # Styles directory
│       └── styles.css     # CSS styles
├── requirements.txt       # Project dependencies
└── README.md             # Project documentation
```

## Technologies Used

- HTML5 Canvas
- JavaScript (ES6+)
- CSS3
- Python (for local development server)

## License

This project is open source and available under the MIT License.
