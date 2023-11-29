import type { App } from 'vue';
import _IconDataUser from './icon-data-user.vue';

const IconDataUser = Object.assign(_IconDataUser, {
  install: (app: App) => {
    app.component(_IconDataUser.name, _IconDataUser);
  }
});

export default IconDataUser;