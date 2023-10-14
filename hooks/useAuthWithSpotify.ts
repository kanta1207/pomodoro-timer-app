import { useAuthRequest } from 'expo-auth-session';
import { useCallback } from 'react';
import { useNavigationWithType } from './useNavigationWithType';
import SPOTIFY_CLIENT_ID from '../utils/env';

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

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
        'playlist-modify-public', // or "playlist-modify-private"
      ],
      usePKCE: false,
      redirectUri: 'exp://localhost:19002/--/spotify-auth-callback',
    },
    discovery
  );

  const authWithSpotify = useCallback(async () => {
    try {
      await promptAsync();
      // If the authentication is successful, navigate to the 'Main' screen.
      if (response?.type === 'success') {
        navigation.navigate('Main');
      }
    } catch (error) {
      // Handle any potential errors, such as the user canceling the authentication.
      console.error('Authentication error:', error);
    }
  }, [promptAsync, response]);

  return { request, response, authWithSpotify };
};
