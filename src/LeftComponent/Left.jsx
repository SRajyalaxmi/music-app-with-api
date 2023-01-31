import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HistoryIcon from '@mui/icons-material/History';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AlbumIcon from '@mui/icons-material/Album';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';

export default function Left({songs, setSongs}) {
  return (
    <div style={{position: 'relative'}}>
      <List
      style={{height: 'calc(560px)'}}
    sx={{
      width: '100%',
      maxWidth: 200,
      bgcolor: 'background.paper',
      position: 'fixed',
      overflow: 'scroll',
      maxHeight: 500,
      marginBottom: 60,
      '& ul': { padding: "30px 1px 1px 1px" },
    }}
    subheader={<li />}>
    {["BROWSE"].map((sectionId) => (
      <li key={`section-${sectionId}`}>
        <ul>
          <ListSubheader>{` ${sectionId}`}</ListSubheader>
          {[ "New Releases","Top Playlists","Podcats","Top Artists","Radio"].map((item) => (
            <ListItem key={`${sectionId}-${item}`}>
              <ListItemText primary={`${item}`} onClick={() => {
                setSongs(songs => {
                  return songs.filter(song => song.name === item);
                })
              }} />
            </ListItem>
          ))}
        </ul>
      </li>
    ))}

    {["LIBRARY"].map((sectionId) => (
      <li key={`section-${sectionId}`}>
        <ul>
          <ListSubheader>{` ${sectionId}`}</ListSubheader>
          {[{img: <HistoryIcon/>, name: "History"},{img: <MusicNoteIcon/>, name: "Songs"},
          {img: <AlbumIcon/>, name: "Albums"},{img: <PodcastsIcon/>, name: "Podcasts"},
          {img: <MicExternalOnIcon/>, name: "Artists"}].map((item) => (
            <ListItem key={`${sectionId}-${item}`}>
              {item.img}
              <ListItemText primary={`${item.name}`} />
            </ListItem>
          ))}
        </ul>
      </li>
    ))}
    <button style={{padding:"0px 30px",borderRadius:"20px", marginBottom: '60px'}}><h4>+ New Playlist</h4></button>
  </List></div>
  );
}