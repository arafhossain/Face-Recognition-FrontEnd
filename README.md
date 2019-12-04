# Face Recognition App
This application allows users to register and submit image links to a machine learning API (Clarifai) which detects faces in the linked image. The front-end is built on Reactjs, where users register their information. This data is sent to a Node.js server where it is registered on and checked against a PostgreSQL database deployed on Heroku. The database possesses the user name, email address, and a Bcrypt-hashed password, along with the number of entries the user has submitted to the API. After user sign-in, the server displays the amount of submissions a user has made to the API across all login sessions.

Currently hosted on gh pages: https://arafhossain.github.io/Face-Recognition-FrontEnd/
- - -
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
