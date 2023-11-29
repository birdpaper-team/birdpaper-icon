import type { App } from 'vue';
import _IconRipple from './icon-ripple.vue';

const IconRipple = Object.assign(_IconRipple, {
  install: (app: App) => {
    app.component(_IconRipple.name, _IconRipple);
  }
});

export default IconRipple;