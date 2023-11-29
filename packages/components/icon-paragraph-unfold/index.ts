import type { App } from 'vue';
import _IconParagraphUnfold from './icon-paragraph-unfold.vue';

const IconParagraphUnfold = Object.assign(_IconParagraphUnfold, {
  install: (app: App) => {
    app.component(_IconParagraphUnfold.name, _IconParagraphUnfold);
  }
});

export default IconParagraphUnfold;