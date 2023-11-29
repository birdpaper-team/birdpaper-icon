import type { App } from 'vue';
import _IconBelt from './icon-belt.vue';

const IconBelt = Object.assign(_IconBelt, {
  install: (app: App) => {
    app.component(_IconBelt.name, _IconBelt);
  }
});

export default IconBelt;