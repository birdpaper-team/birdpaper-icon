import type { App } from 'vue';
import _IconThin from './icon-thin.vue';

const IconThin = Object.assign(_IconThin, {
  install: (app: App) => {
    app.component(_IconThin.name, _IconThin);
  }
});

export default IconThin;