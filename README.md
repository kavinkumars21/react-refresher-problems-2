# React coding problems

React coding problems focusing on event handling and state management, ranging in difficulty from beginner to intermediate. Each problem includes a brief description, key concepts to focus on, and expected output.

---

### React Coding Problems: Event Handling & State Management

**Difficulty Scale:**
* (B) - Beginner
* (I) - Intermediate

---

**Problem 1: Simple Counter (B)**

**Description:** Create a component `Counter` that displays a number and has two buttons: "Increment" and "Decrement". Clicking "Increment" should increase the number by 1, and "Decrement" should decrease it by 1. The number should never go below zero.

**Concepts:** `useState`, `onClick` event, conditional rendering (for disabling decrement button or preventing negative numbers).

**Expected Output:** A number (initially 0), "Increment" button, "Decrement" button. Number updates on click.

---

**Problem 2: Text Input Mirror (B)**

**Description:** Build a component `TextInputMirror` that contains an input field and a paragraph. As the user types in the input field, the text in the paragraph should update in real-time to mirror the input.

**Concepts:** `useState`, `onChange` event, controlled components.

**Expected Output:** An input field and a paragraph. Text typed into the input instantly appears in the paragraph.

---

**Problem 3: Toggle Dark Mode (B)**

**Description:** Create a component `ThemeToggler` with a button. When the button is clicked, it should toggle a "dark mode" class on the `<body>` element. The button text should also change between "Enable Dark Mode" and "Disable Dark Mode".

**Concepts:** `useState`, `onClick` event, `document.body.classList.toggle()`, side effects (though `useEffect` isn't strictly necessary for this simple case, it's good to start thinking about it for DOM manipulation).

**Expected Output:** A button that toggles a dark background/text color on the page and updates its own text.

---

**Problem 4: Dynamic List Filtering (I)**

**Description:** Implement a component `FilterableList` that displays a list of items (e.g., names of fruits). Above the list, there should be an input field. As the user types into the input, the list should dynamically filter to show only items that contain the typed text (case-insensitive).

**Concepts:** `useState` for both input value and filtered list, `onChange` event, `Array.prototype.filter()`, string methods (`toLowerCase()`, `includes()`).

**Expected Output:** An input field and a list of items. Typing in the input filters the list in real-time.

---

**Problem 5: Form Validation - Email and Password (I)**

**Description:** Create a simple login form component `LoginForm` with two input fields: "Email" and "Password", and a "Submit" button. Implement basic validation:
* Email should contain "@".
* Password should be at least 6 characters long.
Display error messages below each field if validation fails when the "Submit" button is clicked.

**Concepts:** `useState` for input values and error messages, `onChange` event, `onSubmit` event, preventing default form submission, conditional rendering of error messages.

**Expected Output:** An email input, a password input, and a submit button. Error messages appear on submit if validation fails.

---

**Problem 6: Character Count with Limit (I)**

**Description:** Build a `CharacterCounter` component with a textarea. Display the current character count below the textarea. Implement a character limit (e.g., 100 characters). If the user exceeds the limit, display a warning message and optionally disable further typing (though just the warning is sufficient for this problem).

**Concepts:** `useState` for textarea value, `onChange` event, string `length` property, conditional rendering based on character count.

**Expected Output:** A textarea, a live character count, and a warning message if the limit is exceeded.

---

**Problem 7: Simple To-Do List (I)**

**Description:** Create a `TodoList` component. It should have an input field and an "Add" button. When the user types a task and clicks "Add", the task should be added to an unordered list displayed below. Each task in the list should also have a "Delete" button next to it that removes the task.

**Concepts:** `useState` for the input value and the array of tasks, `onClick` event, `Array.prototype.map()` for rendering list items, `Array.prototype.filter()` for deleting items, unique keys for list items.

**Expected Output:** An input field, an "Add" button, and an unordered list of tasks, each with a "Delete" button.

---

**Problem 8: Image Gallery with Active Image (I)**

**Description:** Develop an `ImageGallery` component. It should display a main large image and a set of smaller "thumbnail" images below it. When a user clicks on a thumbnail, the main large image should update to display the image corresponding to the clicked thumbnail.

**Concepts:** `useState` to manage the currently active image URL, `onClick` event on thumbnails, passing data (image URLs) as props.

