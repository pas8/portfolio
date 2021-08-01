import { FC } from 'react';
import { useUploadThemeSsr } from 'hooks/useUploadThemeSsr.hook';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import dynamic from 'next/dynamic';
import { ComposeLayouts } from 'layouts';

const StoreLayout = dynamic(() => import('../src/layouts/StoreLayout'));
const ColorLayout = dynamic(() => import('../src/layouts/ColorLayout'));
const ThemeLayout = dynamic(() => import('../src/layouts/ThemeLayout'));
const CursorLayout = dynamic(() => import('../src/layouts/CursorLayout'), { ssr: false });

const Index: FC<AppProps> = ({ Component, pageProps }) => {
  useUploadThemeSsr();

  const layouts = [StoreLayout, ThemeLayout, CursorLayout,ColorLayout];

  return (
    <ComposeLayouts layouts={layouts} pageProps={pageProps}>
      <Component {...pageProps} />
    </ComposeLayouts>
  );
};
export default Index;
