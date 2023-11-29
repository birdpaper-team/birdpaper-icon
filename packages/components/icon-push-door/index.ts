import type { App } from 'vue';
import _IconPushDoor from './icon-push-door.vue';

const IconPushDoor = Object.assign(_IconPushDoor, {
  install: (app: App) => {
    app.component(_IconPushDoor.name, _IconPushDoor);
  }
});

export default IconPushDoor;