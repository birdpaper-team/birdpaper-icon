import type { App } from 'vue';
import _IconFunctions from './icon-functions.vue';

const IconFunctions = Object.assign(_IconFunctions, {
  install: (app: App) => {
    app.component(_IconFunctions.name, _IconFunctions);
  }
});

export default IconFunctions;