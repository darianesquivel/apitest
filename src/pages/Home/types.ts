export interface Image {
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string;
  height: number;
  likes: number;
  id: string;
  links: {
    download: string;
    download_location: string;
    html: string;
    self: string;
  };
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  width: number;
}
export type TmediaCard = {
  image: string;
  description: string;
  color: string;
  likes: number;
  created_at: string;
};