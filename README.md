# 
# PROJECT TITLE - Mojo (Mood Journal)

## PROJECT DESCRIPTION

An app to check in with your mood and daily actions through keeping a daily journal, and taking note of your mood. To set the perfect tone while you journal, Mojo will recommend some music to listen to that compliments your current mood. In order to see your progress, Mojo can show you a variety of easy-to-read graphs of how your mood/activities have changed over time, as well as a calendar feature for you to check back on particular days. The app has gentle aesthetic features, blurred gradients, and soft lines to create a harmonious experience for the user.

## TARGET AUDIENCE
Our application is geared towards anyone looking to build self-awareness around their daily routines, without the preconception that your well-being is something which you can fail at.

## TEAM MEMBERS
**Khin Mo Mo Zin, Katherine Nishimura, Charlie Chandler**

# TECH STACK #

## Languages, Frameworks & Database ##

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## API & External Libraries ##
<div style="display: flex; margin-bottom:15px">
<img src="https://img.shields.io/badge/-Axios-5A29E4?logo=axios&amp;logoColor=white&amp;style=for-the-badge" alt="axios" style="padding-right: 4px">
<img src="documentation/pictures/fullcalendar.jpg" height="28" width=208 alt="full calendar" style="padding-right: 4px">
<img src="documentation/pictures/draftjs.jpg" height="28" width=108 alt="draft.js"  style="padding-right: 4px">
<img src="documentation/pictures/weather.jpg" height="28" width=150 alt="weather api" style="padding-right: 4px">
<img src="https://img.shields.io/badge/Spotify-1ED760?&style=for-the-badge&logo=spotify&logoColor=white" alt="spotify api" style="padding-right: 4px">
<img src="https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white" alt="chart.js" style="padding-right: 4px">
</div>

## Others
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)

# PROJECT OVERVIEW #

## Landing Page 
### Landing page to login with spotify account ###
![Landing Page](documentation/pictures/home.jpg)

## Monthly Summary & Navigation Calendar
### Monthly overview to quickly glance at selected mood or look for the date with journal entry and checklist entry to revisit any day of the month. ###
![Monthly Summary & Navigation Calendar](documentation/pictures/calendar.jpg)

## Mood Selection Page
### choose up to 3 mood for the selected date. Weather of current day will be visiable to see the relation between weather outside and your mood. Spotify will suggest music to play based on the seleced mood of the day to listen to it while journaling ###
![Mood Selection Page](documentation/pictures/mood-selection.jpg)

## Journal Page ##
### A place to enter your thoughts and feeling and modify the text input as you desire. No idea what to write? Click on the prompt to get topic ideas. User can also keep track of habits and how they taking care of themselves. ###
![Journal Page](documentation/pictures/journal.jpg)

## Customize Checklist ##
### A place to customize habit tracking checklist to match user's focus. Easy add and delete buttons are there to reactive the old items if your habit changed. ###
![Customize Checklist](documentation/pictures/customize-checklist.jpg)

## Moodify Graph ##
### A summary of mood selections for selected range of date. ###
![Moodify Graph](documentation/pictures/moodscape.jpg)

## Night Mode ##
### For the users who are writing journal at night, we implemented night mode as well. ###
![Alt text](documentation/pictures/night-mode.jpg)

## Night Mode ##
### I couldn't have asked for a better team for this project. Everyone was equally passionate, skillful and well organized, and that was the reason we were able to complete this project in the short amount of 2 weeks. ###
![Dream Team](documentation/pictures/team.jpg)

## Summary of Mojo's features ##
![Summary of Mojo's features](documentation/pictures/about.jpg)

# PROJECT SETUP #

## INITIAL SETUP
```
cd MoJo/back-end
npm install

cd MoJo/front-end
npm install
```

## DB SETUP
```
psql
CREATE DATABASE mojo;
```

## DB SEEDING
```
cd MoJo/back-end
npm run db:reset
```

## START BACK-END SERVER ##
```
cd MoJo/back-end
npm run local
```

## START FRONT-END SERVER ##
```
cd MoJo/front-end
npm start
```

### Go to http://localhost:3000/ to view the application