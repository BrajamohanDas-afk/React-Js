# React
- It is an external library that helps us create websites easier.
- `ReactDOM.createRoot(container)`: This basically sets up the root, and to set it up we have to give it an HTML element.
- `.render()`: Displays the output for the HTML element.
- In React, we can create our own React components.
- In React, we should not modify the data directly. We should make a copy of it and then use it.
- In React,  we use className to set a class

---

## What is Babel?
- It is a JavaScript compiler which translates other languages into JavaScript.
- `<script type="text/babel">`: This will help convert the HTML to JavaScript.

---

## JSX 
- JavaScript XML.
- Same as JavaScript, but we can write HTML directly in our JavaScript code.

---

## Creating Elements

### Single div
```javascript
const div = <div></div>;
```

### Multiple elements in a single div
```javascript
const div = 
  <div>
    <button>hello</button>
    <p>Goodbye</p>
  </div>
```

---

## Component
- It is a piece of the website.
- Component name should start with a **capital letter**.
- Function structure:
  ```javascript
  function Component() {
    // JavaScript logic here

    return (
      // JSX (HTML + JS expressions)
    );
  }
  ```
- In JSX, everything needs a closing tag like `<input></input>`, so the shortcut for this is `<input />`.
- In the *return*, when we return more than 1 element it shows an error. To fix this we can do it through a *div*.
- There are 2 ways to insert a component: `{ChatInput()}` and `<ChatInput></ChatInput>`.
- `<Fragment></Fragment>` or `<></>` both of them help us group multiple elements together.
- Every component function gets one parameter.

### Props
- Props is an object.
- It's the shortcut for properties.
- It makes the code reusable.
- Shortcut:
  ```javascript
  const message = props.message;
  const sender = props.sender;
  ```
  
  **to**
  
  ```javascript
  const {message, sender} = props;
  ```

### Guard Operator (&&)
```javascript
const result = value1 && value2;
```
- If `value1` is true, then the result will be `value2`.
- This works just like an if-statement. 
- This also lets us insert if-statements directly into the JSX.

---

## Event Handlers
- Runs a function when we interact with the website.
- `.push()`: Adds a value to the end of the array.
- `crypto.randomUUID()`: It will create a random ID.
- Examples:
  - `onClick()`: Runs when clicking an element
  - `onChange()`: Runs when we change the text inside an `<input>`

### Event Object
- Event is an object.
- `event.target.value`: Gives us the value of the element that we are typing in.

---

## State
- Data that is connected to the HTML.
- When we update this data, it will update the HTML.
- How to create state: `React.useState()` thi is also a ***hook*** 

### Spread Operator (...)
- Takes the values in an array and copies them into a new array.

### Lifting the State Up 
- Moving state from a child component to a parent component so multiple components can share and use the same data.

<img src="lifting-state-up.png" alt="Lifting the State Up Diagram" width="500" />

---

## Hooks
- insert Recat features into our component
- every hook start with a **use**
- There are 3 main Hooks
  - `useEffect()` - runs some code after the component is updated or created.
    - Dependency Array = contol when useEffect runs.
  - `useRef()` - automatically saves an html element from the component.
    - ***ref*** it is a containerwith special react features.
    
<img src="hooks.png" alt="hooks written style" width="500" />

---

## Routes
- `<Routes></Routes>` - This tells react all the pages that are in the wesite.
  - `<Route></Route>` - To add a page to the website we use route. 
  - Route=Page.
    - `<Route path="/" element={<HomePage />}></Route>`
    - Path="/" (should be lowercase path) —     defines the URL route (e.g., domain.com/)
    - element={<HomePage />} — specifies what    component to display at that route
    - when an path is empy we an put ***index*** in its place
 
