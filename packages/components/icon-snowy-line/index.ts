import type { App } from 'vue';
import _IconSnowyLine from './icon-snowy-line.vue';

const IconSnowyLine = Object.assign(_IconSnowyLine, {
  install: (app: App) => {
    app.component(_IconSnowyLine.name, _IconSnowyLine);
  }
});

export default IconSnowyLine;