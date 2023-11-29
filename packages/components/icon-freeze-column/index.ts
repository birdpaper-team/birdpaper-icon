import type { App } from 'vue';
import _IconFreezeColumn from './icon-freeze-column.vue';

const IconFreezeColumn = Object.assign(_IconFreezeColumn, {
  install: (app: App) => {
    app.component(_IconFreezeColumn.name, _IconFreezeColumn);
  }
});

export default IconFreezeColumn;