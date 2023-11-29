import type { App } from 'vue';
import _IconReceiver from './icon-receiver.vue';

const IconReceiver = Object.assign(_IconReceiver, {
  install: (app: App) => {
    app.component(_IconReceiver.name, _IconReceiver);
  }
});

export default IconReceiver;