import type { App } from 'vue';
import _IconHandheld from './icon-handheld.vue';

const IconHandheld = Object.assign(_IconHandheld, {
  install: (app: App) => {
    app.component(_IconHandheld.name, _IconHandheld);
  }
});

export default IconHandheld;