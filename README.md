# Redirect Login Validator


https://user-images.githubusercontent.com/98852912/235747353-31a37b09-8a1d-4ab8-ae8a-1033e0e933a1.mp4


## Menu

- [Redirect Login Validator](#redirect-login-validator)
  - [Presentation](#presentation)
  - [Objective](#objective)
  - [Deploy](#deploy)
  - [Functionalities](#functionalities)
  - [Technologies](#technologies)
  - [What I Learned](#what-i-learned)
    - [CSS](#css)
    - [JavaScript](#javascript)
  - [Status](#status)

### Presentation

Secure Login Validator is a JavaScript application for validating user login and password input, and redirecting to a new page if the input is correct.

### Objective

The objective of this project is to practice web development skills and demonstrate the ability to create a functional login page. Learn more at: [What I learned](#what-i-learned)


### Deploy

- Link : <a href="https://redirect-login-validator.netlify.app/" target="_blank">Redirect Login Validator</a>

### Functionalities

- Display placeholders in the username and password input fields when they are in focus
- Remove placeholders from the username and password input fields when they lose focus
- Validate the username and password fields when the user submits the login form
- If the fields are empty, show an alert message and clear the fields
- If the username and password are incorrect, show an alert message and clear the fields
- If the username and password are correct, redirect the user to the home page.
- Use the login and password 'admin' to access the admin page
- Use the login and password 'usuario' to access the user page

### Technologies


<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">

### What I Learned

#### CSS

- I learned to use 'em' units instead of 'px' because they are scalable and can be useful for creating responsive layouts, where elements adapt according to the font size of the parent element, which may change depending on the device or screen resolution.
- I also learned about transform, which is a CSS property that can be used to perform various transformations on HTML elements, such as translations, rotations, and scales.
- In particular, I learned how to use the translate function with values of -50% for the top and bottom positions and -50% for the left and right positions to center content on the page.

- Another thing I learned was how to create an animation on the input label, moving it slightly to the top and reducing its size to give visual feedback to the user when typing in the field.
- Finally, I learned about the clamp function in font size, which helps ensure that the font size is readable and pleasing on different screen sizes, without needing to create specific styles for each device.

#### JavaScript

- I learned to use the addEventListener function along with the focus and blur events.
- When the user clicks on the input field, I use the focus event to display a placeholder with explanatory text.
- And when the user clicks on another part of the page, I use the blur event to make the placeholder disappear and the field becomes empty again.


### Status

- Completed: [![Netlify Status](https://api.netlify.com/api/v1/badges/5433c841-e738-419e-912f-d93faeac3678/deploy-status)](https://app.netlify.com/sites/redirect-login-validator/deploys)
