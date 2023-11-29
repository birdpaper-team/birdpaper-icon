import type { App } from 'vue';
import _IconCollapseTextInput from './icon-collapse-text-input.vue';

const IconCollapseTextInput = Object.assign(_IconCollapseTextInput, {
  install: (app: App) => {
    app.component(_IconCollapseTextInput.name, _IconCollapseTextInput);
  }
});

export default IconCollapseTextInput;