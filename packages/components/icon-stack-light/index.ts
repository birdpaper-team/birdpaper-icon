import type { App } from 'vue';
import _IconStackLight from './icon-stack-light.vue';

const IconStackLight = Object.assign(_IconStackLight, {
  install: (app: App) => {
    app.component(_IconStackLight.name, _IconStackLight);
  }
});

export default IconStackLight;