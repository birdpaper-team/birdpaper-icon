import type { App } from 'vue';
import _IconParagraph from './icon-paragraph.vue';

const IconParagraph = Object.assign(_IconParagraph, {
  install: (app: App) => {
    app.component(_IconParagraph.name, _IconParagraph);
  }
});

export default IconParagraph;