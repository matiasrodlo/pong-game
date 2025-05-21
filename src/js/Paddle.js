// Constants
const SPEED = 0.02;

// Paddle class
export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem;
    this.reset();
  }

  // Getter and setter for paddle position
  get position() {
    return parseFloat(
      getComputedStyle(this.paddleElem).getPropertyValue("--position")
    );
  }

  set position(value) {
    this.paddleElem.style.setProperty("--position", value);
  }

  // Get rectangle boundaries of the paddle
  rect() {
    return this.paddleElem.getBoundingClientRect();
  }

  // Reset paddle position to initial state
  reset() {
    this.position = 50;
  }

  // Update paddle position based on time delta and ball height
  update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position);
  }
}
