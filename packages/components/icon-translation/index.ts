import type { App } from 'vue';
import _IconTranslation from './icon-translation.vue';

const IconTranslation = Object.assign(_IconTranslation, {
  install: (app: App) => {
    app.component(_IconTranslation.name, _IconTranslation);
  }
});

export default IconTranslation;