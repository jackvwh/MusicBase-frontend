class Artist {
  constructor(name, id, image, shortDescription) {
    this.name = name;
    this.artistId = id;
    this.artistImage = image;
    this.shortDescription = shortDescription;
  }
}

class Album {
  constructor(name, id, cover, yearPublished) {
    this.name = name;
    this.albumId = id;
    this.albumCover = cover;
    this.yearPublished = yearPublished;
    this.tracks = [];
    this.artist = [];
  }
}

class Track {
  constructor(name, id) {
    this.name = name;
    this.trackId = id;
  }
}

class MusicBase {
  constructor() {
    this.albumList = [];
    this.artistList = [];
    this.trackList = [];
  }
}

export { Artist, Album, Track, MusicBase };
