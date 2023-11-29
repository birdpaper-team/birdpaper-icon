import type { App } from 'vue';
import _IconDeleteRow from './icon-delete-row.vue';

const IconDeleteRow = Object.assign(_IconDeleteRow, {
  install: (app: App) => {
    app.component(_IconDeleteRow.name, _IconDeleteRow);
  }
});

export default IconDeleteRow;