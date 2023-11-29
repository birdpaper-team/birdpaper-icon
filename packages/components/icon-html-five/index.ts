import type { App } from 'vue';
import _IconHtmlFive from './icon-html-five.vue';

const IconHtmlFive = Object.assign(_IconHtmlFive, {
  install: (app: App) => {
    app.component(_IconHtmlFive.name, _IconHtmlFive);
  }
});

export default IconHtmlFive;