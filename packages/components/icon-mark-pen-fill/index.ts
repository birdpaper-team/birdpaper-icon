import type { App } from 'vue';
import _IconMarkPenFill from './icon-mark-pen-fill.vue';

const IconMarkPenFill = Object.assign(_IconMarkPenFill, {
  install: (app: App) => {
    app.component(_IconMarkPenFill.name, _IconMarkPenFill);
  }
});

export default IconMarkPenFill;