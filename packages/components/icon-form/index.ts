import type { App } from 'vue';
import _IconForm from './icon-form.vue';

const IconForm = Object.assign(_IconForm, {
  install: (app: App) => {
    app.component(_IconForm.name, _IconForm);
  }
});

export default IconForm;