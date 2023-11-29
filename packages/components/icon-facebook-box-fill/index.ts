import type { App } from 'vue';
import _IconFacebookBoxFill from './icon-facebook-box-fill.vue';

const IconFacebookBoxFill = Object.assign(_IconFacebookBoxFill, {
  install: (app: App) => {
    app.component(_IconFacebookBoxFill.name, _IconFacebookBoxFill);
  }
});

export default IconFacebookBoxFill;