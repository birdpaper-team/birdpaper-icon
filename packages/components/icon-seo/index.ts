import type { App } from 'vue';
import _IconSeo from './icon-seo.vue';

const IconSeo = Object.assign(_IconSeo, {
  install: (app: App) => {
    app.component(_IconSeo.name, _IconSeo);
  }
});

export default IconSeo;