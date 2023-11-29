import type { App } from 'vue';
import _IconMediumFill from './icon-medium-fill.vue';

const IconMediumFill = Object.assign(_IconMediumFill, {
  install: (app: App) => {
    app.component(_IconMediumFill.name, _IconMediumFill);
  }
});

export default IconMediumFill;