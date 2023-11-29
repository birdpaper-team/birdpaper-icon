import type { App } from 'vue';
import _IconDataSwitching from './icon-data-switching.vue';

const IconDataSwitching = Object.assign(_IconDataSwitching, {
  install: (app: App) => {
    app.component(_IconDataSwitching.name, _IconDataSwitching);
  }
});

export default IconDataSwitching;