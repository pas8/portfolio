import { FC } from 'react';
import { useUploadThemeSsr } from 'hooks/useUploadThemeSsr.hook';
import dynamic from 'next/dynamic';
import { ComposeLayouts } from 'layouts';

const StoreLayout = dynamic(() => import('../src/layouts/StoreLayout'));
const ThemeLayout = dynamic(() => import('../src/layouts/ThemeLayout'));
const SoundLayout = dynamic(() => import('../src/layouts/SoundLayout'), { ssr: false });
const SceneLayout = dynamic(() => import('../src/layouts/SceneLayout'));
const TipsLayout = dynamic(() => import('../src/layouts/TipsLayout'), { ssr: false });

const SnackBarLayout = dynamic(() => import('../src/layouts/SnackBarLayout'));
const NavLayout = dynamic(() => import('../src/layouts/NavLayout'));
const CursorLayout = dynamic(() => import('../src/layouts/CursorLayout'), { ssr: false });
const LoadingLayout = dynamic(() => import('../src/layouts/LoadingLayout'));
const ScrollLayout = dynamic(() => import('../src/layouts/ScrollLayout'), { ssr: false });

const Index: FC<any> = ({ Component, pageProps }) => {
  useUploadThemeSsr();

  const layouts = [
    StoreLayout,
    ThemeLayout,
    SceneLayout,
    CursorLayout,
    LoadingLayout,
    SoundLayout,
    ScrollLayout,
    SnackBarLayout,
    TipsLayout,
    NavLayout
  ];

  return (
    <ComposeLayouts layouts={layouts} pageProps={pageProps}>
      <Component {...pageProps} />
    </ComposeLayouts>
  );
};
export default Index;
