import type { App } from 'vue';
import _IconSkull from './icon-skull.vue';

const IconSkull = Object.assign(_IconSkull, {
  install: (app: App) => {
    app.component(_IconSkull.name, _IconSkull);
  }
});

export default IconSkull;