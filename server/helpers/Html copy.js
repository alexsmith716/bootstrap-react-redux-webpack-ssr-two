import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
import config from '../../config/config';

const testCss = /css.css/;

const Html = ({
  assets, store, content, bundles
}) => {
  const head = Helmet.renderStatic();

  // console.log('>>>>>> HTML.JS > assets: ', assets);
  // console.log('>>>>>> HTML.JS > store: ', store);
  // console.log('>>>>>> HTML.JS > content: ', content);
  // console.log('>>>>>> HTML.JS > bundles: ', bundles);

  return (

    <html lang="en-US">

      <head>
        {/* (>>>>>>> META <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Election App 2018!" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Election App 2018!" />
        <meta name="theme-color" content="#1E90FF" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        {/* (>>>>>>> STYLES - will be physically present only in production) */}
        {assets.styles &&
          Object.keys(assets.styles).map(style => (
            <link
              href={assets.styles[style]}
              key={style}
              media="screen, projection"
              rel="stylesheet"
              type="text/css"
              charSet="utf-8"
            />
          ))}

      </head>

      <body>

        {/* (>>>>>>> CONTENT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
        <div id="content" dangerouslySetInnerHTML={{ __html: content }} ></div>

        {/* (>>>>>>> STORE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
        {store && (
          <script
            dangerouslySetInnerHTML={{ __html: `window.__data=${serialize(store.getState())};` }}
            charSet="utf-8"
          ></script>
        )}

        {`<!-- xxxxxxxxxxxxx 1111111111111 xxxxxxxxxxxx -->`}

        {assets.javascript && <script src={assets.javascript.manifest} charSet="utf-8" />} // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< YES

        {`<!-- xxxxxxxxxxxxx 2222222222222 xxxxxxxxxxxx -->`}

        {assets.javascript && <script src={assets.javascript.vendor} charSet="utf-8" />}  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< YES

        {`<!-- xxxxxxxxxxxxx 3333333333333 xxxxxxxxxxxx -->`}

        { __DLLS__ && <script key="dlls__vendor" src="/assets/dlls/dll__vendor.js" charSet="utf-8" /> }

        {`<!-- xxxxxxxxxxxxx 4444444444444 xxxxxxxxxxxx -->`}

        {assets.javascript && <script src={assets.javascript.main} charSet="utf-8" />}    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< YES

        {`<!-- xxxxxxxxxxxxx 5555555555555 xxxxxxxxxxxx -->`}

        {bundles.map(bundle => testCss.test(bundle) && bundle && <script src={config.assetsPath + bundle.file} key={bundle.id} />)}

        {`<!-- xxxxxxxxxxxxx 66666666666666 xxxxxxxxxxxx -->`}

      </body>
    </html>
  );
};

Html.propTypes = {
  assets: PropTypes.shape({ styles: PropTypes.object, javascript: PropTypes.object }),
  bundles: PropTypes.arrayOf(PropTypes.any),
  content: PropTypes.string,
  store: PropTypes.shape({ getState: PropTypes.func }).isRequired,
};

Html.defaultProps = {
  assets: {},
  bundles: [],
  content: '',
};

export default Html;
