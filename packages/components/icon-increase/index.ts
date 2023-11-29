import type { App } from 'vue';
import _IconIncrease from './icon-increase.vue';

const IconIncrease = Object.assign(_IconIncrease, {
  install: (app: App) => {
    app.component(_IconIncrease.name, _IconIncrease);
  }
});

export default IconIncrease;