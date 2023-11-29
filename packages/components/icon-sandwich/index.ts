import type { App } from 'vue';
import _IconSandwich from './icon-sandwich.vue';

const IconSandwich = Object.assign(_IconSandwich, {
  install: (app: App) => {
    app.component(_IconSandwich.name, _IconSandwich);
  }
});

export default IconSandwich;