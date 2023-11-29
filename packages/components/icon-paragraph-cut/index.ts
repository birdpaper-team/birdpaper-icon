import type { App } from 'vue';
import _IconParagraphCut from './icon-paragraph-cut.vue';

const IconParagraphCut = Object.assign(_IconParagraphCut, {
  install: (app: App) => {
    app.component(_IconParagraphCut.name, _IconParagraphCut);
  }
});

export default IconParagraphCut;