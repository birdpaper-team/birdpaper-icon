import type { App } from 'vue';
import _IconCheckIn from './icon-check-in.vue';

const IconCheckIn = Object.assign(_IconCheckIn, {
  install: (app: App) => {
    app.component(_IconCheckIn.name, _IconCheckIn);
  }
});

export default IconCheckIn;