import type { App } from 'vue';
import _IconHandwashing from './icon-handwashing.vue';

const IconHandwashing = Object.assign(_IconHandwashing, {
  install: (app: App) => {
    app.component(_IconHandwashing.name, _IconHandwashing);
  }
});

export default IconHandwashing;