import type { App } from 'vue';
import _IconUnlockOne from './icon-unlock-one.vue';

const IconUnlockOne = Object.assign(_IconUnlockOne, {
  install: (app: App) => {
    app.component(_IconUnlockOne.name, _IconUnlockOne);
  }
});

export default IconUnlockOne;