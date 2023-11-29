import type { App } from 'vue';
import _IconTub from './icon-tub.vue';

const IconTub = Object.assign(_IconTub, {
  install: (app: App) => {
    app.component(_IconTub.name, _IconTub);
  }
});

export default IconTub;