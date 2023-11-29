import type { App } from 'vue';
import _IconFileWord from './icon-file-word.vue';

const IconFileWord = Object.assign(_IconFileWord, {
  install: (app: App) => {
    app.component(_IconFileWord.name, _IconFileWord);
  }
});

export default IconFileWord;