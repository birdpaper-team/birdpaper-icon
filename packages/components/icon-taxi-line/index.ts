import type { App } from 'vue';
import _IconTaxiLine from './icon-taxi-line.vue';

const IconTaxiLine = Object.assign(_IconTaxiLine, {
  install: (app: App) => {
    app.component(_IconTaxiLine.name, _IconTaxiLine);
  }
});

export default IconTaxiLine;