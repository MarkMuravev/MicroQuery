## MicroQuery

A lightweight, zero-dependency DOM manipulation library with jQuery-like syntax.

## Features

- **Lightweight**: Only ~1KB (~0.5KB minified)
- **Zero dependencies**: Works out of the box
- **jQuery-like syntax**: Familiar API for developers
- **Modern JavaScript**: Uses ES6+ features
- **TypeScript support**: Includes type definitions

## Installation

```
npm install microquery.js
```

## Usage

```javascript
import $ from 'microquery.js';

// Select elements and attach event listeners
const element = $('selector');
element.on('click', (event) => {
    console.log('Element clicked!');
});

// Remove event listeners
element.off('click');

// Manipulate DOM
element.empty(); // Clear content
element.remove(); // Remove element
```

## API

### `$(selector)`

Selects elements from the DOM and returns a wrapper object with additional methods.

### `element.on(event, callback)`

Attach an event listener to the selected element.

### `element.off(event)`

Remove event listeners from the selected element. If no event is specified, removes all listeners.

### `element.empty()`

Clear the content of the selected element.

### `element.remove()`

Remove the selected element from the DOM.

## License

MIT
