# Active Businesses - Front-end app

This is the front-end app of the tech test for the ae.studio.

It's a very simple Vue.js application, that queries the back-end app to display
data about active businesses.

It basically has two components: a loader that is shown while the application
and its initial data are loaded; and the main component where the user can use
the buttons to request the data from the back-end. Every time the user clicks
the button, a request is made. Nothing is cached by the Vue application. In a
real world case that would be different, but for the sake of this test I
want to request all the times to test the funcionality.

The UI is very simple and clean. The markup is semantic and the JS code is well
formatted and easy to understand.

The main stack used here is:

- Vue.js 2.6.12
- BootstrapVue 2.21.2
- axios 0.21.1

## Install dependencies

```
npm install
```

### Serve the application (with hot-reload)

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Watch for changes and compiles for development

```
npm run watch
```

### Compiles the separate sass styles

```
npm run sass
```

### Watch for changes and compiles the separate sass styles

```
npm run sass:watch
```

### Testing

No unit tests wrote.