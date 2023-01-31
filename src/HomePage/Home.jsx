import Component from "../Header/component";
import Left from "../LeftComponent/Left";
import MiddleComponent from "../middlePart/MiddleComponent";
import "./Home.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import RefreshIcon from "@mui/icons-material/Refresh";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { useState, useContext, useEffect } from "react";
import { SongContext } from "../context/context";
import PauseIcon from "@mui/icons-material/Pause";
import axios from "axios";

const defaultSong =
  "https://jiotunepreview.jio.com/content/Converted/010911261028240.mp3";
const defaultSongs = [
  { name: "New Releases", songs: ["S1", "S2", "S3", "S4", "S5"] },
];

function Home() {
  const newSong = new Audio(defaultSong);
  const songContext = useContext(SongContext);
  const { song } = songContext;
  const [songs, setSongs] = useState(defaultSongs);
  const [songdata, setSongdata] = useState({});
  useEffect(() => {
    axios
      .get(`https://saavn.me/modules?language=hindi,english`)
      .then((res) => setSongdata(res.data.data));
  }, []);
  useEffect(() => {
    if (songContext.song.isplaying) {
      newSong.play();
    } else {
      newSong.pause();
    }
  }, [songContext.song.isplaying, newSong]);

  const { albums, charts, playlists, trending } = songdata;
  return (
    <div>
      <Component /><br /><br /><br />
      <div className="first-div">
        <Left setSongs={setSongs} />
        <div
          className="second-div right"
          style={{
            position: "relative",
            left: "200px",
            marginBottom: "80px",
            overflowX: "hidden",
            padding: "30px 10px 10px 20px",
          }}
        >
          {/* <div className="third-div">
            <h2></h2>
            <div
              className="fourth-div example"
              style={{ overflowX: "scroll", display: "flex", gap: "1rem" }}
            >
              {songdata?.trending?.songs?.map((song) => {
                return (
                  <>
                    <MiddleComponent song={song} />
                  </>
                );
              })}
            </div>
          </div> */}

          <div className="albums">
            <h2>Albums</h2>
            <div className="albums-cards">
              {albums?.map((album) => {
                const artists = album?.artists?.map((artist) => artist.name);
                const title = album?.name;
                const subtitle = artists?.join(",");
                const image = album?.image[2]?.link;
                const data = { img: image, name: title, singer: subtitle };
                return <MiddleComponent song={data} />;
              })}
            </div>
          </div>

          <div className='albums'>
            <h2>Charts</h2>
            <div className="albums-cards">
              {charts?.map(chart => {
                return <div className='album-card'>
                  <img src={chart?.image[2]?.link} alt={chart?.name} />
                  <h3>{chart?.title}</h3>
                  <p>{chart?.language}</p>
                </div>
              })}
            </div>
          </div>

          <div className='albums'>
            <h2>playlists</h2>
            <div className="albums-cards">
              {playlists?.map(playlist => {               
                return <div className='album-card'>
                  <img src={playlist?.image[2]?.link} alt={playlist?.name} />
                  <h3>{playlist?.title}</h3>
                  <p>{playlist?.subtitle}</p>
                </div>
              })}
            </div>
          </div>

          <div className='albums'>
            <h2>Trending</h2>
            <h3>Songs</h3>
            <div className="albums-cards">
              {trending?.songs?.map(song => {               
                return <div className='album-card'>
                  <img src={song?.image[2]?.link} alt={song?.name} />
                  <h3>{song?.name}</h3>
                  <p>{song?.language}</p>
                </div>
              })}
          </div>
            <h3>Albums</h3>
            <div className="albums-cards">
              {trending?.albums?.map(song => {               
                console.log(song);
                return <div className='album-card'>
                  <img src={song?.image[2]?.link} alt={song?.name} />
                  <h3>{song?.name}</h3>
                  <p>{song?.language}</p>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="queue"
        style={{
          backgroundColor: "#eee",
          position: "fixed",
          top: "200px",
          transform: "translateX(150px)",
          scrollbarWidth: "none",
          right: "0",
          minWidth: "300px",
          minHeight: "500px",
          boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)",
        }}
      >
        <h2>Queue</h2>
        {songContext?.song?.queue?.map((song) => {
          return (
            <div style={{ marginInline: "0.5rem" }}>
              <h3>{song.name}</h3>
              <img
                src={song.image}
                alt={song.name}
                style={{ width: "100px" }}
              />
            </div>
          );
        })}
      </div>
      <div className="play">
        <div className="song-img">
          <img src={song.img} alt={song.name} width="90" height="90" />
          <span>
            {song.name}
            <br />
            {song.singer}
          </span>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <RefreshIcon
            style={{ height: "40", width: "40" }}
            onClick={() => newSong.play()}
          />
          <SkipPreviousIcon style={{ height: "40", width: "40" }} />
          {!song.isplaying ? (
            <PlayArrowIcon
              style={{ height: "40", width: "40" }}
              onClick={() =>
                songContext.setSong((song) => ({ ...song, isplaying: true }))
              }
            />
          ) : (
            <PauseIcon
              style={{ height: "40", width: "40" }}
              onClick={() => {
                newSong.pause();
                songContext.setSong((song) => ({ ...song, isplaying: false }));
              }}
            />
          )}
          <SkipNextIcon style={{ height: "40", width: "40" }} />
          <ShuffleIcon style={{ height: "40", width: "40" }} />
        </div>
        <div>
          <MoreHorizIcon style={{ height: "40", width: "40" }} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <VolumeUpIcon style={{ height: "40", width: "40" }} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <OpenInFullIcon style={{ height: "40", width: "40" }} />
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
}

export default Home;

{
  /* <div className='third-div'>
          <h2>
          </h2>
          <div className="fourth-div example"  style={{ overflowX: 'scroll', display: "flex", gap: '1rem' }}>
          {
            songdata?.trending?.songs?.map(song => {
                return <><MiddleComponent song={song} /></>
              })
            }
          </div>
          </div> */
}
