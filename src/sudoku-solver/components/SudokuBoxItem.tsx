import React from 'react';
import { Box } from '@mui/material';

interface SudokuBoxItemProps {
  index: number;
  value: number;
  isColumnDivider?: boolean;
  isRowDivider?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function SudokuBoxItem({
  index,
  value,
  onChange,
  isColumnDivider,
  isRowDivider,
}: SudokuBoxItemProps) {
  return (
    <Box
      className={`w-9 h-9 ${isColumnDivider ? 'mr-2' : ''} ${
        isRowDivider ? 'mb-2' : ''
      }`}
      key={index}
    >
      <input
        onFocus={(e) => e.target.select()}
        value={value}
        className={`p-2 font-bold font-serif rounded w-full h-full text-center border-none outline-none ${
          value === 0 ? 'bg-neutral-300' : 'bg-sky-500'
        } ${value === 0 ? 'text-neutral-300' : 'text-white'}`}
        onChange={onChange}
      />
    </Box>
  );
}
