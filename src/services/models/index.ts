export interface IResponse<T = undefined> {
  data: T,
  page: number,
  results: IMovie[],
  total_pages: number,
  total_results: number
}
export interface IMovie {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export interface IDetails {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: string | null,
  budget: number,
  genres: IGenre[],
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: ICompany[],
  production_countries: ICountry[],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: ILanguage[],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export interface IGenre {
  id: number,
  name: string
}

export interface ICompany {
  id: number,
  logo_path: string | null, name: string,
  origin_country: string
}

export interface ICountry {
  iso_3166_1: string,
  name: string
}

export interface ILanguage {
  iso_639_1: string,
  name: string
}