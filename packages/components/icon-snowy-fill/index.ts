import type { App } from 'vue';
import _IconSnowyFill from './icon-snowy-fill.vue';

const IconSnowyFill = Object.assign(_IconSnowyFill, {
  install: (app: App) => {
    app.component(_IconSnowyFill.name, _IconSnowyFill);
  }
});

export default IconSnowyFill;