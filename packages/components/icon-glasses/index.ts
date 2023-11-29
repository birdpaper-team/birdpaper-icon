import type { App } from 'vue';
import _IconGlasses from './icon-glasses.vue';

const IconGlasses = Object.assign(_IconGlasses, {
  install: (app: App) => {
    app.component(_IconGlasses.name, _IconGlasses);
  }
});

export default IconGlasses;