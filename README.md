# ArtHub

Find digital art and music projects. 

Search for your favorite artists. Join the community as a member or as an artist by uploading your own art projects.  

## Description

A React app that uses a Ruby backend to search for artists, art projects and memberships with an API.

Use the navigation bar to display different components of the app. Choices include: 

## Challenges

- Creating an API to communicate with the frontend allowing for CRUD capabilities using ActiveRecord was the toughest part of this project. 

- In the future I want to add a login function .

### How to Install Project

- Fork and clone both the "arthub" front end and backend repos from GitHub
# Dependencies

- Backend: in the command line type $bundle install

- Backend: in the command line type $rake server
This will run your server on port http://localhost:9292

- Frontend: in the command line type $npm install react-router-dom@5.3.0

- Frontend: in the command line type $npm install -g

- Frontend: in the command line type $npm start 
This will run your app on port http://localhost:3000

# Navigating the application
- Use the navbar to move between areas of the app

- Account: See all active users

- Artists: View and search for artists

- Buyers: Become a member of the community

- Gallery: View a gallery of NFT art projects 

## Setup

`src` folder contains the following files:

```txt
src/
├── index.css
├── index.js
└── components/
    ├── Accounts.js
    ├── AccountsCard.js
    ├── AddArt.js
    ├── App.js
    ├── Art.js
    ├── ArtCard.js
    ├── Artists.js
    ├── ArtistsCard.js
    ├── Buyers.js
    ├── Header.js
    ├── NavBar.js
    └── Search.js
```

### index.js

`index.js` loads the `BrowserRouter` component from React Router, as well as `App` as the top level component.

## Resources

- [React Router](https://v5.reactrouter.com/web/guides/quick-start)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[dbdiagram.io]: https://dbdiagram.io/

[postman download]: https://www.postman.com/downloads/

[network tab]: https://developer.chrome.com/docs/devtools/network/