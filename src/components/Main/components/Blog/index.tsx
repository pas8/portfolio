import { makeStyles, Grid } from '@material-ui/core';
import { FC, useEffect } from 'react';
import SectionContainer from 'components/SectionContainer';
import SvgAnimation from 'components/SvgAnimation/index';
import { sectionIds } from 'models/denotation';
import { BlogDataType } from 'models/types';
import {colord} from 'colord'
const useStyles = makeStyles(({ palette: { background,primary }, breakpoints, shape: { borderRadius } }) => ({
  container: {

'& path':{

  strokeWidth:4
}
  },
  contentContainer: {
    marginTop:42,

    '& .item': {
      marginBottom:20,
      padding:'20px 4px',
    border:`2px solid ${colord(primary.main).alpha(0.42).toHex()}`,
    borderRadius,
      
      display:'flex',
      justifyContent:'center',  
      '& img':{
        borderRadius,
maxWidth:'96%'
      },
      width: '46%'
    }
  }
}));

const Blog: FC<{ blogArr: BlogDataType }> = ({ blogArr }) => {
  const { container, contentContainer } = useStyles();
  const id = sectionIds.BLOG;

  return (
    <Grid container className={container} alignItems={'center'} id={id}>
      <SectionContainer>
        <SvgAnimation
          id={id}
          viewBox={'0 0 1171.2 210.2'}
          pathsArr={[
            [
              'M1032 212a1938 1938 0 0162-88c2 1 64 85 64 87 1 1-9 1-63 1h-63zm-81-1h-8l64-101 65-101 40-1 31 1c-62 83-103 151-133 203h-21l-38-1zm-92-25l-22-24 51-50 50-50 22 22 22 23-50 51-51 51-22-23zm-55-61l-22-23 50-51 50-51 22 22 22 23-50 52-50 50zm-131-15c0-96 0-101 2-99l156 199-79 1h-79zm-176 0V8h72l76 1 4 1-32 28-76 71 106 100 3 3H497zm-277 0V8h59v40l1 39 27-39 27-39h70l-62 82-63 81v40h-59zM78 75L65 64V9h53v56l-13 11-13 11-14-12zm54 36V9h51v91l-1 101-1 11h-49zM66 212V78l13 10 12 11 10-8 14-11 3-2v134H66zM0 111V9h52v203H0z'
            ],
            [
              'M1032 205a1938 1938 0 0162-88c74 74 95 91 1 89l-63-1zm-81 0h-8l64-101 65-101c115-12 47 15-62 203h-21l-38-1zm-92-26l-22-23 51-50 50-50 22 22 22 23-50 51c-55 48-48 55-73 27zm-55-61l-22-22C879-4 887-5 926 39l-50 52-50 50zm-131-14c0-96 0-101 2-99l156 199c-181 2-160 19-158-100zm-176 0V2c99 4 173-16 120 30l-76 71 106 100 3 3H497zm-277 0V2c44-2 59 5 59 39l1 40 27-39 27-39h16l54-1-125 164v20c3 26-7 20-29 20h-30zM78 69L65 57V3h53v56l-13 11-13 11-14-12zm54 36V3h25c39 6 23 47 25 192l-1 11h-49zM66 205V72c1 0 7 4 13 10l12 11 10-8 14-11 3-3v68c-2 76 14 67-52 66zM0 105V3h52v203H0z'
            ],

            [
              'M1062 160c24-34 31-43 32-43 42 43 77 87 77 87-9 0-36 3-76 2-69 3-65 1-33-46zm-111 45c-21 7 95-160 121-202 35-4 61-5 58 3-15 40-45 69-120 200h-21l-38-1zm-114-49l51-50c50-58 50-52 94-5l-50 51c-40 37-62 67-95 4zm-33-38l-22-22c56-57 83-94 102-89 12 3 25 13 42 32l-50 52c-34 31-38 63-72 27zm-131-14c0-96 0-101 2-99 5 4 116 129 141 180 37 27-103 19-137 14-9-22-7-55-6-95zm-176 0V2c99 4 173-16 120 30-44 44-66 69-76 71l54 52c78 66 55 51-21 51-26 0-26 5-77 0zM220 2c72 5 58-14 59 39-2 52 4 36 28 1l27-39h16l54-1c-33 69-125 118-125 184 0 0 3 17-4 18-68 14-55-42-55-81-5-40-1-80 0-121zM78 69L65 57V30C63 2 65 3 91 3c39-6 27 27 27 56l-13 11-13 11-14-12zm54 36V3h25c39 6 23 47 25 192l-1 11h-24c-25 0-25 0-25-101zM66 205c3-62-17-169 25-112l10-8 14-11 3-3v68c-2 76 14 67-52 66zM0 3c65 0 52-16 52 102v101H0C4 141 3 72 0 3z'
            ],
            [
              'M1062 160c42-45 23-76 82 8 39 55 15 39-49 38-69 3-65 1-33-46zm-111 45c-21 7 105-157 121-202 35-4 61-5 58 3-48 69-104 214-141 200l-38-1zm-114-49l51-50c50-58 50-52 94-5-86 99-115 110-145 55zm-33-38c-43-39 31-69 80-111 12 3 25 13 42 32 0 1-37 22-50 52-34 31-38 63-72 27zm-131-14c0-96 0-101 2-99 5 4 116 129 141 180 37 27-103 19-137 14-9-22-7-55-6-95zM496 48c1-46 34-48 61-47 23 0 78 4 78 4s-46 66-94 98l54 52c18 17 43 14 54 52-66 6-119 3-152-1 1-48 14-56-1-158zM220 2c72 5 58-14 59 39-2 52 4 36 28 1l27-39h16l54-1c-33 69-125 118-125 184 12 5 7 18-4 18-70-1-55-42-55-81 2-39 14-78 0-121zM78 69L65 57V30C63 2 65 3 91 3c39-6 27 27 27 56l-13 11-13 11-14-12zm54 36V3h25c40 13 33 108 25 192l-1 11h-24c-25 0-25 0-25-101zM66 205c3-62-17-169 25-112l10-8 14-11 3-3c-1 87 24 155-52 134zM0 3c65 0 52-16 52 102v101c-55 8-9-11-52 0C4 141 3 72 0 3z'
            ]
          ]}
        />
        <Grid className={contentContainer} container justifyContent={'space-between'}>
          {blogArr.map(({ canonical_url, cover_image, id, published_at, tag_list, title }) => {
            return (
              <Grid className={'item'} >
                <img src={cover_image} alt={title}  />
              </Grid>
            );
          })}
        </Grid>
      </SectionContainer>
    </Grid>
  );
};

export default Blog;
