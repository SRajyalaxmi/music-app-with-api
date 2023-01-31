import { createContext, useState } from "react";

export const SongContext = createContext();
const SongContextProvider = ({children}) => {
    const [song, setSong] = useState({name: '',singer:'', image: '',isplaying: false, queue: []});
    const addToQueue = (newSong) => {
        setSong((song) => ({...song, queue: [...song.queue, {name: newSong.name, singer: newSong.singer, image: newSong.image}]}));
    };
    const value = {
        song,
        setSong,
        addToQueue
    };
    return <SongContext.Provider value={value}>{children}</SongContext.Provider>
};

export default SongContextProvider;