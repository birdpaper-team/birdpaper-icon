import type { App } from 'vue';
import _IconParagraphTriangle from './icon-paragraph-triangle.vue';

const IconParagraphTriangle = Object.assign(_IconParagraphTriangle, {
  install: (app: App) => {
    app.component(_IconParagraphTriangle.name, _IconParagraphTriangle);
  }
});

export default IconParagraphTriangle;