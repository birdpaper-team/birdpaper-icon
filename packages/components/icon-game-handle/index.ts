import type { App } from 'vue';
import _IconGameHandle from './icon-game-handle.vue';

const IconGameHandle = Object.assign(_IconGameHandle, {
  install: (app: App) => {
    app.component(_IconGameHandle.name, _IconGameHandle);
  }
});

export default IconGameHandle;