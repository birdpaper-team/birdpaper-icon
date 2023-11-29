import type { App } from 'vue';
import _IconOrange from './icon-orange.vue';

const IconOrange = Object.assign(_IconOrange, {
  install: (app: App) => {
    app.component(_IconOrange.name, _IconOrange);
  }
});

export default IconOrange;