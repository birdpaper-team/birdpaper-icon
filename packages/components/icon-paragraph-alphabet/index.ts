import type { App } from 'vue';
import _IconParagraphAlphabet from './icon-paragraph-alphabet.vue';

const IconParagraphAlphabet = Object.assign(_IconParagraphAlphabet, {
  install: (app: App) => {
    app.component(_IconParagraphAlphabet.name, _IconParagraphAlphabet);
  }
});

export default IconParagraphAlphabet;