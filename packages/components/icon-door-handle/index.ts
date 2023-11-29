import type { App } from 'vue';
import _IconDoorHandle from './icon-door-handle.vue';

const IconDoorHandle = Object.assign(_IconDoorHandle, {
  install: (app: App) => {
    app.component(_IconDoorHandle.name, _IconDoorHandle);
  }
});

export default IconDoorHandle;