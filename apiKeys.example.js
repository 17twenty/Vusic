const keys = {
  appleMusic: {
    developerToken:
      'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IldlYlBsYXlLaWQifQ.eyJpc3MiOiJBTVBXZWJQbGF5IiwiaWF0IjoxNTc2NTYwMDgzLCJleHAiOjE1OTIxMTIwODN9.s5HiUk5k48DtvkixSEd0ceWAFFSNzqVaNiORZ5O8NIVQ33Kay8H_imSBrA-jYtdt8faoREaGQ18pUSyS_fRl6Q',
    name: 'Vusic',
    build: 'ver1',
    version: 'ver1',
  },
  geniusAccessToken: 'Vfz06usLcwxs-t8cvv7Hcx12WPUvk9M-imk-MA3QUe0TQZAsDDGOjccEzs1Zioht',
  youtubeApiKey: 'AIzaSyB3Ef7f5_vZvT9BiTqAYkor56x5g0FOKiQ',
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
