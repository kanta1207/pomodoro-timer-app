import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://api.spotify.com/v1';

/**
 * Base axios instance for API calls
 *
 * @param {string} token
 * @return {*}  {AxiosInstance}
 */
export const axiosBase = (token: string = ''): AxiosInstance => {
  const bearerConfig = token ? `Bearer ${token}` : '';

  return axios.create({
    baseURL,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: bearerConfig,
    },
  });
};
