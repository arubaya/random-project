import React from 'react';
import { Box } from '@mui/material';
import CalcButton from './components/CalcButton';

export default function NeumorphismCalcPage() {
  const CALC_BUTTON_LIST = [
    'clear',
    '/',
    '*',
    'Del',
    '7',
    '8',
    '9',
    '-',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '0',
    '00',
    '.',
    '=',
  ];

  const [display, setDisplay] = React.useState('');

  const handleClickButton = (value: string) => {
    if (value === 'clear') {
      setDisplay('');
    } else if (value === '=') {
      handleCalculate();
    } else if (value === 'Del') {
      handleDelete();
    } else {
      setDisplay(display + value);
    }
  };

  const handleCalculate = () => {
    setDisplay(`${eval(display)}`);
  };

  const handleDelete = () => {
    setDisplay(display.slice(0, -1));
  };

  const handleKeyboardPres = (keyValue: string) => {
    const parse = parseInt(keyValue);
    if (isNaN(parse)) {
      if (
        keyValue === '+' ||
        keyValue === '-' ||
        keyValue === '*' ||
        keyValue === '/'
      ) {
        setDisplay(display + keyValue);
      } else if (keyValue === 'Backspace') {
        handleDelete();
      } else if (keyValue === 'Enter') {
        handleCalculate();
      }
    } else {
      setDisplay(display + keyValue);
    }
  };

  return (
    <Box
      tabIndex={0}
      className="min-w-screen min-h-screen flex justify-center items-center"
      sx={{ backgroundColor: '#edf1f4' }}
      onKeyDown={(e) => handleKeyboardPres(e.key)}
    >
      {/* Calculator container */}
      <Box
        className="flex flex-col w-[340px] p-5 rounded-3xl"
        sx={{
          boxShadow: '15px 15px 20px rgba(0,0,0,0.1), -15px -15px 20px #fffb',
        }}
      >
        {/* Display Container */}
        <Box
          className="select-none w-full overflow-x-auto overflow-y-hidden whitespace-nowrap text-end h-[100px] leading-[100px] rounded-xl mb-3 px-5 text-[2em] font-medium"
          sx={{
            color: '#5166d6',
            boxShadow:
              'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px #fff',
          }}
        >
          {display}
        </Box>

        {/* Button Container */}
        <Box className="grid relative">
          <Box className="col-span-4" />
          {CALC_BUTTON_LIST.map((button) => (
            <CalcButton
              key={button}
              textDisplay={button}
              onClick={() => handleClickButton(button)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
