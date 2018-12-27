import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, options) => {
  return setPostBodyComponents([
    <script
      id="stripe-js"
      key="gatsby-plugin-stripe"
      src="https://js.stripe.com/v3/"
      async={options.async}
    />
  ]);
}