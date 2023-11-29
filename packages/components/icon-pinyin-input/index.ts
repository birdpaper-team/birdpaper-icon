import type { App } from 'vue';
import _IconPinyinInput from './icon-pinyin-input.vue';

const IconPinyinInput = Object.assign(_IconPinyinInput, {
  install: (app: App) => {
    app.component(_IconPinyinInput.name, _IconPinyinInput);
  }
});

export default IconPinyinInput;