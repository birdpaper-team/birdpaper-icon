import type { App } from 'vue';
import _IconMessageFill from './icon-message-fill.vue';

const IconMessageFill = Object.assign(_IconMessageFill, {
  install: (app: App) => {
    app.component(_IconMessageFill.name, _IconMessageFill);
  }
});

export default IconMessageFill;