import type { App } from 'vue';
import _IconJump from './icon-jump.vue';

const IconJump = Object.assign(_IconJump, {
  install: (app: App) => {
    app.component(_IconJump.name, _IconJump);
  }
});

export default IconJump;