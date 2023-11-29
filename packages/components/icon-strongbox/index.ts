import type { App } from 'vue';
import _IconStrongbox from './icon-strongbox.vue';

const IconStrongbox = Object.assign(_IconStrongbox, {
  install: (app: App) => {
    app.component(_IconStrongbox.name, _IconStrongbox);
  }
});

export default IconStrongbox;