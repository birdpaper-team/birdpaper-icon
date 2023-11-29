import type { App } from 'vue';
import _IconFacebookFill from './icon-facebook-fill.vue';

const IconFacebookFill = Object.assign(_IconFacebookFill, {
  install: (app: App) => {
    app.component(_IconFacebookFill.name, _IconFacebookFill);
  }
});

export default IconFacebookFill;