import type { App } from 'vue';
import _IconUserReceivedFill from './icon-user-received-fill.vue';

const IconUserReceivedFill = Object.assign(_IconUserReceivedFill, {
  install: (app: App) => {
    app.component(_IconUserReceivedFill.name, _IconUserReceivedFill);
  }
});

export default IconUserReceivedFill;