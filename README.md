# Interview Scheduler Web Application
## Project Description

temp

## Project Features
- The landing page showcases the appointment days (i.e. Monday to Friday) which are displayed and color-coded to indicate selection as well as availability on any day.
- Below the days displayed, there is a small snapshot of the available spots for interviews on that day which updates in real time after any changes to the appointment state.
- A user can book an interview by typing in their name and selecting an interviewer from a list, followed by saving the appointment.
- A user is able to switch between any of the days, view the available (if any) appointment spots, book an appointment, cancel an existing appointment by pressing the trash icon, as well as edit an existing appointment with updated information such as name and interviewer by clicking the edit icon.
- When a user wants to cancel an appointment or edit an existing appointment, a confirmation box wil appear to ensure their action is verified prior to execution.


### Landing Page
!['home-page'](temp link)

### Booking New Interview 
!['booking-new-appointment'](temp link)

### Cancelling An Existing Interview  
!['cancel-appointment'](temp link)

## Setup

Install dependencies with `npm install`.

**Note** : _For full functionality of the web application, both of the client and the API server applications must run concurrently (please see below for database* setup)._

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## API server/*Database Setup

- Start by forking & cloning the scheduler-api server which can be found on GitHub [here](https://github.com/lighthouse-labs/scheduler-api)
- Follow the steps outlined in the scheduler-api README to install and setup the database, especially the instructions for resetting the database
- Once you have the database setup and the scheduler-api server is running and dependencies installed in the root directory, you can run `npm start` from the root directory of the project to launch the web app.

## Project Stack

__Front-End:__ JavaScript, HTML, JSX, React, Axios, SASS

__Back-End:__ Express, Node.js, PostgreSQL

__Testing:__ Storybook, Webpack Dev Server, Jest, Testing Library and Cypress

## Dependencies
- Axios
- Babel-loader
- Classnames
- Normalize.css
- React
- React-dom
- React-scripts
- Babel/core
- Storybook/addon-actions
- Storybook/addon-backgrounds
- Storybook/addon-links
- Storybook/addons
- Storybook/react
- Testing-library/jest-dom
- Testing-library/react
- Testing-library/react-hooks
- Prop-types
- React-test-renderer
- Node-sass