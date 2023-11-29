import type { App } from 'vue';
import _IconPeach from './icon-peach.vue';

const IconPeach = Object.assign(_IconPeach, {
  install: (app: App) => {
    app.component(_IconPeach.name, _IconPeach);
  }
});

export default IconPeach;