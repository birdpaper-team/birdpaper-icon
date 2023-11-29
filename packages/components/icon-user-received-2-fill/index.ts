import type { App } from 'vue';
import _IconUserReceived2Fill from './icon-user-received-2-fill.vue';

const IconUserReceived2Fill = Object.assign(_IconUserReceived2Fill, {
  install: (app: App) => {
    app.component(_IconUserReceived2Fill.name, _IconUserReceived2Fill);
  }
});

export default IconUserReceived2Fill;