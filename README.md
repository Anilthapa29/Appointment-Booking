# Appointment Booking

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Description

This is Appointment Booking System for a user to book a lawyer appointment.

- User user name is hard code in `userdetails.js` file.
- lawyer details and available time and the category also hardcoded in `lawyerdetails.js` file.
- `login` part, it's logic is compare user input username and password.
- it's show `incorrect password` when username or password is wrong.
- for presisted login, local storage is used to store the boolean value about the login and userdetails.
- ## Booking
- user need to select the area of the serivce and based on that Lawyer choice will be shown to user.
- on selecting the lawyer, lawyer avaiable date can be selected.
- after that clicking add Appointment will populate the appointment detail list.
- user can cancel and edit the appointment.
- Appointment list is save the a runtime variable and clear on refreshing the page.

## Thins to Improve

If I have more time and resource , I would have implemented following.

- Develop backend system to handle the login.
- API to fetch lawyer details with rating , available dates and make date unavailable on appoinment is booked.
- API to save the appoinment date in database.

### Steps to run the application

install the `node` latest version

run command `npm install` to install dependency

to run the application `npm run dev`

## Get Latest changes

run `git pull` command in vs code terminal

## Description about the project

I use vite to build React js app. React js is a modern web app building library.
I create login component that will display login screen that takes username and password as input and on Clicking the login button. it will validate with the userdetails info and if it match it will be successfull other wise It will wrong password.
<br>
<br>
on successful login, user will be take to appointment booking component. Appointment booking component includes two component booking form to take user input and appointment list.
I am using html, css, javascript to create a component using react js library.
I used react hooks, useState(), React library e.g Datepicker, arrow functions in this project.
