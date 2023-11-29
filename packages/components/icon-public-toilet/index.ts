import type { App } from 'vue';
import _IconPublicToilet from './icon-public-toilet.vue';

const IconPublicToilet = Object.assign(_IconPublicToilet, {
  install: (app: App) => {
    app.component(_IconPublicToilet.name, _IconPublicToilet);
  }
});

export default IconPublicToilet;