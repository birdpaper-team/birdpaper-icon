import type { App } from 'vue';
import _IconFileHistoryFill from './icon-file-history-fill.vue';

const IconFileHistoryFill = Object.assign(_IconFileHistoryFill, {
  install: (app: App) => {
    app.component(_IconFileHistoryFill.name, _IconFileHistoryFill);
  }
});

export default IconFileHistoryFill;