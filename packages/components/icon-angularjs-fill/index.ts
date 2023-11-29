import type { App } from 'vue';
import _IconAngularjsFill from './icon-angularjs-fill.vue';

const IconAngularjsFill = Object.assign(_IconAngularjsFill, {
  install: (app: App) => {
    app.component(_IconAngularjsFill.name, _IconAngularjsFill);
  }
});

export default IconAngularjsFill;