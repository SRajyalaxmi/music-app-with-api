import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "./style.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { SongContext } from "../context/context";
import { useContext } from "react";

export default function MiddleComponent({ song }) {
  const songContext = useContext(SongContext);
  const { setSong } = songContext;
  return (
    <>
      <div className="card">
        <div className="card__image">
          <img src={song.img} alt={song.name} />
          <div className="card__image-play-button">
            <PlayCircleOutlineIcon
              onClick={() => {
                const newSong = {name: song.name, singer: song.singer, image: song.image}
                setSong((previousData) => {
                  return {
                    name: song.name,
                    singer: song.singer,
                    isplaying: true,
                    img: song.image,
                    queue: [...previousData.queue, newSong]
                  }
                })
              }
              }
            />
          </div>
          <MoreHorizIcon className="card__image-horizon-button" />
          <FormControlLabel
            className="card__image-favourite-button"
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                name="checkedH"
              />
            }
          />
        </div>
        <div>
        <div className="song-title">{song.name}</div>
        {/* <div className="sont-singer">prabhat</div> */}
      </div>
      </div>  
    </>
  );
}
