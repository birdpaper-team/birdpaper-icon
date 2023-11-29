import type { App } from 'vue';
import _IconFinderFill from './icon-finder-fill.vue';

const IconFinderFill = Object.assign(_IconFinderFill, {
  install: (app: App) => {
    app.component(_IconFinderFill.name, _IconFinderFill);
  }
});

export default IconFinderFill;