import type { App } from 'vue';
import _IconEyes from './icon-eyes.vue';

const IconEyes = Object.assign(_IconEyes, {
  install: (app: App) => {
    app.component(_IconEyes.name, _IconEyes);
  }
});

export default IconEyes;