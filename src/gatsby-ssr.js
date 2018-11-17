import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  return setPostBodyComponents([
    <script key='gatsby-plugin-stripe' src="https://js.stripe.com/v3/" />
  ]);
}