import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, options) => {
  return setPostBodyComponents([
    <script
      key="gatsby-plugin-stripe"
      src="https://js.stripe.com/v3/"
      async={options.async}
    />
  ]);
}