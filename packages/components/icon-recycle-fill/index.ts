import type { App } from 'vue';
import _IconRecycleFill from './icon-recycle-fill.vue';

const IconRecycleFill = Object.assign(_IconRecycleFill, {
  install: (app: App) => {
    app.component(_IconRecycleFill.name, _IconRecycleFill);
  }
});

export default IconRecycleFill;