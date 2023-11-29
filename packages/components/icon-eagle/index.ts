import type { App } from 'vue';
import _IconEagle from './icon-eagle.vue';

const IconEagle = Object.assign(_IconEagle, {
  install: (app: App) => {
    app.component(_IconEagle.name, _IconEagle);
  }
});

export default IconEagle;