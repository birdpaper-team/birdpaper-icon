import type { App } from 'vue';
import _IconBlade from './icon-blade.vue';

const IconBlade = Object.assign(_IconBlade, {
  install: (app: App) => {
    app.component(_IconBlade.name, _IconBlade);
  }
});

export default IconBlade;