import type { App } from 'vue';
import _IconAliensFill from './icon-aliens-fill.vue';

const IconAliensFill = Object.assign(_IconAliensFill, {
  install: (app: App) => {
    app.component(_IconAliensFill.name, _IconAliensFill);
  }
});

export default IconAliensFill;