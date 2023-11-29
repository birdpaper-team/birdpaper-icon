import type { App } from 'vue';
import _IconMassageTable from './icon-massage-table.vue';

const IconMassageTable = Object.assign(_IconMassageTable, {
  install: (app: App) => {
    app.component(_IconMassageTable.name, _IconMassageTable);
  }
});

export default IconMassageTable;