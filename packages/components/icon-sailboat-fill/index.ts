import type { App } from 'vue';
import _IconSailboatFill from './icon-sailboat-fill.vue';

const IconSailboatFill = Object.assign(_IconSailboatFill, {
  install: (app: App) => {
    app.component(_IconSailboatFill.name, _IconSailboatFill);
  }
});

export default IconSailboatFill;