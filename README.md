# README

## Introduction

A simple demo mapping application showing properties on an interactive map, using:
- React
- Redux
- ImmutableJS
- Redux Thunk
- CSS Modules
- Webpack, Babel
- MapboxGL

## Setup

To run the app, first clone the repo.

```bash
mkdir lc_client && cd lc_client
git clone https://github.com/koriner/lc_client.git .
```

## Mapbox token

You'll need to set a mapbox access token in the config. This can be found in the
`src/constants/config.js` file.

## Running the app

Install dependencies and run the dev server

```bash
# If you don't have yarn, install it first
npm install -g yarn

yarn

yarn run start
```

## Notes

The production build isn't really set up (but might work) so this is only tested to run in development mode.