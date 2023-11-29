import type { App } from 'vue';
import _IconTable2 from './icon-table-2.vue';

const IconTable2 = Object.assign(_IconTable2, {
  install: (app: App) => {
    app.component(_IconTable2.name, _IconTable2);
  }
});

export default IconTable2;