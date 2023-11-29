import type { App } from 'vue';
import _IconMirrorOne from './icon-mirror-one.vue';

const IconMirrorOne = Object.assign(_IconMirrorOne, {
  install: (app: App) => {
    app.component(_IconMirrorOne.name, _IconMirrorOne);
  }
});

export default IconMirrorOne;