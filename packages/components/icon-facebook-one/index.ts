import type { App } from 'vue';
import _IconFacebookOne from './icon-facebook-one.vue';

const IconFacebookOne = Object.assign(_IconFacebookOne, {
  install: (app: App) => {
    app.component(_IconFacebookOne.name, _IconFacebookOne);
  }
});

export default IconFacebookOne;