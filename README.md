# 
# PROJECT TITLE - Mojo (Mood Journal)

## PROJECT DESCRIPTION

An app to check in with your mood and daily actions through keeping a daily journal, and taking note of your mood. To set the perfect tone while you journal, Mojo will recommend some music to listen to that compliments your current mood. In order to see your progress, Mojo can show you a variety of easy-to-read graphs of how your mood/activities have changed over time, as well as a calendar feature for you to check back on particular days. The app has gentle aesthetic features, blurred gradients, and soft lines to create a harmonious experience for the user.

## TARGET AUDIENCE
Our application is geared towards anyone looking to build self-awareness around their daily routines, without the preconception that your well-being is something which you can fail at.

## TEAM MEMBERS
**Khin Mo Mo Zin, Katherine Nishimura, Charlie Chandler**

# TECH STACK #

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-5A29E4?logo=axios&amp;logoColor=white&amp;style=for-the-badge)
![React Full Calendar](documentation/pictures/md-calendar.svg)

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="108" height="28" role="img" aria-label="DRAFT.JS"><title>DRAFT.JS</title><g shape-rendering="crispEdges"><rect width="108" height="28" fill="#b3725b"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="documentation/pictures/draftjs.svg"/><text transform="scale(.1)" x="640" y="175" textLength="640" fill="#fff" font-weight="bold">DRAFT.JS</text></g></svg>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="150" height="28" role="img" aria-label="WEATHER-API"><title>DRAFT.JS</title><g shape-rendering="crispEdges"><rect width="150" height="28" fill="#356851"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="20" height="14" xlink:href="documentation/pictures/weather.png"/><text transform="scale(.1)" x="840" y="175" textLength="940" fill="#fff" font-weight="bold">WEATHER API</text></g></svg>
![Spotify](https://img.shields.io/badge/Spotify-1ED760?&style=for-the-badge&logo=spotify&logoColor=white)
![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)


![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)



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