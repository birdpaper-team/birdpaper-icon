import type { App } from 'vue';
import _IconRecycling from './icon-recycling.vue';

const IconRecycling = Object.assign(_IconRecycling, {
  install: (app: App) => {
    app.component(_IconRecycling.name, _IconRecycling);
  }
});

export default IconRecycling;