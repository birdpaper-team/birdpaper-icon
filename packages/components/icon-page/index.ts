import type { App } from 'vue';
import _IconPage from './icon-page.vue';

const IconPage = Object.assign(_IconPage, {
  install: (app: App) => {
    app.component(_IconPage.name, _IconPage);
  }
});

export default IconPage;