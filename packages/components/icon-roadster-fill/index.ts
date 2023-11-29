import type { App } from 'vue';
import _IconRoadsterFill from './icon-roadster-fill.vue';

const IconRoadsterFill = Object.assign(_IconRoadsterFill, {
  install: (app: App) => {
    app.component(_IconRoadsterFill.name, _IconRoadsterFill);
  }
});

export default IconRoadsterFill;