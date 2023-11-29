import type { App } from 'vue';
import _IconLuminous from './icon-luminous.vue';

const IconLuminous = Object.assign(_IconLuminous, {
  install: (app: App) => {
    app.component(_IconLuminous.name, _IconLuminous);
  }
});

export default IconLuminous;