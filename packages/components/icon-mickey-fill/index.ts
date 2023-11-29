import type { App } from 'vue';
import _IconMickeyFill from './icon-mickey-fill.vue';

const IconMickeyFill = Object.assign(_IconMickeyFill, {
  install: (app: App) => {
    app.component(_IconMickeyFill.name, _IconMickeyFill);
  }
});

export default IconMickeyFill;