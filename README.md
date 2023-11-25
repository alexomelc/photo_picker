## Functional requirements
This is a photo reviewing app.
Upon loading, the application presents the user with a list of already approved images. This list would initially be empty for someone who has never used the application before. Users can add photos by clicking on a + button. Upon clicking on the + button, the user is presented with an image from the Unsplash API (documentation for fetching a random photo from their API can be found here - https://unsplash.com/documentation#get-a-random-photo)
Whenever an image is presented, the user can either approve or reject the image. If an image is rejected, the user is presented with a new image. If the image is approved, it is added to the list of approved images.
Users should not be presented with images that have been previously rejected at any point.
Application state should persist between page reloads.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
