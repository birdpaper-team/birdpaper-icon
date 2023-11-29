import type { App } from 'vue';
import _IconEmailSuccessfully from './icon-email-successfully.vue';

const IconEmailSuccessfully = Object.assign(_IconEmailSuccessfully, {
  install: (app: App) => {
    app.component(_IconEmailSuccessfully.name, _IconEmailSuccessfully);
  }
});

export default IconEmailSuccessfully;