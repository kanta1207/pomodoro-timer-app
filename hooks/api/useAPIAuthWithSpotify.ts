import { useAuthRequest } from 'expo-auth-session';
import { useCallback } from 'react';
import { useNavigationWithType } from '../useNavigationWithType';
import SPOTIFY_CLIENT_ID from '../../utils/env';
import axios, { AxiosResponse } from 'axios';

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

type TokenData = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
};

const redirectUri = 'exp://localhost:19002/--/spotify-auth-callback';

export const useAuthWithSpotify = () => {
  // https://docs.expo.dev/guides/authentication/#spotify
  const navigation = useNavigationWithType();
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: SPOTIFY_CLIENT_ID,
      scopes: [
        'user-read-email',
        'user-library-read',
        'user-read-recently-played',
        'user-top-read',
        'playlist-read-private',
        'playlist-read-collaborative',
        'playlist-modify-public',
      ],
      usePKCE: false,
      redirectUri,
    },
    discovery
  );

  const authWithSpotify = useCallback(async () => {
    try {
      await promptAsync();
      console.log(response);
      if (response?.type === 'success' && response.params) {
        exchangeCodeForToken(response.params.code);
        navigation.navigate('Main');
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  }, [promptAsync, response]);

  const exchangeCodeForToken = async (code: string) => {
    const tokenRequest = {
      code,
      redirect_uri: redirectUri,
      grant_type: code,
      client_id: SPOTIFY_CLIENT_ID,
    };

    const tokenResponse: AxiosResponse<TokenData> = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams(tokenRequest).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const tokenData = await tokenResponse.data;
    return tokenData;
  };

  return { request, response, authWithSpotify, exchangeCodeForToken };
};
