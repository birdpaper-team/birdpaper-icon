import type { App } from 'vue';
import _IconEarth from './icon-earth.vue';

const IconEarth = Object.assign(_IconEarth, {
  install: (app: App) => {
    app.component(_IconEarth.name, _IconEarth);
  }
});

export default IconEarth;