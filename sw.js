self.addEventListener('install', (event) => {
    self.skipWaiting(); // Turant activate karo
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim()); // Sabhi windows par kabza karo
});

// Ye system bar mein notification dikhayega
self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'Naya Moment Upload hua! ❤️',
        icon: 'logo.png',
        vibrate: [100, 50, 100]
    };
    event.waitUntil(self.registration.showNotification('Vishu App', options));
});
