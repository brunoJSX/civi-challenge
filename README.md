<h1 align="center">
  Civi Challenge
</h1>

<div align="center">
 "To infinity and beyond 🚀"
</div>

## About 🤓

This is a mobile application, developed in React Native and Node.JS, a bit like Gmail app. It was developed as a challenge proposed by Civi App.

### Requirements:

- [node.js](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/)
- [expo-cli](https://docs.expo.dev/index.html)

### Getting started 🔧🆙

- **Clone the project**

  ```bash
      git clone https://github.com/brunoJSX/civi-challenge
  ```

- **Starting the backend**

  - Navigate to **server** folder

  ```bash
    cd server
  ```

  - Install dependencies

  ```bash
    yarn
  ```

  - Start

  ```bash
    yarn dev:server
  ```

- **Starting the frontend**

  - Navigate to **mobile** folder

  ```bash
    cd mobile
  ```

  - Install dependencies

  ```bash
    yarn
  ```

  - Edit **mobile/src/services/api.ts** and change **YOUR_API_IP**

  ```typescript
  import axios from "axios";

  export const api = axios.create({
    baseURL: "http://YOUR_API_IP:3333",
  });
  ```

  - Start expo

  ```bash
    expo start
  ```

  Finally, it will open in a browser tab, you can use the android or ios emulator, or simply download the Expo app, on your physical device, and read the QRCode.

  ***

  **NOTE**

  If you want to use the Expo app, you must be on the same wifi network.

  ***

&nbsp;

<h2 align="center">
 Liked? 🥳🚀
</h2>

<div align="center">
 If you liked it, rate it with a beautiful 🌟, that way you will encourage me to publish more and better projects.
</div>
