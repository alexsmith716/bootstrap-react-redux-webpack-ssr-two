import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
import config from '../../config/config';

const testCss = /css.css/;

const Html = ({ assets, store, content, bundles }) => {

  console.log('#######################>>>>>> HTML.JS > assets: ', assets);
  //console.log('>>>>>> HTML.JS > assets.styles length: ', Object.keys(assets.styles).length);
  console.log('#######################>>>>>> HTML.JS > store: ', store);
  //console.log('>>>>>> HTML.JS > content: ', content);
  //console.log('>>>>>> HTML.JS > bundles: ', bundles);

  const head = Helmet.renderStatic();

  return (

    <html lang="en-US">

      <head>
        {/* (>>>>>>> META <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover" />
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

        {/* (will be present only in development mode) */}
        {assets.styles && Object.keys(assets.styles).length === 0 ? (
          <style dangerouslySetInnerHTML={{ __html: '#content{display:none}' }} />
        ) : null}
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

        {assets.javascript && <script src={assets.javascript.manifest} charSet="utf-8" />}

        {assets.javascript && <script src={assets.javascript.vendor} charSet="utf-8" />}

        { __DLLS__ && <script key="dlls__vendor" src="/assets/dlls/dll__vendor.js" charSet="utf-8" /> }

        {assets.javascript && <script src={assets.javascript.main} charSet="utf-8" />}

        {bundles.map(bundle => testCss.test(bundle) && bundle && <script src={config.assetsPath + bundle.file} key={bundle.id} />)}

        {/* (will be present only in development mode) */}
        {assets.styles && Object.keys(assets.styles).length === 0 ? (
          <script dangerouslySetInnerHTML={{ __html: 'document.getElementById("content").style.display="block";' }} />
        ) : null}

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
