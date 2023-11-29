import type { App } from 'vue';
import _IconWindows from './icon-windows.vue';

const IconWindows = Object.assign(_IconWindows, {
  install: (app: App) => {
    app.component(_IconWindows.name, _IconWindows);
  }
});

export default IconWindows;