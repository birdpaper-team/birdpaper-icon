import type { App } from 'vue';
import _IconShovelOne from './icon-shovel-one.vue';

const IconShovelOne = Object.assign(_IconShovelOne, {
  install: (app: App) => {
    app.component(_IconShovelOne.name, _IconShovelOne);
  }
});

export default IconShovelOne;