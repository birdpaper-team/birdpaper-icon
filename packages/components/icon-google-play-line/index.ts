import type { App } from 'vue';
import _IconGooglePlayLine from './icon-google-play-line.vue';

const IconGooglePlayLine = Object.assign(_IconGooglePlayLine, {
  install: (app: App) => {
    app.component(_IconGooglePlayLine.name, _IconGooglePlayLine);
  }
});

export default IconGooglePlayLine;