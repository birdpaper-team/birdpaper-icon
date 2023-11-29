import type { App } from 'vue';
import _IconEmpathizeFill from './icon-empathize-fill.vue';

const IconEmpathizeFill = Object.assign(_IconEmpathizeFill, {
  install: (app: App) => {
    app.component(_IconEmpathizeFill.name, _IconEmpathizeFill);
  }
});

export default IconEmpathizeFill;