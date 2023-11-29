import type { App } from 'vue';
import _IconGobletOne from './icon-goblet-one.vue';

const IconGobletOne = Object.assign(_IconGobletOne, {
  install: (app: App) => {
    app.component(_IconGobletOne.name, _IconGobletOne);
  }
});

export default IconGobletOne;