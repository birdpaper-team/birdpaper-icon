import type { App } from 'vue';
import _IconOpen from './icon-open.vue';

const IconOpen = Object.assign(_IconOpen, {
  install: (app: App) => {
    app.component(_IconOpen.name, _IconOpen);
  }
});

export default IconOpen;