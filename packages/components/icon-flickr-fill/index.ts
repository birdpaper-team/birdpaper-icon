import type { App } from 'vue';
import _IconFlickrFill from './icon-flickr-fill.vue';

const IconFlickrFill = Object.assign(_IconFlickrFill, {
  install: (app: App) => {
    app.component(_IconFlickrFill.name, _IconFlickrFill);
  }
});

export default IconFlickrFill;