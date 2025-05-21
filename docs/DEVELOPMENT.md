# Development Guide

## Prerequisites
- Python 3.x
- Modern web browser
- Text editor or IDE

## Setup
1. Clone the repository:
```bash
git clone https://github.com/matiasrodlo/pong-game.git
cd pong-game
```

2. Start the development server:
```bash
cd src
python3 -m http.server 8000
```

3. Open your browser and navigate to:
```
http://localhost:8000
```

## Development Workflow

### Making Changes
1. Create a new branch for your feature/fix:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes in the appropriate files:
   - `src/js/` for JavaScript changes
   - `src/css/` for style changes
   - `src/index.html` for HTML changes

3. Test your changes:
   - Run the development server
   - Test in multiple browsers
   - Check for console errors

4. Commit your changes:
```bash
git add .
git commit -m "Description of your changes"
```

5. Push your changes:
```bash
git push origin feature/your-feature-name
```

### Code Style
- Use ES6+ features
- Follow JavaScript best practices
- Maintain consistent indentation
- Add comments for complex logic
- Use meaningful variable and function names

### Testing
- Test in multiple browsers
- Check responsive design
- Verify game mechanics
- Test edge cases
- Ensure smooth animations

## Common Tasks

### Adding New Features
1. Create new JavaScript module if needed
2. Import module in `script.js`
3. Update HTML if necessary
4. Add styles in `styles.css`
5. Test thoroughly

### Modifying Game Mechanics
1. Locate relevant code in `script.js`
2. Make changes to game logic
3. Test game balance
4. Update documentation if needed

### Styling Changes
1. Edit `styles.css`
2. Test responsive design
3. Verify animations
4. Check cross-browser compatibility

## Troubleshooting

### Common Issues
1. Game not starting
   - Check console for errors
   - Verify file paths
   - Check module imports

2. Styling issues
   - Verify CSS selectors
   - Check browser compatibility
   - Inspect element for conflicts

3. Performance issues
   - Check animation smoothness
   - Monitor frame rate
   - Optimize game loop

## Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [CSS-Tricks](https://css-tricks.com/) 