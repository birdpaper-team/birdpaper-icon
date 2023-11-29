import type { App } from 'vue';
import _IconRocketFill from './icon-rocket-fill.vue';

const IconRocketFill = Object.assign(_IconRocketFill, {
  install: (app: App) => {
    app.component(_IconRocketFill.name, _IconRocketFill);
  }
});

export default IconRocketFill;