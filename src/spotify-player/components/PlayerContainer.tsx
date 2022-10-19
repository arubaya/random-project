import React from 'react';

interface PlayerProps {
  code: string;
}

interface PlayerContainerProps {
  url: string;
}

function PlaylistPlayer({ code }: PlayerProps) {
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src={`https://open.spotify.com/embed/playlist/${code}?utm_source=generator`}
      width="100%"
      height="380"
      frameBorder="0"
      allowFullScreen={false}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

function TrackPlayer({ code }: PlayerProps) {
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src={`https://open.spotify.com/embed/track/${code}?utm_source=generator`}
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen={false}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

export default function PlayerContainer({ url }: PlayerContainerProps) {
  const getCodeRegex = /[\w]+(?=[?])/g;
  const code = url.match(getCodeRegex);

  if (url.indexOf('track') > -1) {
    return <TrackPlayer code={code !== null ? code[0] : ''} />;
  } else {
    return <PlaylistPlayer code={code !== null ? code[0] : ''} />;
  }
}
