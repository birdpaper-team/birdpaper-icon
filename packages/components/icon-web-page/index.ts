import type { App } from 'vue';
import _IconWebPage from './icon-web-page.vue';

const IconWebPage = Object.assign(_IconWebPage, {
  install: (app: App) => {
    app.component(_IconWebPage.name, _IconWebPage);
  }
});

export default IconWebPage;