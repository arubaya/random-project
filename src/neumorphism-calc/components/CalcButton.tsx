import { Box } from '@mui/material';
import React from 'react';

interface CalcButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  textDisplay: string;
}

export default function CalcButton({ onClick, textDisplay }: CalcButtonProps) {
  const [style, setStyle] = React.useState({
    color: '#666',
    backgroundColor: 'transparent',
    gridColumn: 'auto',
    gridRow: 'auto',
  });

  React.useEffect(() => {
    if (textDisplay === 'clear') {
      setStyle({
        color: '#fff',
        backgroundColor: '#f44336',
        gridColumn: 'auto',
        gridRow: 'auto',
      });
    } else if (textDisplay === '+') {
      setStyle({
        color: '#fff',
        backgroundColor: '#31a935',
        gridColumn: 'auto',
        gridRow: 'span 2',
      });
    } else if (textDisplay === '=') {
      setStyle({
        color: '#fff',
        backgroundColor: '#2196f3',
        gridColumn: 'auto',
        gridRow: 'span 2',
      });
    }
  }, []);

  return (
    <Box
      component="button"
      className="border-2 border-[#edf1f4] border-solid rounded-lg outline-none p-[10px] m-[10px] cursor-pointer select-none min-w-[40px] flex justify-center items-center text-[1.2em]"
      sx={{
        gridColumn: style.gridColumn,
        gridRow: style.gridRow,
        color: style.color,
        backgroundColor: style.backgroundColor,
        boxShadow: '5px 5px 10px rgba(0,0,0,0.1), -5px -5px 10px #fff',
        '&:active': {
          ...(textDisplay === 'clear' ||
          textDisplay === '+' ||
          textDisplay === '='
            ? {
                boxShadow:
                  '5px 5px 10px rgba(0,0,0,0.1), -5px -5px 10px #fff,  inset 5px 5px 10px rgba(0,0,0,0.1)',
                color: '#fff',
              }
            : {
                boxShadow:
                  'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px #fff',
                color: '#f44336',
              }),
        },
      }}
      onClick={onClick}
    >
      {textDisplay}
    </Box>
  );
}
