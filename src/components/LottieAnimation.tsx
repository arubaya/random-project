import React from 'react';
import Lottie from 'react-lottie';

interface LottieAnimationProps {
  /**
   * Height size in pixels
   * @default '100%'
   */
  height?: number | string | undefined;
  /**
   * Width size in pixels
   * @default '100%'
   */
  width?: number | string | undefined;
  animationData: any;
}

export default function LottieAnimation(props: LottieAnimationProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} />;
}
