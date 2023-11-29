import type { App } from 'vue';
import _IconRepositioning from './icon-repositioning.vue';

const IconRepositioning = Object.assign(_IconRepositioning, {
  install: (app: App) => {
    app.component(_IconRepositioning.name, _IconRepositioning);
  }
});

export default IconRepositioning;