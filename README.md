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
<p>
<img src="https://res.cloudinary.com/dhix1uwjg/image/upload/v1572274487/localhost_3000_home_iPhone_6_7_8_hqymif.png" width="200">
<img src="https://res.cloudinary.com/dhix1uwjg/image/upload/v1572274454/localhost_3000_home_iPhone_6_7_8_3_liembp.png" width="200">
<img src="https://res.cloudinary.com/dhix1uwjg/image/upload/v1572274469/localhost_3000_home_iPhone_6_7_8_5_dnfikn.png" width="200">
</p>

## Tech Stack

* React.js 
* Node.js
* MongoDB running on ```localhost:27017```
* Express
____
* axios
* fullcalendar
* mongoose
* nodemon 
* react-router-dom
* request
* SpotifyAPI
* styled-components
* styled-icons

## Run on localhost

#### Requirements

* Node.js
* Spotify Developer Account 
* MongoDB
* Cloudinary

#### Setup

```
git clone git@github.com:marwehl/concert-app.git
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

