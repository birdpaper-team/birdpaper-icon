import type { App } from 'vue';
import _IconWrite from './icon-write.vue';

const IconWrite = Object.assign(_IconWrite, {
  install: (app: App) => {
    app.component(_IconWrite.name, _IconWrite);
  }
});

export default IconWrite;