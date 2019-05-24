# gatsby-plugin-stripe

A simple plugin that adds `stripe.js` to every page on your Gatsby site.

This is especially useful for building out a Stripe integration using Stripe [Elements](https://stripe.com/docs/elements) or the new version of [Stripe Checkout](https://stripe.com/docs/payments/checkout).

If you're using Stripe Elements, once `stripe.js` is added to your Gatsby site, you can use [Stripe's React Element components](https://github.com/stripe/react-stripe-elements) to integrate Elements into your site.

## How to use

1. Install using either npm or yarn:

```
yarn add gatsby-plugin-stripe
```

or

```
npm install gatsby-plugin-stripe
```

2. Add to ```gatsby-config.js```

```javascript
module.exports = {
  plugins: [
    `gatsby-plugin-stripe`,
  ]
}
```

To load the `<script>` tag asyncronously, pass an 'async' option in `gatsby-config.js`.

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-stripe`,
      options: {
        async: true,
      },
    },
  ],
}
```