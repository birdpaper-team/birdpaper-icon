import type { App } from 'vue';
import _IconCornerLeftUp from './icon-corner-left-up.vue';

const IconCornerLeftUp = Object.assign(_IconCornerLeftUp, {
  install: (app: App) => {
    app.component(_IconCornerLeftUp.name, _IconCornerLeftUp);
  }
});

export default IconCornerLeftUp;