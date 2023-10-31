import { createContext, useState } from 'react';

export const Player = createContext();

export const PlayerContext = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  return (
    <Player.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </Player.Provider>
  );
};
