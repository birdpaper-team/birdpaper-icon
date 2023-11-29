import type { App } from 'vue';
import _IconLevel from './icon-level.vue';

const IconLevel = Object.assign(_IconLevel, {
  install: (app: App) => {
    app.component(_IconLevel.name, _IconLevel);
  }
});

export default IconLevel;