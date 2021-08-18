import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { NextSeo } from 'next-seo';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>PAS portfolio</title>
          <meta name="theme-color" content={'#303030'} />
          <script type="text/javascript" src="https://www.goat1000.com/tagcanvas.js?1.18"></script>

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <body>
          <NextSeo
            title="PAS portfolio"
            description="I am Anatolii Ponocheniuk, self-educated by realizing studying projects and also acquire new info by reading the official documentation. And about my soft skills, I improved them in MBA school and Gdansk business week of course all communication was English. Exactly want to evolve as a react-ts developer and of course be fond of coding and right react with typescript. So, I have default hobbies. Certainly motivated enough to work in a new company."
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
  };
};
