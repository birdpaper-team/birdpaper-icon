import type { App } from 'vue';
import _IconApple from './icon-apple.vue';

const IconApple = Object.assign(_IconApple, {
  install: (app: App) => {
    app.component(_IconApple.name, _IconApple);
  }
});

export default IconApple;