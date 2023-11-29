import type { App } from 'vue';
import _IconOpenDoor from './icon-open-door.vue';

const IconOpenDoor = Object.assign(_IconOpenDoor, {
  install: (app: App) => {
    app.component(_IconOpenDoor.name, _IconOpenDoor);
  }
});

export default IconOpenDoor;