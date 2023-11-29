import type { App } from 'vue';
import _IconAddTextTwo from './icon-add-text-two.vue';

const IconAddTextTwo = Object.assign(_IconAddTextTwo, {
  install: (app: App) => {
    app.component(_IconAddTextTwo.name, _IconAddTextTwo);
  }
});

export default IconAddTextTwo;