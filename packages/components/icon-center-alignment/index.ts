import type { App } from 'vue';
import _IconCenterAlignment from './icon-center-alignment.vue';

const IconCenterAlignment = Object.assign(_IconCenterAlignment, {
  install: (app: App) => {
    app.component(_IconCenterAlignment.name, _IconCenterAlignment);
  }
});

export default IconCenterAlignment;