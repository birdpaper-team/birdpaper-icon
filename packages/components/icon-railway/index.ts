import type { App } from 'vue';
import _IconRailway from './icon-railway.vue';

const IconRailway = Object.assign(_IconRailway, {
  install: (app: App) => {
    app.component(_IconRailway.name, _IconRailway);
  }
});

export default IconRailway;