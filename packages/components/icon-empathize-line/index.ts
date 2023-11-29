import type { App } from 'vue';
import _IconEmpathizeLine from './icon-empathize-line.vue';

const IconEmpathizeLine = Object.assign(_IconEmpathizeLine, {
  install: (app: App) => {
    app.component(_IconEmpathizeLine.name, _IconEmpathizeLine);
  }
});

export default IconEmpathizeLine;