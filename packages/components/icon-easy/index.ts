import type { App } from 'vue';
import _IconEasy from './icon-easy.vue';

const IconEasy = Object.assign(_IconEasy, {
  install: (app: App) => {
    app.component(_IconEasy.name, _IconEasy);
  }
});

export default IconEasy;