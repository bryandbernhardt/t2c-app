# T2C App

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Build Android

Build the application for Android:

```bash
npm run generate && npx cap copy android && npx cap run android --target=Pixel_3_API_33  --external --no-build
```

## Build iOS

Build the application for iOS:

```bash
npm run generate && npx cap copy ios && npx cap run ios
```