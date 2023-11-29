import type { App } from 'vue';
import _IconDrizzleFill from './icon-drizzle-fill.vue';

const IconDrizzleFill = Object.assign(_IconDrizzleFill, {
  install: (app: App) => {
    app.component(_IconDrizzleFill.name, _IconDrizzleFill);
  }
});

export default IconDrizzleFill;