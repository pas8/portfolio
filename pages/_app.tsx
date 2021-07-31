import { FC } from 'react';
import ThemeLayout from 'layouts/ThemeLayout';
import StoreLayout from 'layouts/StoreLayout';
import { useUploadThemeSsr } from 'hooks/useUploadThemeSsr.hook';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import CursorLayout from 'layouts/CursorLayout';
import { ComposeLayouts } from 'layouts';

const Index: FC<AppProps> = ({ Component, pageProps }) => {
  useUploadThemeSsr();

  const layouts = [StoreLayout, ThemeLayout, CursorLayout];

  return (
    <ComposeLayouts layouts={layouts} pageProps={pageProps}>
      <Component {...pageProps} />
    </ComposeLayouts>
  );
};
export default Index;
