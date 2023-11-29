import type { App } from 'vue';
import _IconVrGlasses from './icon-vr-glasses.vue';

const IconVrGlasses = Object.assign(_IconVrGlasses, {
  install: (app: App) => {
    app.component(_IconVrGlasses.name, _IconVrGlasses);
  }
});

export default IconVrGlasses;