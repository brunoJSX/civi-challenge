<h1 align="center">
  Civi Challenge
</h1>

<div align="center">
 "To infinity and beyond 🚀"
</div>

&nbsp;

<h1 align="center">
  <img alt="Logo" title="#ASK3" src="./mobile/.github/preview_app.gif" />
</h1>

&nbsp;

## About 🤓

This is a mobile application, developed in React Native and Node.JS, a bit like Gmail app. It was developed as a challenge proposed by Civi App.

---

**ATTENTION :warning:**

Please perform the entire process below on a Linux platform, otherwise unexpected errors may occur.

---

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

  Download the Expo app, on your physical device, and read the QRCode that appeared on your terminal.

  ***

  **NOTE :warning:**

  Your mobile device and front-end server must be on the same Wi-Fi network

  ***

&nbsp;

<h2 align="center">
 Liked? 🥳🚀
</h2>

<div align="center">
 If you liked it, rate it with a beautiful 🌟, that way you will encourage me to publish more and better projects.
</div>
