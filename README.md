# Project Name: CANTAR

## Description

A service that allows users to study a foreign language through music by providing the ability to -
    search the lyrics of a song, 
    translate a word or group of words, 
    view the entire translation in parallel text,
    generate a flashcard from the selected word,
    generate a fill in the blank quiz from selected lines of text,
    save and organize new vocabulary words by tagging them with a keyword,
    and track their learning progress.
 
## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault

- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup

- **sign up** - As a user I want to sign up so that I can translate lyrics, save my translations and generate study materials

- **login** - As a user I want to be able to log in so that I can get back to my account and track my learning progress

- **logout** - As a user I want to be able to log out so that I can make sure no one will access my account

- **search track** - As a user I want to search for a track so that I can translate, heart, tag, and review the song I want

- **track lyrics** - As a user I want to see the track lyrics and so that I can translate, heart for later, add a tag, and review

- **track focus** - As a user I want to focus on a certain line of track so that I can center my attention and create a flashcard

- **heart tracks** - As a user I want to be able to easily heart/unheart a track to save it to my vocabulary 
- **hearted tracks list** - As a user I want to be able to view my hearted tracks all in one place

- **tag tracks** - As a user I want to be able to easily tag/untag a track so I can be more organized
- **tagged tracks** - As a user I want to be able to view tracks with a specific tag all in one place

- **create track** - As a user I want to create a new track if I cannot find it by searching

- **review** - As a user I want to be able to access the review page so that I can see my vocabulary, review flashcards

- **flashcard** - As a user I want to be able to 

- **personal page** - As a user I want to view my personal details so that I can track my learning progress

- **nav bar** - As a user I want to view the navigation bar to see where I can go on the app

- **log out** - As a user I want to log out if I'm not using the app

## Backlog

List of other features outside of the MVPs scope



- **fill in the blank** - As a user I want to create a fill in the blank quiz from the track focus view and it it to review

- **user interaction** - As a user I want to be able to follow my friends and view their hearted songs

- **spotify preview** - As a user I want to be able to listen to a preview of the track in the app 

- **premade tracklist suggestions** - As a user I want to see tracklist suggestions to find new songs in other languages




## ROUTES:
- GET /
 - renders splash screen
- GET /auth/signup
  - redirects to /myCantar if user logged in
  - renders the signup form (with flash msg)
- POST /auth/signup
  - redirects to /myCantar if user signed up
  - body:
    - username
    - password
- GET /auth/login
  - redirects to /myCantar if user logged in
  - renders the login form (with flash msg)
- POST /auth/login
  - redirects to /myCantar if user logged in
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
  - redirect to /

- GET /myCantar
  - renders the hearted tracks list (/tracks/:id), nav bar, title, link to create, link to personal page

- GET /tracks/:id
  - renders the track lyrics

- GET /tracks/create
  - renders the create form
- POST tracks/create
  - body: 
    - title
    - artist
    - album art
    - lyrics
    - tags
- GET /tracks/:id/tag
  - renders the tag form
- POST /tracks/:id/tag
 // - redirects to /tracks/:id
  - body: 
    - title
    - artist
    - album art
    - lyrics
    - tags
- GET /tracks/:id/heart
  - renders the heart form
- POST /tracks/:id/heart
 // - redirects to /myCantar

  - POST /gyms/:id/delete
   - redirect to /gyms


## Models

User model
 
```
username: String
password: String
tracks: Array[ObjectId<track>]
```

track model

```
title: ObjectId<track>
artist: String
albumArt: image
lyrics: String
tag: string


``` 

## Links

### Trello

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)