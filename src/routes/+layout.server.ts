import { ANALYTICS_ID } from '$env/static/private';
import type { MetaProps } from 'runes-meta-tags';
import { splitAndCapitalize, removeHyphensAndCapitalize } from './utils/helpers';
export const load = ({ url }) => {
  const title = splitAndCapitalize(url.pathname) ? `${splitAndCapitalize(url.pathname)} - ${removeHyphensAndCapitalize(__NAME__)}` : `${removeHyphensAndCapitalize(__NAME__)}`;
  const description = splitAndCapitalize(url.pathname) ? `${splitAndCapitalize(url.pathname)} - Gjett Norsk for learning Norwegian with your friend. ` : 'Gjett Norsk for learning Norwegian with your friend.';
  const image = splitAndCapitalize(url.pathname) ? `https://open-graph-vercel.vercel.app/api/svelte-5-ui-lib?title=${splitAndCapitalize(url.pathname)}` : 'https://open-graph-vercel.vercel.app/api/gjett-norsk';
  // console.log('url: ', splitAndCapitalize(url.pathname));
  const layoutMetaTags: MetaProps = {
    title,
    description,
    keywords: 'Norwegian, flashcards, learning, language',
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title,
      description,
      image,
      imageAlt: title,
    },
    og: {
      type: 'website',
      title,
      description,
      url: url.href,
      image,
      imageAlt: title,
      siteName: 'Gjett Norsk',
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
		layoutMetaTags,
		ANALYTICS_ID
  };
};
