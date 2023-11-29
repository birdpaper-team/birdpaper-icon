import type { App } from 'vue';
import _IconCopyright from './icon-copyright.vue';

const IconCopyright = Object.assign(_IconCopyright, {
  install: (app: App) => {
    app.component(_IconCopyright.name, _IconCopyright);
  }
});

export default IconCopyright;