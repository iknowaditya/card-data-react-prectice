#SHOW-DATA-IN-CARD..

Person Component

This is a React component that renders a list of people with their personal details and images. It takes no props.

How to Use

Import the Person component into your React project.
Use the component by adding <Person /> to your JSX code.
The component will render a grid of people with their personal details and images.
Code Description

The Person component maps through an array of data objects containing information for each person, and generates a div element for each person with their personal details and image.

The data array contains four objects, each with the following properties:

name: the name of the person
gender: the gender of the person
DOB: the date of birth of the person
occupation: the occupation of the person
image: the URL of the person's image
The people constant generates the grid of people by mapping through the data array and generating a div element for each person using the information from each object in the data array.

The component returns a div element that contains the people constant mapped out 7 times, effectively rendering the list of people 8 times. The reason for this is unclear from the code, but it could be for demonstration purposes or testing.

The Person component also imports a CSS file called Person.css, which presumably contains the styles for the component's layout and appearance.
