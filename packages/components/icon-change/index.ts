import type { App } from 'vue';
import _IconChange from './icon-change.vue';

const IconChange = Object.assign(_IconChange, {
  install: (app: App) => {
    app.component(_IconChange.name, _IconChange);
  }
});

export default IconChange;