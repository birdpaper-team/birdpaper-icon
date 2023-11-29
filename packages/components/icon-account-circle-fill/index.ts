import type { App } from 'vue';
import _IconAccountCircleFill from './icon-account-circle-fill.vue';

const IconAccountCircleFill = Object.assign(_IconAccountCircleFill, {
  install: (app: App) => {
    app.component(_IconAccountCircleFill.name, _IconAccountCircleFill);
  }
});

export default IconAccountCircleFill;