# Yurah Translater

Service dedicated to translate texts using our desired translating tool. This worker receives the text from a RabbitMQ queue alongside with its language and returns it's translation.

## 🧐 What's inside

`indexing.TRANSLATE`

Parameters

* **content**: The content that should be translated `REQUIRED`
* **language**: The language of the content

Response

* **translation**: The translation of the content in PT_BR

## 🤖 Installation Instructions

This service is based on Node. To run it you just need to install any version above Node 11.2. We use Docker to build and deploy our services, so you just need to keep the Docker's and CI files, this will trigger the CI automatically.

To install the package, just run:

```
npm i
```

And then, to start the server:

```
npm start
```

Or, you can start the server as development mode:

```
npm run dev
```

After that the server will be up and running, waiting for any API calls.

## 💀 Testing

We use Jest to test our file. Every test file should follow this pattern:

```
<nome>.test.js
```

To test it, just run:
```
npm test
```

## 💅 Versioning

We use [SemVer](https://semver.org/) for versioning.
