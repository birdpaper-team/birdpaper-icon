import type { App } from 'vue';
import _IconAddPrint from './icon-add-print.vue';

const IconAddPrint = Object.assign(_IconAddPrint, {
  install: (app: App) => {
    app.component(_IconAddPrint.name, _IconAddPrint);
  }
});

export default IconAddPrint;