import type { App } from 'vue';
import _IconSubwayFill from './icon-subway-fill.vue';

const IconSubwayFill = Object.assign(_IconSubwayFill, {
  install: (app: App) => {
    app.component(_IconSubwayFill.name, _IconSubwayFill);
  }
});

export default IconSubwayFill;