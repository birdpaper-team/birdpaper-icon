import type { App } from 'vue';
import _IconMessageOne from './icon-message-one.vue';

const IconMessageOne = Object.assign(_IconMessageOne, {
  install: (app: App) => {
    app.component(_IconMessageOne.name, _IconMessageOne);
  }
});

export default IconMessageOne;