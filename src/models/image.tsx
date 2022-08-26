// this is a blue print to the tyoes of data that is was used
export interface Image {
  id: string;
  created_at: string;
  downloads: string;
  exif: {
    make: string;
  };
  urls: {
    small: string;
    regular: string;
  };
}
