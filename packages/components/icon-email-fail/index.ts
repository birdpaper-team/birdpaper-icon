import type { App } from 'vue';
import _IconEmailFail from './icon-email-fail.vue';

const IconEmailFail = Object.assign(_IconEmailFail, {
  install: (app: App) => {
    app.component(_IconEmailFail.name, _IconEmailFail);
  }
});

export default IconEmailFail;