import type { App } from 'vue';
import _IconHistoryFill from './icon-history-fill.vue';

const IconHistoryFill = Object.assign(_IconHistoryFill, {
  install: (app: App) => {
    app.component(_IconHistoryFill.name, _IconHistoryFill);
  }
});

export default IconHistoryFill;