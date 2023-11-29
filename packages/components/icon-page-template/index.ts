import type { App } from 'vue';
import _IconPageTemplate from './icon-page-template.vue';

const IconPageTemplate = Object.assign(_IconPageTemplate, {
  install: (app: App) => {
    app.component(_IconPageTemplate.name, _IconPageTemplate);
  }
});

export default IconPageTemplate;