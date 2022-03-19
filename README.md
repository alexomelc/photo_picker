## Functional requirements
Your task is to build a simple photo reviewing feature.
Upon loading, the application presents the user with a list of already approved images. This list would initially be empty for someone who has never used the application before. Users can add photos by clicking on a + button. Upon clicking on the + button, the user is presented with an image from the Unsplash API (documentation for fetching a random photo from their API can be found here - https://unsplash.com/documentation#get-a-random-photo)
Whenever an image is presented, the user can either approve or reject the image. If an image is rejected, the user is presented with a new image. If the image is approved, it is added to the list of approved images.
Users should not be presented with images that have been previously rejected at any point.
Application state should persist between page reloads.
 
Non-functional requirements
● Use React and Redux
● Use Styled Components - we rely on styled components quite extensively, and while we do not expect to see a super polished UI, we need you to demonstrate that you are comfortable with styled components and CSS.
● Unit Testing - don’t go all out TDD, but giving us a sample of what good tests look like in your opinion would go a long way :)
● You are free to use any additional libraries you would like
● Use the wireframes just as orientation. (you can find them in the root folder: wireframe1.png, wireframe2.png)
case you need it.

## Clarification
Because of the limitations of unsplash API, not being able to delete the list of liked photos, the complexity of adding a new user with the creation of his KEY for requests, now can be displayed only 30 photos. As added photos are already more than 30, the counter will not increase. But everything works correctly and since the requirements are. Last added photos will be displayed in the list of all liked photos.

Note - if you change the Authorization Key in services/api/http-common.js and open the application in incognito window (because the state of the application is saved in the local storage) then you will see that the initial state is the same as in the requirements.


## Available Scripts

In the project directory, you can run:

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
