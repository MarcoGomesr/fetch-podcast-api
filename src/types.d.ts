export interface Podcast {
  feed: Feed;
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

export interface Author {
  name: Icon;
  uri: Icon;
}

export interface Icon {
  label: string;
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

export interface Category {
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  'im:id': string;
  term: PurpleLabel;
  scheme: string;
  label: PurpleLabel;
}

export enum PurpleLabel {
  Music = 'Music',
  MusicCommentary = 'Music Commentary',
  MusicHistory = 'Music History',
  MusicInterviews = 'Music Interviews',
}

export interface ID {
  label: string;
  attributes: IDAttributes;
}

export interface IDAttributes {
  'im:id': string;
}

export interface IMArtist {
  label: string;
  attributes?: IMArtistAttributes;
}

export interface IMArtistAttributes {
  href: string;
}

export interface IMContentType {
  attributes: IMContentTypeAttributes;
}

export interface IMContentTypeAttributes {
  term: FluffyLabel;
  label: FluffyLabel;
}

export enum FluffyLabel {
  Podcast = 'Podcast',
}

export interface IMImage {
  label: string;
  attributes: IMImageAttributes;
}

export interface IMImageAttributes {
  height: string;
}

export interface IMPrice {
  label: IMPriceLabel;
  attributes: IMPriceAttributes;
}

export interface IMPriceAttributes {
  amount: string;
  currency: Currency;
}

export enum Currency {
  Usd = 'USD',
}

export enum IMPriceLabel {
  Get = 'Get',
}

export interface IMReleaseDate {
  label: Date;
  attributes: Icon;
}

export interface Link {
  attributes: LinkAttributes;
}

export interface LinkAttributes {
  rel: Rel;
  type?: Type;
  href: string;
}

export enum Rel {
  Alternate = 'alternate',
  Self = 'self',
}

export enum Type {
  TextHTML = 'text/html',
}

export interface PodcastProps {
  id: string;
  title: string;
  author: string;
  image: string;
}

export interface PodcastDetail {
  resultCount: number;
  results: Result[];
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

export enum ClosedCaptioning {
  None = 'none',
 }

export enum Name {
  MillionDollazWorthOfGame = 'Million Dollaz Worth Of Game',
 }

export enum ContentAdvisoryRating {
  Explicit = 'Explicit',
 }

export enum Country {
  Usa = 'USA',
 }

export enum EpisodeContentType {
  Audio = 'audio',
 }

export enum EpisodeFileExtension {
  Mp3 = 'mp3',
 }

export interface GenreClass {
  id: string;
  name: PrimaryGenreNameEnum;
 }

export enum PrimaryGenreNameEnum {
  MusicCommentary = 'Music Commentary',
 }

export enum Kind {
  Podcast = 'podcast',
  PodcastEpisode = 'podcast-episode',
 }

export enum WrapperType {
  PodcastEpisode = 'podcastEpisode',
  Track = 'track',
 }

export interface PodcastDetailPros {
  type: WrapperType,
  author: string,
  description: string,
  episodes: number,
  image: string,
  id: string,
  release: string,
  title: string,
  duration: number
  mediaType: string,
  episodeUrl: string
 }

export interface LoadingContextProps {
  loading: boolean;
  setLoadingState: (isLoading: boolean) => void;
}
