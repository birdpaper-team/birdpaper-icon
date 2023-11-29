import type { App } from 'vue';
import _IconMicroscopeOne from './icon-microscope-one.vue';

const IconMicroscopeOne = Object.assign(_IconMicroscopeOne, {
  install: (app: App) => {
    app.component(_IconMicroscopeOne.name, _IconMicroscopeOne);
  }
});

export default IconMicroscopeOne;