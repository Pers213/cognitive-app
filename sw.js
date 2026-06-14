self.addEventListener('push', function(event) {
  const options = {
    body: event.data.text(),
    icon: 'icon.png',
    badge: 'icon.png',
    vibrate: [200, 100, 200],
    requireInteraction: true,  // Не исчезает сам
    tag: 'reminder',
    renotify: true,
    data: {
      url: self.location.origin
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('🧠 Когнитивные практики', options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
