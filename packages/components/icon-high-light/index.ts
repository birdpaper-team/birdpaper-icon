import type { App } from 'vue';
import _IconHighLight from './icon-high-light.vue';

const IconHighLight = Object.assign(_IconHighLight, {
  install: (app: App) => {
    app.component(_IconHighLight.name, _IconHighLight);
  }
});

export default IconHighLight;