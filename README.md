# Concert Planner

This app was developed in October 2019 as the final project for the web development course of neuefische GmbH. 

Users get Information about different concerts they could visit in the future. They can filter the concerts by different genres or sort the concerts by different categories. As a special feature the users can get a song preview of every artist to discover new music. The users can bookmarks the concerts which they are interested in and can collect this concerts in their own special concert calendar.
Concert organizors can put new concerts to the concertlist or edit and delete consisting concerts.


_________
#### If you want to login, please use test user data:
username: **testuser**

password: **word1234**
______

## Preview

<img src="https://res.cloudinary.com/dhix1uwjg/image/upload/v1572264201/Screen_Shot_2019-10-28_at_13.02.21_n51cfn.png" width="200">
<img src="https://res.cloudinary.com/dhix1uwjg/image/upload/v1572264202/Screen_Shot_2019-10-28_at_13.02.34_kx6iib.png" width="200">
<img src="https://res.cloudinary.com/dhix1uwjg/image/upload/v1572264202/Screen_Shot_2019-10-28_at_13.02.30_utipxv.png" width="200">

## Tech Stack

* React.js 
* Node.js
* MongoDB running on ```localhost:27017```
* Express
____
* axios
* mongoose
* nodemon 
* react-router-dom
* request
* SpotifyAPI
* styled-components

## Run on localhost

#### Requirement

* Node.js
* Spotify Developer Account 
* MongoDB
* Cloudinary

#### Setup

```
https://github.com/marwehl/concert-app
cd concert-planner
npm install
```

#### Cloudinary

* Create an account on https://cloudinary.com/
* Go to https://cloudinary.com/console/settings/upload#upload_presets
* Click ```Enable unsigned uploading```
* Copy the preset name (the 8 character hash below name)
*Create a ```.env.local``` file in the root directory of this project and add your cloudname and preset:

```
REACT_APP_CLOUDINARY_CLOUDNAME='your_cloudname'
REACT_APP_CLOUDINARY_PRESET='your_preset'
```

#### Spotify

* Create an Application at https://developer.spotify.com/ to get a Client-ID and Client-Secret
* Open server/config.js and paste in your Spotify Client-ID and Secret and save it

#### Run the App in the development mode

To run the App you can use

```
npm start
````

Open http://localhost:3000 to view it in the browser (if it not opens automatically). Switch your browser to responsive mode as this app was designed for mobile devices in mind.

