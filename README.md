# gatsby-plugin-stripe

**THIS PROJECT IS NOW DEPRECATED. Read below for more details.**

**Stripe has now published [a wrapper for Stripe.js](https://github.com/stripe/stripe-js) that you should use instead of this plugin. For an example of it used in a React project with Stripe Elements, see [these Stripe docs](https://stripe.com/docs/stripe-js/react#elements-provider).**

**This plugin will no longer be maintained or updated. [Dragon Mart](https://dragon-mart.netlify.com/), an example site that used this plugin before, has been updated.**

---

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