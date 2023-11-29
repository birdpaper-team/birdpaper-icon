import type { App } from 'vue';
import _IconSubway from './icon-subway.vue';

const IconSubway = Object.assign(_IconSubway, {
  install: (app: App) => {
    app.component(_IconSubway.name, _IconSubway);
  }
});

export default IconSubway;