import type { App } from 'vue';
import _IconCat from './icon-cat.vue';

const IconCat = Object.assign(_IconCat, {
  install: (app: App) => {
    app.component(_IconCat.name, _IconCat);
  }
});

export default IconCat;