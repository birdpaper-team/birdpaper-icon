import type { App } from 'vue';
import _IconUserReceived2Line from './icon-user-received-2-line.vue';

const IconUserReceived2Line = Object.assign(_IconUserReceived2Line, {
  install: (app: App) => {
    app.component(_IconUserReceived2Line.name, _IconUserReceived2Line);
  }
});

export default IconUserReceived2Line;