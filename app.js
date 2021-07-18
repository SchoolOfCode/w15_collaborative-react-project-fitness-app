if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register('/w15_collaborative-react-project-fitness-app/serviceWorker.js', {scope: '/w15_collaborative-react-project-fitness-app/'})
      .then(registration => {
          console.log("service worker registered");
      }).catch(error => {
          console.log("service worker not registered", error);
  })
}