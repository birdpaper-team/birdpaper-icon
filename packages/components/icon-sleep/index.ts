import type { App } from 'vue';
import _IconSleep from './icon-sleep.vue';

const IconSleep = Object.assign(_IconSleep, {
  install: (app: App) => {
    app.component(_IconSleep.name, _IconSleep);
  }
});

export default IconSleep;