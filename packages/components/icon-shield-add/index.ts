import type { App } from 'vue';
import _IconShieldAdd from './icon-shield-add.vue';

const IconShieldAdd = Object.assign(_IconShieldAdd, {
  install: (app: App) => {
    app.component(_IconShieldAdd.name, _IconShieldAdd);
  }
});

export default IconShieldAdd;