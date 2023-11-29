import type { App } from 'vue';
import _IconPivotTable from './icon-pivot-table.vue';

const IconPivotTable = Object.assign(_IconPivotTable, {
  install: (app: App) => {
    app.component(_IconPivotTable.name, _IconPivotTable);
  }
});

export default IconPivotTable;