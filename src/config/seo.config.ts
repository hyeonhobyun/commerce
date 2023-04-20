import { NextSeoProps } from 'next-seo';

const SITE_URL = `https://commerce-git-${
  process.env.NODE_ENV === 'production' ? 'master' : 'release'
}-hyeonho.vercel.app`;

export const SEO_CONFIG: NextSeoProps = {
  title: '카페',
  titleTemplate: '%s | 아아 전문점',
  additionalMetaTags: [
    {
      name: 'robots',
      content: 'none',
    },
    {
      name: 'viewport',
      content:
        'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover',
    },
    {
      name: 'og:title',
      content: '아아 전문 카페',
    },
    {
      name: 'og:description',
      content: '설명설명설명설명설명설명',
    },
    {
      name: 'og:image',
      content: `${SITE_URL}/dummy/image/ice_americano.png`,
    },
    {
      name: 'og:url',
      content: SITE_URL,
    },
    {
      name: 'og:locale',
      content: 'ko_KR',
    },
  ],
};
