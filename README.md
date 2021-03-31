# Fitness Tracker

![html](https://img.shields.io/github/languages/top/jxhnkndl/workout-tracker?style=plastic)
![commit](https://img.shields.io/github/last-commit/jxhnkndl/workout-tracker?style=plastic)
![license](https://img.shields.io/static/v1?label=license&message=MIT&color=orange&style=plastic)


## Table of Contents
* [Deployed Application](#deployed-application)
* [Description](#description)
* [Technologies](#technologies)
* [Installation](#installation)
* [Local Database Setup](#local-database-setup)
* [Usage](#usage)
* [Application Demo](#application-demo)
* [License](#license)
* [Contact](#contact)


## Deployed Application
Visit the deployed application here: [Fitness Tracker](https://afternoon-headland-50798.herokuapp.com/)


## Description
This fitness tracking application offers users a simple way to track and chart their workout data. On application launch, users are greeted with a snapshot containing data points from their most recent workout. Using a clean and intuitive interface, users can then choose between creating and adding exericses to a new workout or adding additional exercises to their most recent workout. Users can also visit a workout dashboard to access aggregated data points like total duration and total weight lifted charted for workouts over the last seven days. 


## Technologies
* Node.js
* Express
* MongoDB
* Mongoose.js
* JavaScript
* HTML
* CSS
* Semantic UI


## Installation
While the application can be visited and interacted with at it's deployment link, the project can also be installed to run locally using the steps below.  

This application requires Node.js and npm to run locally. To check whether Node.js and npm are installed locally, run:
```
node -v
```
```
npm -v
```
If Node and npm are already installed, the commands above should return version numbers. Visit [Node.js](http://www.nodejs.org/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for full installation details and documentation.  

Running this application locally requires installation of the following **npm** modules: `express`, `mongoose`, `morgan`, `dotenv`, and `nodemon` . 

To install the project and its npm dependencies, navigate to the project's root directory and run:
```
npm install
```
Once all third-party packages have been successfully installed, the application is ready to use. For more details, reference the application's `package.json` file.


## Local Database Setup

This application uses a MongoDB database to store workout data. To run the application locally, MongoDB must be installed and configured locally. The deployed application uses MongoDB Atlas to store its data in the cloud.

The application uses `mongoose.js` to define and enforce a schema on documents inserted into the `workouts` collection. The `Workout.js` file inside the `models` directory contains the workout schema.

The application also includes a `seed.js` file in the `seeders` directory containing mock workout data. Running `npm run seed` from the project's root directory will **remove and replace** any data currently in the `workouts` collection with the script's seed data. Before running the seed file, ensure that MongoDB is installed and capable of running locally.

Each workout is written to the database as a single document. Within that document, an `exercises` field stores an array containing all of the workout's individual exercise objects. When a user adds an exercise to an existing workout, they are actually creating a new exercise object and pushing it into the larger workout document.


## Usage
Once npm packages have been installed and the database has been initialized, the application can be launched:
```
npm start
```
Or in continuous mode using `nodemon` (server refreshes automatically if code changes):
```
npm run watch
```



## Application Demo
The following video documents the application's functionality and user experience:

[![Application Preview](assets/demo-gifs/fitness-tracker.gif)](https://drive.google.com/file/d/14bN4T-6zd9Ire8DTcj_6lJJeyHsDrWnW/view)


## License
Copyright (c) 2021 J.K. Royston  
Licensed under the [MIT License](https://opensource.org/licenses/MIT).


## Contact
J.K. Royston  
<jkroyston@gmail.com>  
[GitHub](https://www.github.com/jxhnkndl)