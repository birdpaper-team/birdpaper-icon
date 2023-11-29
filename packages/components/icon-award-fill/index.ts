import type { App } from 'vue';
import _IconAwardFill from './icon-award-fill.vue';

const IconAwardFill = Object.assign(_IconAwardFill, {
  install: (app: App) => {
    app.component(_IconAwardFill.name, _IconAwardFill);
  }
});

export default IconAwardFill;