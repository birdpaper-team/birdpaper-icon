import type { App } from 'vue';
import _IconCamp from './icon-camp.vue';

const IconCamp = Object.assign(_IconCamp, {
  install: (app: App) => {
    app.component(_IconCamp.name, _IconCamp);
  }
});

export default IconCamp;