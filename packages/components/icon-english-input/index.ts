import type { App } from 'vue';
import _IconEnglishInput from './icon-english-input.vue';

const IconEnglishInput = Object.assign(_IconEnglishInput, {
  install: (app: App) => {
    app.component(_IconEnglishInput.name, _IconEnglishInput);
  }
});

export default IconEnglishInput;