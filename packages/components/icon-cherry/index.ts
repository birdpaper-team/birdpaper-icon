import type { App } from 'vue';
import _IconCherry from './icon-cherry.vue';

const IconCherry = Object.assign(_IconCherry, {
  install: (app: App) => {
    app.component(_IconCherry.name, _IconCherry);
  }
});

export default IconCherry;