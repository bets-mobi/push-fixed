self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};

    const title = data.title || 'Notification';
    const options = {
        body: data.body || 'Click to visit mobitrans.net!',
        icon: 'https://via.placeholder.com/100x100.png?text=Icon',
        actions: [
            {
                action: 'visit-site',
                title: 'Visit Mobitrans',
                icon: 'https://via.placeholder.com/50x50.png?text=Go'
            },
            {
                action: 'close',
                title: 'Close Notification',
                icon: 'https://via.placeholder.com/50x50.png?text=Close'
            }
        ],
        requireInteraction: true
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    if (event.action === 'visit-site') {
        clients.openWindow('https://mobitrans.net');
    } else {
        event.notification.close();
    }
});
