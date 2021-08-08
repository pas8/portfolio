import { FC } from 'react';
import { useUploadThemeSsr } from 'hooks/useUploadThemeSsr.hook';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import dynamic from 'next/dynamic';
import { ComposeLayouts } from 'layouts';

const StoreLayout = dynamic(() => import('../src/layouts/StoreLayout'));
const ColorLayout = dynamic(() => import('../src/layouts/ColorLayout'));
const ThemeLayout = dynamic(() => import('../src/layouts/ThemeLayout'));
const SceneLayout = dynamic(() => import('../src/layouts/SceneLayout'));
const SnackBarLayout = dynamic(() => import('../src/layouts/SnackBarLayout'));
const NavLayout = dynamic(() => import('../src/layouts/NavLayout'));
const CursorLayout = dynamic(() => import('../src/layouts/CursorLayout'), { ssr: false });
const LoadingLayout = dynamic(() => import('../src/layouts/LoadingLayout'));
const ScrollLayout = dynamic(() => import('../src/layouts/ScrollLayout'),{ ssr: false });

const Index: FC<AppProps> = ({ Component, pageProps }) => {
  useUploadThemeSsr();

  const layouts = [
    StoreLayout,
    ThemeLayout,
    SceneLayout,
    CursorLayout,
    LoadingLayout,
    ScrollLayout,
    ColorLayout,
    SnackBarLayout,
    NavLayout,
  ];

  return (
    <ComposeLayouts layouts={layouts} pageProps={pageProps}>
      <Component {...pageProps} />
    </ComposeLayouts>
  );
};
export default Index;
