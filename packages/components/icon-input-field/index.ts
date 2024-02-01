import type { App } from 'vue';
import _IconInputField from './icon-input-field.vue';

const IconInputField = Object.assign(_IconInputField, {
  install: (app: App) => {
    app.component(_IconInputField.name, _IconInputField);
  }
});

export default IconInputField;