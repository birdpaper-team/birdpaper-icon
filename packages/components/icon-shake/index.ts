import type { App } from 'vue';
import _IconShake from './icon-shake.vue';

const IconShake = Object.assign(_IconShake, {
  install: (app: App) => {
    app.component(_IconShake.name, _IconShake);
  }
});

export default IconShake;