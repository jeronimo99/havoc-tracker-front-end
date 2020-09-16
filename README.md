# The Resident Zombie - Frontend

## Introduction

The Resident Zombie is a project for helping survivors in a Zombie Apocalypse. The frontend is made in React, using react-router for locally routing, styled-components for CSS-in-JS styling, Formik for form handling and Yup for validation.
The web app is responsive, so it is easily adapted for mobiles.

Author: Pedro Ramalho Figueirêdo

## Install

```sh
npm install
```

## Running API server

```sh
npm start
```

Now your Resident Zombie - React Frontend is running!

## Pages

The pages are locally routed with the aid of react-router lib

* Landing Page: `/`

The landing page displays the App's logo. The sidebar is always showing on web and hidded by default on mobile devices (open it by pressing the hamburger icon)

* Add a new survivor: `/add-survivor`

This page consists of a form for creating a new survivor.

* List survivors: `/survivors`

This page lists all survivors, non-infected and infected, with almost all their related stats.

* Update a survivor location: `/update-location`

This page fists asks for an id for identification purposes. Then it let the user update his location.

* Trade items: `/trade`

This page let two survivors trade items between them. The items are trade by their values, with exact value match.
The user can only submit when the value balance is 0

* Flag survivor as infected: `/flag-infected`

A survivor can flag another survivor as infected. The search is done by name.

* Get access to some reports: `/reports`

This page prints various reports, including percentages of non-infected and infected, average items of all non-infected survivors and infected points lost (items values lost by turning infected).
