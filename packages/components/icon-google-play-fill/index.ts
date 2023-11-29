import type { App } from 'vue';
import _IconGooglePlayFill from './icon-google-play-fill.vue';

const IconGooglePlayFill = Object.assign(_IconGooglePlayFill, {
  install: (app: App) => {
    app.component(_IconGooglePlayFill.name, _IconGooglePlayFill);
  }
});

export default IconGooglePlayFill;