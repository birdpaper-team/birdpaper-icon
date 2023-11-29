import type { App } from 'vue';
import _IconHtml5Fill from './icon-html5-fill.vue';

const IconHtml5Fill = Object.assign(_IconHtml5Fill, {
  install: (app: App) => {
    app.component(_IconHtml5Fill.name, _IconHtml5Fill);
  }
});

export default IconHtml5Fill;