export interface InitialStateTypes {
  randomPhoto: {
    id: string;
    urls: {
      regular: string;
      thumb: string;
    };
  };
  likedPhotos: Photo[];
  loading: boolean;
  error: string;
}

export interface Photo {
  id: string;
  urls: {
    regular: string;
    thumb: string;
  };
}
