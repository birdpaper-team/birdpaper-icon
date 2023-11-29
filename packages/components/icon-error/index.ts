import type { App } from 'vue';
import _IconError from './icon-error.vue';

const IconError = Object.assign(_IconError, {
  install: (app: App) => {
    app.component(_IconError.name, _IconError);
  }
});

export default IconError;