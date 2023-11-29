import type { App } from 'vue';
import _IconPushpin from './icon-pushpin.vue';

const IconPushpin = Object.assign(_IconPushpin, {
  install: (app: App) => {
    app.component(_IconPushpin.name, _IconPushpin);
  }
});

export default IconPushpin;