import type { App } from 'vue';
import _IconExpandDown from './icon-expand-down.vue';

const IconExpandDown = Object.assign(_IconExpandDown, {
  install: (app: App) => {
    app.component(_IconExpandDown.name, _IconExpandDown);
  }
});

export default IconExpandDown;