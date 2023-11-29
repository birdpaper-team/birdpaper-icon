import type { App } from 'vue';
import _IconEmailDelect from './icon-email-delect.vue';

const IconEmailDelect = Object.assign(_IconEmailDelect, {
  install: (app: App) => {
    app.component(_IconEmailDelect.name, _IconEmailDelect);
  }
});

export default IconEmailDelect;