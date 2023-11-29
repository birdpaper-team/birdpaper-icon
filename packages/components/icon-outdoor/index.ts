import type { App } from 'vue';
import _IconOutdoor from './icon-outdoor.vue';

const IconOutdoor = Object.assign(_IconOutdoor, {
  install: (app: App) => {
    app.component(_IconOutdoor.name, _IconOutdoor);
  }
});

export default IconOutdoor;