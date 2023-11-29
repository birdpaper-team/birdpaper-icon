import type { App } from 'vue';
import _IconMailOpen from './icon-mail-open.vue';

const IconMailOpen = Object.assign(_IconMailOpen, {
  install: (app: App) => {
    app.component(_IconMailOpen.name, _IconMailOpen);
  }
});

export default IconMailOpen;