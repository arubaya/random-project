import React from 'react';
import { Box, TextField } from '@mui/material';
import PlayerContainer from './components/PlayerContainer';

export default function SpotifyPlayerPage() {
  const [url, setUrl] = React.useState('');

  return (
    <Box className="w-full h-full flex flex-col justify-center items-center p-6">
      <TextField
        className="max-w-[500px]"
        value={url}
        fullWidth
        onChange={({ target }) => setUrl(target.value)}
        label="Paste your playlist/track link"
        variant="outlined"
      />
      <Box className="mt-4 max-w-[500px] flex">
        {url !== '' ? <PlayerContainer url={url} /> : null}
      </Box>
    </Box>
  );
}
