import type { App } from 'vue';
import _IconTime from './icon-time.vue';

const IconTime = Object.assign(_IconTime, {
  install: (app: App) => {
    app.component(_IconTime.name, _IconTime);
  }
});

export default IconTime;