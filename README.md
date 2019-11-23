# Project Overview

- [Project Instructions](#project-instructions)
- [Development](#development)
- [Running with the Aylien NLP](#running)
- [Done](#done)

## Project Instructions

This repo is your starter code for the project. It is the same as the starter
code we began with in lesson 2. Install and configure Webpack just as we did in
the course. Feel free to refer to the course repo as you build this one, and
remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Development

To start development you simply run `npm start` for running the server and
`npm run build-dev` to run the webpack-dev-server for the UI part.

Additionally I recommend to run in a separate terminal window `npm t -- --watch`
to run the test suits in parallel in watch-mode. So you're able to see if you
break core functionality.

Please enhance the test cases if you add functionality

## Running with the Aylien NLP

To run the server with the Aylien NLP you need an API Key and Application ID in
an .env file. `AYLIEN_APP_ID` and `AYLIEN_API_KEY` as attribute with the related
content.

Now you're able to run the server with the Aylien API to get a language
processing.

## Done

The Server part was enhanced with additional `get, post` requests. The `post`
request requests data from the Aylien API and responds with an error or an
proper response.

The UI Part was adapted to support SASS & CSS. The whole UI build process was
created with webpack. Some UX for offline functionality got added and last but
not least unit tests.
