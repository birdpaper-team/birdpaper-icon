import type { App } from 'vue';
import _IconMirrorTwo from './icon-mirror-two.vue';

const IconMirrorTwo = Object.assign(_IconMirrorTwo, {
  install: (app: App) => {
    app.component(_IconMirrorTwo.name, _IconMirrorTwo);
  }
});

export default IconMirrorTwo;