import type { App } from 'vue';
import _IconMountain from './icon-mountain.vue';

const IconMountain = Object.assign(_IconMountain, {
  install: (app: App) => {
    app.component(_IconMountain.name, _IconMountain);
  }
});

export default IconMountain;