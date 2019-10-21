const requestLib = require('request')
const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;

let spotifyToken = null
let artist_ID = null

async function getSongPreview() {
  const token = await getSpotifyToken();
  const artistID = await getArtistId(token);
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
      console.log("SPOTIFY", err, body);
      if (!err) {
        const data = JSON.parse(body)
        resolve(data.access_token);
      }
    });
  });
  console.log('spotifyToken', spotifyToken);
return spotifyToken;
 }


async function getArtistId (token) {
  const authOptions = {
    url:
      "https://api.spotify.com/v1/search?query=bring+me+the+horizon&offset=0&limit=20&type=artist",
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
  console.log("ID", artistId);
  return artistId
}


async function getPreviewUrl(token, artistID) {
  console.log('id', artist_ID)
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

module.exports = {getSongPreview };