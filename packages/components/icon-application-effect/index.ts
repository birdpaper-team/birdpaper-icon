import type { App } from 'vue';
import _IconApplicationEffect from './icon-application-effect.vue';

const IconApplicationEffect = Object.assign(_IconApplicationEffect, {
  install: (app: App) => {
    app.component(_IconApplicationEffect.name, _IconApplicationEffect);
  }
});

export default IconApplicationEffect;