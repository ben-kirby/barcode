# Barcode (working title)

This single page web app makes use of a computers webcam to decode barcodes to get the products UPC. It then uses the barcode to do a product lookup (yet to be determined what this specifically looks like) and displays the results.

Ideally, this will have little to no user interaction aside from positioning a barcode in front of the camera. Assuming the barcode detector is not to memory intensive, I'll just pass a new image into it every second or so until it finds a barcode, then tell it to stop the webcam capture. The resulting UPC and API lookup can easily be automated. The only time a user should have to interact with the page should be starting a new search or clicking a product in the results list.hg

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
  - [ ] Alternatively use google shopping, but I would need to do more research on how it works. I'm not clear on if their Shopping API is just for a specific merchants inventory (i.e. I put my inventory into googles store management system and I can use the api to implement product searches on my own domain), or if it is a general search that returns results from multiple merchants.
  - Assuming I do _not_ get approved (which easily could happen), and Google's API doesnt work the way I want, I can still demonstrate proof of concept by just hard coding UPCs and having a handful of scannable barcodes handy.
- [ ] Implement barcode detector to pass captured images into.
- [ ] Implement redux to share the image info, UPC info, and API response.
- [ ] Style this bad boy
