import type { App } from 'vue';
import _IconRattle from './icon-rattle.vue';

const IconRattle = Object.assign(_IconRattle, {
  install: (app: App) => {
    app.component(_IconRattle.name, _IconRattle);
  }
});

export default IconRattle;