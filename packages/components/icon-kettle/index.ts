import type { App } from 'vue';
import _IconKettle from './icon-kettle.vue';

const IconKettle = Object.assign(_IconKettle, {
  install: (app: App) => {
    app.component(_IconKettle.name, _IconKettle);
  }
});

export default IconKettle;