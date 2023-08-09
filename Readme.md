# Infinite Scroll - React PhotoGallery Method

In this approach, the infinite scrolling functionality is implemented in a React-based photo gallery. By fetching and presenting images from the Unsplash API, this method seamlessly integrates API-driven content within a modern React application.

## Implementation Overview

1. **React State Management**:
   - Utilizing the React `useState` and `useEffect` hooks, we maintain the state of the fetched photos and handle the side effects (like API calls) respectively.

2. **API Integration**:
   - On component mount and subsequent scrolls, the Unsplash API is called, fetching a set of photos based on the current page number.

3. **Event Listener for Scrolling**:
   - A `useEffect` hook sets up an event listener to monitor the scroll position. When the user reaches the bottom of the page, the next set of photos is fetched.

4. **Dynamic Photo Rendering**:
   - Fetched photos are mapped over and dynamically rendered as individual image components within the photo gallery grid.

## Features

- **Component-Based Architecture**: By leveraging React's component structure, the infinite scroll feature can be encapsulated within a single, reusable `PhotoGallery` component.

- **Dynamic Content Rendering**: Utilizing React's efficient DOM updating capabilities, new photos are seamlessly integrated into the existing gallery as users scroll.

- **API-Driven Content**: By integrating with the Unsplash API, the gallery showcases a rich set of diverse images, providing an engaging user experience.

## How to Use

1. Clone the repository and navigate to the project directory.
2. Run `npm install` to install necessary dependencies.
3. Start the application using `npm start`.
4. Open the application in a browser and scroll through the photo gallery. New images will load automatically as you reach the end of the page.