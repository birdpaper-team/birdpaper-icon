import type { App } from 'vue';
import _IconNodeFlat from './icon-node-flat.vue';

const IconNodeFlat = Object.assign(_IconNodeFlat, {
  install: (app: App) => {
    app.component(_IconNodeFlat.name, _IconNodeFlat);
  }
});

export default IconNodeFlat;