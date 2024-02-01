import type { App } from 'vue';
import _IconTable3 from './icon-table-3.vue';

const IconTable3 = Object.assign(_IconTable3, {
  install: (app: App) => {
    app.component(_IconTable3.name, _IconTable3);
  }
});

export default IconTable3;