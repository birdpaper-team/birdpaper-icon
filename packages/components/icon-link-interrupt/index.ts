import type { App } from 'vue';
import _IconLinkInterrupt from './icon-link-interrupt.vue';

const IconLinkInterrupt = Object.assign(_IconLinkInterrupt, {
  install: (app: App) => {
    app.component(_IconLinkInterrupt.name, _IconLinkInterrupt);
  }
});

export default IconLinkInterrupt;