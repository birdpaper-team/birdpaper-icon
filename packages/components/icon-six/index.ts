import type { App } from 'vue';
import _IconSix from './icon-six.vue';

const IconSix = Object.assign(_IconSix, {
  install: (app: App) => {
    app.component(_IconSix.name, _IconSix);
  }
});

export default IconSix;