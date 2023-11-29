import type { App } from 'vue';
import _IconPixelfedFill from './icon-pixelfed-fill.vue';

const IconPixelfedFill = Object.assign(_IconPixelfedFill, {
  install: (app: App) => {
    app.component(_IconPixelfedFill.name, _IconPixelfedFill);
  }
});

export default IconPixelfedFill;