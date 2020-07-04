import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>

      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const ts = Date.now().toString();
            const sendTelemetry = () => {
              // avoid localhost hits
              if (window.location.href.includes("localhost")) return;
              // Analytics
              let query = "v=1";
              query += "&tid=UA-155141542-1"; // tracking ID
              query += "&cid=" + ts; // client ID -> faking as timestamp
              if (document.referrer) query += "&dr="+ encodeURIComponent(document.referrer);
              query += "&ds=web"; // event from
              query += "&aip=1"; //anonymize IP
              query += "&z=" + ts; //to avoid caching of data
              query += "&ul=" + navigator.language;
              query += "&ua=" + encodeURIComponent(navigator.userAgent);
              query += "&dl=" + encodeURIComponent(document.location.origin + document.location.pathname);
              // query += "&dh=" + encodeURIComponent(document.location.origin);
              // query += "&dp=" + encodeURIComponent(document.location.pathname);
              query += "&t=pageview"; //event type
              const request = new XMLHttpRequest();
              request.open("POST", "https://www.google-analytics.com/collect", true);
              request.send(query);
            };

            // Send for the current page
            sendTelemetry();
            // hook pushState function to call sendTelemetry everytime something is pushed in history
            (function(history){
              var pushState = history.pushState;
              history.pushState = function(state) {
                sendTelemetry();
                return pushState.apply(history, arguments);
              };
            })(window.history);
          `,
        }}
      />
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
