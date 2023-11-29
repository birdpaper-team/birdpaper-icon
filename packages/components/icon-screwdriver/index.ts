import type { App } from 'vue';
import _IconScrewdriver from './icon-screwdriver.vue';

const IconScrewdriver = Object.assign(_IconScrewdriver, {
  install: (app: App) => {
    app.component(_IconScrewdriver.name, _IconScrewdriver);
  }
});

export default IconScrewdriver;