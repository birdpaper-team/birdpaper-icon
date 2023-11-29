import type { App } from 'vue';
import _IconCastFill from './icon-cast-fill.vue';

const IconCastFill = Object.assign(_IconCastFill, {
  install: (app: App) => {
    app.component(_IconCastFill.name, _IconCastFill);
  }
});

export default IconCastFill;