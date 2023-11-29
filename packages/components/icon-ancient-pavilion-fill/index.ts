import type { App } from 'vue';
import _IconAncientPavilionFill from './icon-ancient-pavilion-fill.vue';

const IconAncientPavilionFill = Object.assign(_IconAncientPavilionFill, {
  install: (app: App) => {
    app.component(_IconAncientPavilionFill.name, _IconAncientPavilionFill);
  }
});

export default IconAncientPavilionFill;