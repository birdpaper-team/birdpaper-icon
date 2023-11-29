import type { App } from 'vue';
import _IconEjectFill from './icon-eject-fill.vue';

const IconEjectFill = Object.assign(_IconEjectFill, {
  install: (app: App) => {
    app.component(_IconEjectFill.name, _IconEjectFill);
  }
});

export default IconEjectFill;