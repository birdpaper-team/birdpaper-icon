import type { App } from 'vue';
import _IconPrinter from './icon-printer.vue';

const IconPrinter = Object.assign(_IconPrinter, {
  install: (app: App) => {
    app.component(_IconPrinter.name, _IconPrinter);
  }
});

export default IconPrinter;