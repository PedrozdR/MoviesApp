import api from '../api';
import { AxiosRequestConfig } from 'axios';
import { IMovie, IResponse } from '../models';

export default {
  async subscribe(page: number) {
    const config: AxiosRequestConfig = {
      params: {
        api_key: '40d98ef34b20518e6f023cdf6e2556d5',
        sort_by: 'popularity.desc',
        language: 'pt-br',
        include_adult: false,
        include_video: true,
        page,
      }
    };
    try {
      const data = api.get<IResponse<IMovie[]>>('/discover/movie', config);
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async getBy(movie_id: number) {
    const config: AxiosRequestConfig = {
      params: {
        api_key: "40d98ef34b20518e6f023cdf6e2556d5",
        language: "pt-br",
        movie_id,
      }
    };
    try {
      const data = api.get(`/movie/${movie_id}`, config);
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
