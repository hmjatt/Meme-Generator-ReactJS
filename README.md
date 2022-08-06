# Meme-Generator-ReactJS 🤪
Creating a **`Meme Generator App`** using `ReactJS`


<!-- ## [Live Preview](https://hmjatt.github.io/Meme-Generator-ReactJS/)

![This is an image]()
![This is an image]() -->

<hr>

### About ℹ️

This app generates a *meme* by reaching out to `imgflip API`, getting the 100 most popular *meme images* at that time. One of those *meme images* will be and users can enter the *meme text*. The `meme text` will then be placed over the selected `meme image`, hence creating a `meme` :trollface: and users can also press a `button` to generate a new `meme image`. By creating this project I learned about `Event Listeners in React`, `React State`, `Conditional Rendering in React`, `React Forms`, `React Hooks(useEffect)`, etc. After creating the project, it was deployed to `github-pages` :bird: Feel free to reach me at [Twitter](https://twitter.com/hmjatt/) 🪶

<hr>

### Technologies Used 💻

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a> &emsp; <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> </a> &emsp; <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> </a> &emsp; <a href="https://www.w3schools.com/js/js_es6.asp" target="_blank" rel="noreferrer"> <img src="https://camo.githubusercontent.com/792f7fce1ff8bfac6d0524a21b69161cdc6080a3c4e39979f21d5f8489d6fdd3/68747470733a2f2f692e626c6f67732e65732f3534356366382f6573362d6c6f676f2f6f726967696e616c2e706e67" alt="ES6" width="50" height="50"/> </a> &emsp; <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactJS" width="50" height="50"/> </a> &emsp; <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png" alt="figma" width="70" height="50"/> </a>

<hr>

## Includes the following features/components ⚙️

    - ReactJS
    - create-react-app
    - Figma Design Template
	- imgflip API
	- Event Listeners in React
	- React State
	- React Forms
	- Conditional Rendering in React
	- React Hooks(useEffect)
    - github-pages

<hr>

## Usage 🤓

```
cd meme-generator

```

```
npm install

```

```
npm start

```
<hr>

## Steps I followed to complete this project 🪜

### 1. Initialize Project 🎍

- [x] Initialize the project using `npx create-react-app meme-generator` which will create a complete **React App** pre-configured and pre-installed with all the dependencies.
- [x] Import **`Karla`** font from google fonts and apply it to **`App`** component.

### 2. Organize components 🗄️

- [x] Create a `components` folder inside `src` directory.
- [x] Create **custom components** inside `components` folder.
- [x] Create an `images` folder inside `src` directory and add images/logos inside it. 
- [x] Create an `styles` folder inside `src` directory and add `.css` files inside it.


### 3. Clean directory🧹

- [x] Delete **unnecessary** files and code from directory.

### 4. Header Component 🧩

- [x] Create **`Header`** component and basic JSX elements for it.
- [x] Add appropriate `className`s to elements in `Header` component.
- [x] Add `troll-face.png` image to **`Header`** component.
- [x] Import **`Header`** component inside `App` component.
- [x] Style **`Header`** and **`App`** component .

### 5. Meme Component 🧩

- [x] Create **`Meme`** component and basic JSX elements for it.
- [x] Add appropriate `className`s to elements in `Meme` component.
- [x] Import **`Meme`** component inside **`App`** component.
- [x] Add basic style to **`Meme`** component.

### 6. Footer Component 🧩

- [x] Create **`Footer`** component and basic JSX elements for it.
- [x] Import **`Footer`** component inside `App` component.
- [x] Style **`Footer`** component.

### 7. Map Experiences Data Into Components 🗺️

<!-- - [x] Create a file called `data.js`, which contains an _array of objects_. It represents the data that will be used inside **`Card`** component.
- [x] Import _images_ for **`Card`** component.
- [x] Use _.map_ to iterate over _array of objects_ inside `data.js` to create **`Card`** components.
- [x] When we _.map_ over _array of objects_ in **`App`** component, Add _key prop 🗝️ (`key={item.id}`)_ when passing _props_ to **`Card`** components. This will get rid of this warning :

```
⚠️ react_devtools_backend.js:4026 Warning: Each child in a list should have a unique "key" prop.
Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information.
at Card (http://localhost:3000/main.5c1f9e47e1f13a06e783.hot-update.js:27:18)
at App

``` -->

### 8. Make App Responsive 🎨

<!-- - [x] Add _flexbox_ style to `.cards-list` *div* and other *necessary styles*.
- [x] Add a *media query* for `max-width: 600px`.
- [x] App is responsive upto this point. :smiley: -->

<!-- ### 9. Pass object as props(Option #1) 📟

- [ ] Pass entire object when we _.map_ over _array of objects_ in **`App`** component using _item_ as _key_ and _array of objects_ as its _value_.
- [ ] Access the object that is passed as prop in **`Card`** component, where _item_ is _key_ and _array of objects_ are its _values_.

### 10. Spread object as props(Option #2) 📼

- [x] We can make use of `{...item}` [Spread in Object Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals), which takes properties of our _object_ and create a separate prop for each _key_ in _object_. _Value_ of _props_ can be accessed using `props.key` syntax, where _key_ is an actual _key_ in `data.js`. This is an alternate to instead of creating our own _prop_ called _item_ to which we pass our entire _object_.**`Spread object as props(Option #2) 📼`** is used in this project. -->

### 9. Prepare for Deployment 🪢

<!-- - [x] Create total of 7 unique **`Card`** components(*journal entries*) inside **`.cards-list`** by updating `data.js`.
- [x] Delete **unnecessary** files from directory and format code with `Prettier`.
- [x] Test for _Responsiveness_ and make changes if need be ✅.
- [x] Add links to `Live Preview` and _screenshots_ ✅. -->

### 10. Deploy 📤

- [x] Use Official Documentation([link](https://create-react-app.dev/docs/deployment/#github-pages)) to push project to **GitHub Pages** 🎆🎆🎆

<hr>

## Future Changes ♾️

- [ ] Only show `meme images` that are compatible with app design(*2 text fields - top & bottom*).
- [ ] Update the form based upon retrieved `meme image`.


<hr>

## Links to content that helped me with this project 🔗

1. The Odin Project

    - [React Introduction](https://www.theodinproject.com/lessons/node-path-javascript-react-introduction)
    - [React State & Props](https://www.theodinproject.com/lessons/node-path-javascript-state-and-props)
	- [Handle Inputs And Render Lists](https://www.theodinproject.com/lessons/node-path-javascript-handle-inputs-and-render-lists)


2. Figma Design

    - [Meme Generator](https://www.figma.com/file/MoLwFPHNHJVrzdFurxHzNV/Meme-Generator?node-id=0%3A1)

3. Scrimba

    - [Learn React](https://scrimba.com/learn/learnreact)

4. React Official Documentation

    - [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
    - [Handling Events](https://reactjs.org/docs/handling-events.html)
    - [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
    - [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
    - [Forms](https://reactjs.org/docs/forms.html)
	- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
	- [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)


<hr>

#### Quote ✒️

    “People think computers will keep them from making mistakes. They're wrong. With computers you make mistakes faster.”
    — Adam Osborne

> 🦝👻😶‍🌫️