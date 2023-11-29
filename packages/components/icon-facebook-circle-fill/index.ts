import type { App } from 'vue';
import _IconFacebookCircleFill from './icon-facebook-circle-fill.vue';

const IconFacebookCircleFill = Object.assign(_IconFacebookCircleFill, {
  install: (app: App) => {
    app.component(_IconFacebookCircleFill.name, _IconFacebookCircleFill);
  }
});

export default IconFacebookCircleFill;