import type { App } from 'vue';
import _IconSnacks from './icon-snacks.vue';

const IconSnacks = Object.assign(_IconSnacks, {
  install: (app: App) => {
    app.component(_IconSnacks.name, _IconSnacks);
  }
});

export default IconSnacks;