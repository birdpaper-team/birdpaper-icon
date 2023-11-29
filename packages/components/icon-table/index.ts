import type { App } from 'vue';
import _IconTable from './icon-table.vue';

const IconTable = Object.assign(_IconTable, {
  install: (app: App) => {
    app.component(_IconTable.name, _IconTable);
  }
});

export default IconTable;