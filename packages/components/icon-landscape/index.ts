import type { App } from 'vue';
import _IconLandscape from './icon-landscape.vue';

const IconLandscape = Object.assign(_IconLandscape, {
  install: (app: App) => {
    app.component(_IconLandscape.name, _IconLandscape);
  }
});

export default IconLandscape;