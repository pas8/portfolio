import { FC } from 'react';
import Main from 'components/Main';
import { BlogDataType } from 'models/types';
import { Head } from 'next/document';
const Index: FC<{ blogArr: any }> = ({ blogArr }) => {
  return (
    <>
      <Head>
        <title>Pas portfolio</title>
        <meta
          name="description"
          content="  I am Anatolii Ponocheniuk, self-educated by realizing studying projects and also acquire new info by reading the official documentation. And about my soft skills, I improved them in MBA school and Gdansk business week of course all communication was English. Exactly want to evolve as a react-ts developer and of course be fond of coding and right react with typescript. So, I have default hobbies. Certainly motivated enough to work in a new company."
        />
        <meta property="og:title" content="Anatolii Ponocheniuk Portfolio" />
        <meta
          property="og:description"
          content="  I am Anatolii Ponocheniuk, self-educated by realizing studying projects and also acquire new info by reading the official documentation. And about my soft skills, I improved them in MBA school and Gdansk business week of course all communication was English. Exactly want to evolve as a react-ts developer and of course be fond of coding and right react with typescript. So, I have default hobbies. Certainly motivated enough to work in a new company."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Main blogArr={blogArr} />
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://dev.to/api/articles?username=pas8');
  const data: BlogDataType = await res.json();

  const blogArr = data.map(({ cover_image, canonical_url, tag_list, title, published_at, id }) => ({
    cover_image,
    canonical_url,
    tag_list,
    title,
    published_at,
    id
  }));

  return {
    props: { blogArr }
  };
};
export default Index;
