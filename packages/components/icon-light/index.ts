import type { App } from 'vue';
import _IconLight from './icon-light.vue';

const IconLight = Object.assign(_IconLight, {
  install: (app: App) => {
    app.component(_IconLight.name, _IconLight);
  }
});

export default IconLight;