**Expected Output:** A large image display area, and a row of smaller clickable image thumbnails. Clicking a thumbnail changes the main image.

---

**Problem 9: Accordion/Collapsible Panel (I)**

**Description:** Create an `Accordion` component that displays a list of "panels". Each panel should have a header and a content area. When the header is clicked, the content area should toggle between visible and hidden. Only one panel should be open at a time (clicking a new panel's header should close any currently open panel).

**Concepts:** `useState` to track which panel is open (e.g., an index or ID), `onClick` event on panel headers, conditional rendering or CSS classes to show/hide content.

**Expected Output:** A series of collapsible panels. Clicking a panel header expands it and collapses any other open panel.

---

**Problem 10: Parent-Child Communication - Counter Reset (I)**

**Description:** Create two components: `ParentComponent` and `ChildCounter`. `ChildCounter` should be the simple counter from Problem 1. `ParentComponent` should render `ChildCounter` and have a "Reset Child Counter" button. Clicking this button in the parent should reset the `ChildCounter`'s count back to 0.

**Concepts:** Lifting state up, passing a function as a prop from parent to child, `onClick` event in the parent.

**Expected Output:** A `ParentComponent` displaying a "Reset Child Counter" button and the `ChildCounter` component. The button in the parent resets the child's count.

---

Here are 5 more React coding problems, incorporating **style manipulation** along with event handling and state management.

---

### React Coding Problems: Event Handling, State Management & Style Manipulation

**Difficulty Scale:**
* (B) - Beginner
* (I) - Intermediate
* (A) - Advanced

---

**Problem 11: Dynamic Box Resizer (I)**

**Description:** Create a component `BoxResizer` that displays a `div` element (a box). Below the box, include two buttons: "Increase Size" and "Decrease Size". Clicking these buttons should increase or decrease the width and height of the box by a fixed amount (e.g., 20px). Ensure the box doesn't shrink to less than 20px by 20px.

**Concepts:** `useState` for box dimensions (width, height), `onClick` event, **inline styles** or **dynamic CSS classes** (`style` prop with an object), conditional logic for minimum size.

**Expected Output:** A square box, "Increase Size" button, "Decrease Size" button. Clicking buttons changes the box's dimensions.

---

**Problem 12: Color Picker (I)**

**Description:** Build a `ColorPicker` component. It should display a `div` element and a set of color buttons (e.g., "Red", "Green", "Blue", "Yellow"). When a color button is clicked, the background color of the `div` element should change to that color.

**Concepts:** `useState` for the current color, `onClick` event, **inline styles** (`backgroundColor` property), mapping over an array of colors to render buttons.

**Expected Output:** A colored box and multiple color buttons. Clicking a button changes the box's background color.

---

**Problem 13: Progress Bar (I)**

**Description:** Implement a `ProgressBar` component. It should have a visual progress bar (a `div` inside another `div` to represent the filled portion) and an input field to enter a percentage value (0-100). As the user types a valid percentage in the input, the width of the filled portion of the progress bar should update accordingly.

**Concepts:** `useState` for the percentage value, `onChange` event, input validation, **inline styles** to control `width` (e.g., `${percentage}%`).

**Expected Output:** An input field, and a progress bar that visually fills up based on the entered percentage.

---

**Problem 14: Accordion with Active Style (I)**

**Description:** Enhance Problem 9 (Accordion/Collapsible Panel). When a panel is open, its header should have a distinct background color or font weight to visually indicate it's the active panel.

**Concepts:** `useState` to track the active panel, `onClick` event, **conditional styling** using **inline styles** or by conditionally adding/removing **CSS classes** based on the active panel state.

**Expected Output:** A series of collapsible panels. Clicking a panel header expands it, collapses others, and the active panel's header changes style.

---

**Problem 15: Draggable Square (A)**

**Description:** Create a `DraggableSquare` component. It should render a square `div` element. The user should be able to click and drag this square around the screen.

**Concepts:** `useState` for `top` and `left` CSS properties, `onMouseDown`, `onMouseMove`, and `onMouseUp` events, calculating mouse movement to update position, preventing default browser drag behavior, **inline styles** for positioning (`position: 'absolute'`, `top`, `left`).

**Expected Output:** A square that can be clicked and dragged freely around the browser window.

---
