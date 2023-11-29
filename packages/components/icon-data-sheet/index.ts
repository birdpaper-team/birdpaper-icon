import type { App } from 'vue';
import _IconDataSheet from './icon-data-sheet.vue';

const IconDataSheet = Object.assign(_IconDataSheet, {
  install: (app: App) => {
    app.component(_IconDataSheet.name, _IconDataSheet);
  }
});

export default IconDataSheet;