const requestLib = require('request')
const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = require('./config.js')

const client_id = REACT_APP_CLIENT_ID;
const client_secret = REACT_APP_CLIENT_SECRET;

async function getSongPreview(artist_query) {
  const token = await getSpotifyToken();
  const artistID = await getArtistId(token, artist_query);
  const previewUrl = await getPreviewUrl(token, artistID);
  return previewUrl;
}

async function getSpotifyToken() {
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      grant_type: "client_credentials",
    },
   headers: {
      Authorization:
        'Basic ' +
        Buffer.from(client_id + ':' + client_secret).toString('base64')
    }
  }
  const spotifyToken = await new Promise((resolve, reject) => {
    requestLib.post(authOptions, function(err, req, body) {
      if (!err) {
        const data = JSON.parse(body)
        resolve(data.access_token);
      }
    });
  });
return spotifyToken;
 }


async function getArtistId (token, artist_query) {
  const authOptions = {
    url:
      `https://api.spotify.com/v1/search?query=${artist_query}&offset=0&limit=20&type=artist`,
    headers: {
      Authorization: "Bearer " + token
    }
  };
  const artistId = await new Promise((resolve, reject) => {
  requestLib.get(authOptions, function(err, req, body) {
    const data = JSON.parse(body)
    resolve(data.artists.items[0].id)
  });
  });
  return artistId
}


async function getPreviewUrl(token, artistID) {
  const authOptions = {
    url:
      `https://api.spotify.com/v1/artists/${artistID}/top-tracks?country=SE`,
    headers: {
      Authorization: "Bearer " + token
    }
  };
  const previewUrl = await new Promise((resolve, reject) => {
    requestLib.get(authOptions, function(err, req, body) {
      const data = JSON.parse(body);
      resolve(data.tracks[0].preview_url);
    });
  });
  return previewUrl
}

module.exports = {getSongPreview};