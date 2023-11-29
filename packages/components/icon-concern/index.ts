import type { App } from 'vue';
import _IconConcern from './icon-concern.vue';

const IconConcern = Object.assign(_IconConcern, {
  install: (app: App) => {
    app.component(_IconConcern.name, _IconConcern);
  }
});

export default IconConcern;