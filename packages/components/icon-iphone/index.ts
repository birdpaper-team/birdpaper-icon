import type { App } from 'vue';
import _IconIphone from './icon-iphone.vue';

const IconIphone = Object.assign(_IconIphone, {
  install: (app: App) => {
    app.component(_IconIphone.name, _IconIphone);
  }
});

export default IconIphone;