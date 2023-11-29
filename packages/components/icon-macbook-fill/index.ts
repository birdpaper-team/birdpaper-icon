import type { App } from 'vue';
import _IconMacbookFill from './icon-macbook-fill.vue';

const IconMacbookFill = Object.assign(_IconMacbookFill, {
  install: (app: App) => {
    app.component(_IconMacbookFill.name, _IconMacbookFill);
  }
});

export default IconMacbookFill;