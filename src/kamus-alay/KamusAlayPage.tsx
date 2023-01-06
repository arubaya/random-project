import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { getAlayWord } from './services';

export default function KamusAlayPage() {
  const [baseText, setBaseText] = React.useState('');
  const [alayText, setAlayText] = React.useState('');
  const [isCopied, setIsCopied] = React.useState(false);

  const onChangeBaseText = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBaseText(target.value);
  };

  const onSubmitConvert = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAlayText(getAlayWord(baseText));
    setIsCopied(false);
  };

  const onClickReset = () => {
    setAlayText('');
    setBaseText('');
    setIsCopied(false);
  };

  const onClickCopyText = () => {
    if (alayText !== '') {
      navigator.clipboard.writeText(alayText);
      setIsCopied(true);
    }
  };

  return (
    <Box className="w-full min-w-[500px] min-h-[300px] flex flex-col justify-center items-center">
      <Typography variant="h2" className="font-semibold mb-5">
        Kamus AL4y
      </Typography>
      <Box
        component="form"
        onSubmit={onSubmitConvert}
        className="flex flex-col md:flex-row md:items-center"
      >
        <TextField
          value={baseText}
          label="Masukan teks disini"
          onChange={onChangeBaseText}
          size="small"
        />
        <Button
          type="submit"
          variant="contained"
          className="mt-4 md:mt-0 md:ml-4"
        >
          Terjemahkan!
        </Button>
        <Button
          variant="outlined"
          className="mt-2 md:mt-0 md:ml-2"
          onClick={onClickReset}
        >
          Reset
        </Button>
      </Box>
      <Box className="mt-5 min-w-[250px] p-4 rounded shadow-md">
        <Typography variant="h6" className="font-semibold">
          Hasil:
        </Typography>
        <Typography className="min-h-[30px]">{alayText}</Typography>
        {alayText !== '' && (
          <Button
            onClick={() => onClickCopyText()}
            size="small"
            color="success"
            variant="outlined"
          >
            {isCopied ? 'Disalin!' : 'Salin teks'}
          </Button>
        )}
      </Box>
    </Box>
  );
}
