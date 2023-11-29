import type { App } from 'vue';
import _IconMiddleFinger from './icon-middle-finger.vue';

const IconMiddleFinger = Object.assign(_IconMiddleFinger, {
  install: (app: App) => {
    app.component(_IconMiddleFinger.name, _IconMiddleFinger);
  }
});

export default IconMiddleFinger;