import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface HomeCardItemProps {
  image: string;
  to: string;
  title: string;
}

export default function HomeCardItem({ image, title, to }: HomeCardItemProps) {
  return (
    <NavLink to={to} className="no-underline text-inherit">
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography variant="h5" className="font-semibold">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </NavLink>
  );
}
