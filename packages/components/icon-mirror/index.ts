import type { App } from 'vue';
import _IconMirror from './icon-mirror.vue';

const IconMirror = Object.assign(_IconMirror, {
  install: (app: App) => {
    app.component(_IconMirror.name, _IconMirror);
  }
});

export default IconMirror;