# Barcode (working title)

This single page web app makes use of a computers webcam to decode barcodes to get the products UPC. It then uses the barcode to do a product lookup (yet to be determined what this specifically looks like) and displays the results.

## Installation

1. Clone from `https://github.com/ben-kirby/barcode.git`
2. In parent directory, run `$ npm install; npm run start`
3. In your browser, navigate to `localhost:8080`

## Structure

### UI

<img src="./src/assets/UI.png" width="100%"/>

### Component Tree

<img src="./src/assets/Component.png" width="100%"/>

## Features

- Displays camera input from webcam.
- Will convert screenshot from webcam to base 64 and save it to local state.
- Will display image previously captured (this will be important for passing it along to the barcode reader when it is implemented).

## Known Issues

## Whats Next

- [ ] Implement Amazon Product Advertising API to search for products. 
  - [ ] Get approved for an Amazon Associate Dev account 🤞🏼
  - Assuming I do _not_ get approved, which easily could happen, I can still demonstrate proof of concept by just hard coding UPCs and having a handful of scannable barcodes handy.
- [ ] Implement barcode detector to pass captured images into.
- [ ] Implement redux to share the image info, UPC info, and API response
- [ ]
- [ ]
- [ ]
- [ ]
