import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { getAlayWord } from './services';

export default function KamusAlayPage() {
  const [baseText, setBaseText] = React.useState('');
  const [alayText, setAlayText] = React.useState('');

  const onChangeBaseText = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBaseText(target.value);
  };

  const onClickButton = ({
    target,
  }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAlayText(getAlayWord(baseText));
  };

  return (
    <Box className="w-full flex flex-col justify-center items-center">
      <Typography variant="h2" className="font-semibold mb-5">
        Kamus ALay
      </Typography>
      <Box className="flex flex-col md:flex-row">
        <TextField
          value={baseText}
          label="Masukkan Text"
          onChange={onChangeBaseText}
          size="small"
        />
        <Button
          variant="contained"
          className="my-4 md:my-0 md:mx-4"
          onClick={onClickButton}
        >
          Bikin Alay!
        </Button>
      </Box>
      <Box className="mt-5 min-w-[250px] p-4 rounded shadow-md">
        <Typography variant="h6" className="font-semibold">
          Hasil:
        </Typography>
        <Typography>{alayText}</Typography>
      </Box>
    </Box>
  );
}
