import type { App } from 'vue';
import _IconSandwichOne from './icon-sandwich-one.vue';

const IconSandwichOne = Object.assign(_IconSandwichOne, {
  install: (app: App) => {
    app.component(_IconSandwichOne.name, _IconSandwichOne);
  }
});

export default IconSandwichOne;