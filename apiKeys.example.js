const keys = {
  appleMusic: {
    developerToken: 'Apple MusicKitJS API Key Goes Here',
    name: 'Vusic',
    build: 'ver1',
    version: 'ver1',
  },
  geniusAccessToken: 'Genius Access Token Goes Here',
  youtubeApiKey: 'Youtube Api Key Goes Here',
};

function getAppleMusicConfig() {
  return new Headers({
    Authorization: 'Bearer ' + MusicKit.getInstance().developerToken,
    Accept: 'application/json',
    ['Music-User-Token']: '' + MusicKit.getInstance().musicUserToken,
    ['Content-Type']: 'application/json',
  });
}

export { getAppleMusicConfig };
export default keys;
