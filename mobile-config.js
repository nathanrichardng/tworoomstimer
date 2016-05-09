// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.tuesdayknight.twooroomsandaboom',
  name: 'Two Rooms and a Boom!',
  description: 'A helper app for the game Two Rooms and a Boom!',
  author: 'Nathan Richard Ng'
});

App.accessRule("*");


// Set up resources such as icons and launch screens.
App.icons({
  // Android
  'android_mdpi': 'public/images/logo.png',
  'android_hdpi': 'public/images/logo.png',
  'android_xhdpi': 'public/images/logo.png',
  'android_xxhdpi': 'public/images/logo.png',
  'android_xxxhdpi': 'public/images/logo.png'
});

App.launchScreens({
  // Android
  'android_mdpi_portrait': 'public/images/Bomber.png',
  'android_mdpi_landscape': 'public/images/Bomber.png',
  'android_hdpi_portrait': 'public/images/Bomber.png',
  'android_hdpi_landscape': 'public/images/Bomber.png',
  'android_xhdpi_portrait': 'public/images/Bomber.png',
  'android_xhdpi_landscape': 'public/images/Bomber.png',
  'android_xxhdpi_portrait': 'public/images/Bomber.png',
  'android_xxhdpi_landscape': 'public/images/Bomber.png',
  'android_xxxhdpi_portrait': 'public/images/Bomber.png',
  'android_xxxhdpi_landscape': 'public/images/Bomber.png'
});

