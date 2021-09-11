
const imageLoader = {
  loaded: true,
  loadedImages: 0,
  totalImages: 0,
  load: function(url) {
      this.totalImages++;
      this.loaded = false;
      let image = new Image();
      image.src = url;
      image.onload = function() {
          imageLoader.loadedImages++;
          if (imageLoader.loadedImages === imageLoader.totalImages) {
              imageLoader.loaded = true;
          }
          image.onload = undefined;
      }
      return image;
  }
};
