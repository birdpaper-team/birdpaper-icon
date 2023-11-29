import type { App } from 'vue';
import _IconParagraphRectangle from './icon-paragraph-rectangle.vue';

const IconParagraphRectangle = Object.assign(_IconParagraphRectangle, {
  install: (app: App) => {
    app.component(_IconParagraphRectangle.name, _IconParagraphRectangle);
  }
});

export default IconParagraphRectangle;