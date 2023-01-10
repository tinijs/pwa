require('workbox-build').injectManifest({
  // DO NOT EDIT THESE FIELDS
  swSrc: '<out>/sw.js',
  swDest: '<out>/sw.js',
  globDirectory: '<out>',
  // customize the precaching stratergy here
  globPatterns: [
    '**/*.html',
    '**/*.css',
    '**/*.js',
    '**/*.ico',
    '**/*.jpg',
    '**/*.png',
    '**/*.webp',
    '**/*.svg',
  ],
});
