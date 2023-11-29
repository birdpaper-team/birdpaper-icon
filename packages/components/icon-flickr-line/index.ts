import type { App } from 'vue';
import _IconFlickrLine from './icon-flickr-line.vue';

const IconFlickrLine = Object.assign(_IconFlickrLine, {
  install: (app: App) => {
    app.component(_IconFlickrLine.name, _IconFlickrLine);
  }
});

export default IconFlickrLine;