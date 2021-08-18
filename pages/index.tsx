import { FC } from 'react';
import Main from 'components/Main';
import { BlogDataType } from 'models/types';

const Index: FC<{ blogArr: any }> = ({ blogArr }) => {
  return (
    <>
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
