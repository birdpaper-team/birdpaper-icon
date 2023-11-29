import type { App } from 'vue';
import _IconSleaves from './icon-sleaves.vue';

const IconSleaves = Object.assign(_IconSleaves, {
  install: (app: App) => {
    app.component(_IconSleaves.name, _IconSleaves);
  }
});

export default IconSleaves;