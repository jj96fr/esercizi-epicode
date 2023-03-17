document.getElementById("loadImagesBtn").addEventListener("click", function() {
    loadImages("[https://api.pexels.com/v1/search?query=Ocean]");
  });
  
  function loadImages(query) {
    fetch(`https://api.pexels.com/v1/search?query=Ocean`, {
      headers: {
        "Authorization": "9x0CEm4Yd3kaFy0TnUr9cmjKj8dsDpnwPy8MUeHUGAY8Lcgl9re3UqIB"
      }
    })
    .then(response => response.json())
    .then(data => {
      // Codice per inserire le immagini nella pagina al posto dei placeholder
    });
  }
  document.getElementById("loadSecondaryImagesBtn").addEventListener("click", function() {
    loadImages("[your-secondary-query]");
  });
