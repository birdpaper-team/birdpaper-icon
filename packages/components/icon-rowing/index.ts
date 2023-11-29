import type { App } from 'vue';
import _IconRowing from './icon-rowing.vue';

const IconRowing = Object.assign(_IconRowing, {
  install: (app: App) => {
    app.component(_IconRowing.name, _IconRowing);
  }
});

export default IconRowing;