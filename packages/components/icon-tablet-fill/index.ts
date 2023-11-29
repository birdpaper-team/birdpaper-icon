import type { App } from 'vue';
import _IconTabletFill from './icon-tablet-fill.vue';

const IconTabletFill = Object.assign(_IconTabletFill, {
  install: (app: App) => {
    app.component(_IconTabletFill.name, _IconTabletFill);
  }
});

export default IconTabletFill;