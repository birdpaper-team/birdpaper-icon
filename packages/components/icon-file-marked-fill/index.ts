import type { App } from 'vue';
import _IconFileMarkedFill from './icon-file-marked-fill.vue';

const IconFileMarkedFill = Object.assign(_IconFileMarkedFill, {
  install: (app: App) => {
    app.component(_IconFileMarkedFill.name, _IconFileMarkedFill);
  }
});

export default IconFileMarkedFill;