# StyleKit JavaScript Library

StyleKit is a feature-rich JavaScript library designed to simplify and enhance web design tasks related to styling, animations, and event handling. With a fluent and chainable API, it provides an intuitive way to work with styles and create dynamic and engaging user interfaces.

## Features

- Add, remove, and toggle CSS classes on elements
- Apply CSS animations with customizable durations
- Handle transitions and animation events easily
- Set and manipulate CSS styles dynamically
- Chainable and fluent API for concise and expressive code

## Getting Started

1. Include the `stylekit.js` script in your HTML file:

    ```html
    <script src="path/to/stylekit.js"></script>
    ```

2. Use the StyleKit functions in your JavaScript code:

    ```javascript
    var myElement = document.getElementById('myElement');

    // Example usage
    StyleKit.addClass(myElement, 'highlight').wait(500).animate(myElement, 'fadeIn', 1000, () => {
      console.log('Element faded in!');
    });
    ```

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
