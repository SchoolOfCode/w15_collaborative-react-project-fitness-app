if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register('%PUBLIC_URL%/serviceWorker.js', {scope: '%PUBLIC_URL%/'})
      .then(registration => {
          console.log("service worker registered");
      }).catch(error => {
          console.log("service worker not registered", error);
  })
}