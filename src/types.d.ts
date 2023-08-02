export interface Icon {
  label: string;
}
export interface Author {
  name: Icon;
  uri: Icon;
}

export interface CategoryAttributes {
  'im:id': string;
  term: PurpleLabel;
  scheme: string;
  label: PurpleLabel;
}
export interface Category {
  attributes: CategoryAttributes;
}
export interface IDAttributes {
  'im:id': string;
}

export interface ID {
  label: string;
  attributes: IDAttributes;
}

export interface IMArtistAttributes {
  href: string;
}
export interface IMArtist {
  label: string;
  attributes?: IMArtistAttributes;
}

export interface IMContentTypeAttributes {
  term: FluffyLabel;
  label: FluffyLabel;
}

export interface IMContentType {
  attributes: IMContentTypeAttributes;
}

export interface IMImageAttributes {
  height: string;
}

export interface IMImage {
  label: string;
  attributes: IMImageAttributes;
}

export interface IMPriceAttributes {
  amount: string;
  currency: Currency;
}

export interface IMPrice {
  label: IMPriceLabel;
  attributes: IMPriceAttributes;
}

export interface IMReleaseDate {
  label: Date;
  attributes: Icon;
}

export interface LinkAttributes {
  rel: Rel;
  type?: Type;
  href: string;
}

export interface Link {
  attributes: LinkAttributes;
}

export interface Entry {
  'im:name': Icon;
  'im:image': IMImage[];
  summary: Icon;
  'im:price': IMPrice;
  'im:contentType': IMContentType;
  rights?: Icon;
  title: Icon;
  link: Link;
  id: ID;
  'im:artist': IMArtist;
  category: Category;
  'im:releaseDate': IMReleaseDate;
}

export interface PodcastProps {
  id: string;
  title: string;
  author: string;
  image: string;
}

export interface GenreClass {
  id: string;
  name: PrimaryGenreNameEnum;
 }

export interface Feed {
  author: Author;
  entry: Entry[];
  updated: Icon;
  rights: Icon;
  title: Icon;
  icon: Icon;
  link: Link[];
  id: Icon;
}

export interface Podcast {
  feed: Feed;
}
export interface Result {
  artistId?: number;
  artistIds?: number[];
  artistName?: string;
  artistViewUrl: string;
  artworkUrl100?: string;
  artworkUrl160?: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl600: string;
  closedCaptioning?: ClosedCaptioning;
  collectionCensoredName?: Name;
  collectionExplicitness?: string;
  collectionHdPrice?: number;
  collectionId: number;
  collectionName: Name;
  collectionPrice?: number;
  collectionViewUrl: string;
  contentAdvisoryRating: ContentAdvisoryRating;
  country: Country;
  currency?: string;
  description?: string;
  episodeContentType?: EpisodeContentType;
  episodeFileExtension?: EpisodeFileExtension;
  episodeGuid?: string;
  episodeUrl?: string;
  feedUrl: string;
  genreIds?: string[];
  genres: Array<GenreClass | string>;
  kind: Kind;
  previewUrl?: string;
  primaryGenreName?: PrimaryGenreNameEnum;
  releaseDate: Date;
  shortDescription?: string;
  trackCensoredName?: Name;
  trackCount?: number;
  trackExplicitness?: string;
  trackId: number;
  trackName: string;
  trackPrice?: number;
  trackTimeMillis?: number;
  trackViewUrl: string;
  wrapperType: WrapperType;
}
export interface PodcastDetail {
  resultCount: number;
  results: Result[];
}

export interface PodcastDetailPros {

  type: string;
  author?: string;
  episodes?: number;
  image: string;
  release: Date;
  title: string;
  duration?: number;
  description?: string;
  id?: string;
  mediaType?: string;
  episodeUrl?: string;
 }

export interface LoadingContextProps {
  loading: boolean;
  setLoadingState: (isLoading: boolean) => void;
}
