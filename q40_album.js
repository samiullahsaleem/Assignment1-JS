function make_album(artist, album, tracks = null) {
  let albumObj = new Object({artist: artist, album: album});
  if(tracks != null) {
    albumObj.tracks = tracks;
  }

  return albumObj;
}
console.log(make_album('Atif Aslam', 'Laila Majnu'));
console.log(make_album('Shuja Haider', 'Ru-Ba-Ru'));
console.log(make_album('Ed Sheeran', 'Divide', 20));
