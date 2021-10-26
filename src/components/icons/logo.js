import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const IconLogo = () => (
  <StaticImage
    className="img"
    src="../../images/logo.png"
    width={1000}
    quality={100}
    formats={['AUTO', 'WEBP', 'AVIF']}
    alt="Headshot"
  />
);

export default IconLogo;
