import type { App } from 'vue';
import _IconTaskFill from './icon-task-fill.vue';

const IconTaskFill = Object.assign(_IconTaskFill, {
  install: (app: App) => {
    app.component(_IconTaskFill.name, _IconTaskFill);
  }
});

export default IconTaskFill;