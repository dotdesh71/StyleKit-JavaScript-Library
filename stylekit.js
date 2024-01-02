// Advanced StyleKit Library

var StyleKit = (function () {
  // Private function to add or remove CSS class
  function toggleClass(element, className) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }

  // Private function to parse and normalize animation events
  function handleAnimationEvents(element, callback) {
    function onAnimationEnd() {
      element.removeEventListener('animationend', onAnimationEnd);
      element.style.animation = '';
      if (callback && typeof callback === 'function') {
        callback();
      }
    }

    element.addEventListener('animationend', onAnimationEnd);
  }

  // Public API
  return {
    // Add a CSS class to an element
    addClass: function (element, className) {
      element.classList.add(className);
      return this; // for chaining
    },

    // Remove a CSS class from an element
    removeClass: function (element, className) {
      element.classList.remove(className);
      return this; // for chaining
    },

    // Toggle a CSS class on an element
    toggleClass: function (element, className) {
      toggleClass(element, className);
      return this; // for chaining
    },

    // Apply a CSS animation to an element
    animate: function (element, animationName, duration = 1000, callback) {
      element.style.animation = `${animationName} ${duration / 1000}s`;
      handleAnimationEvents(element, callback);
      return this; // for chaining
    },

    // Handle transition end event with a callback function
    onTransitionEnd: function (element, callback) {
      function onTransitionEndCallback() {
        element.removeEventListener('transitionend', onTransitionEndCallback);
        if (callback && typeof callback === 'function') {
          callback();
        }
      }

      element.addEventListener('transitionend', onTransitionEndCallback);
      return this; // for chaining
    },

    // Set CSS styles for an element
    setStyles: function (element, styles) {
      Object.assign(element.style, styles);
      return this; // for chaining
    },

    // Chainable function to wait for a specified time
    wait: function (duration, callback) {
      setTimeout(() => {
        if (callback && typeof callback === 'function') {
          callback();
        }
      }, duration);
      return this; // for chaining
    }
  };
})();

// Example usage:

// Chained operations with improved animation and transition handling
StyleKit.addClass(myElement, 'highlight')
  .wait(500)
  .setStyles(myElement, { backgroundColor: 'red', color: 'white' })
  .animate(myElement, 'fadeIn', 1000, () => console.log('Element faded in!'))
  .wait(2000)
  .removeClass(myElement, 'highlight')
  .onTransitionEnd(myElement, () => console.log('Transition ended!'));

// Fluent API for adding classes and handling click event
StyleKit.addClass(myElement, 'active').onTransitionEnd(myElement, () => {
  console.log('Element transition ended!');
});

// Animated fadeIn with custom duration
StyleKit.animate(myElement, 'fadeIn', 2000, () => {
  console.log('Element faded in with custom duration!');
});
