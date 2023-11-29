import type { App } from 'vue';
import _IconPineapple from './icon-pineapple.vue';

const IconPineapple = Object.assign(_IconPineapple, {
  install: (app: App) => {
    app.component(_IconPineapple.name, _IconPineapple);
  }
});

export default IconPineapple;