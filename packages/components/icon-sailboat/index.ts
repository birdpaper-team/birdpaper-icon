import type { App } from 'vue';
import _IconSailboat from './icon-sailboat.vue';

const IconSailboat = Object.assign(_IconSailboat, {
  install: (app: App) => {
    app.component(_IconSailboat.name, _IconSailboat);
  }
});

export default IconSailboat;