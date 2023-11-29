import type { App } from 'vue';
import _IconSweater from './icon-sweater.vue';

const IconSweater = Object.assign(_IconSweater, {
  install: (app: App) => {
    app.component(_IconSweater.name, _IconSweater);
  }
});

export default IconSweater;