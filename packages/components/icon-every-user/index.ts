import type { App } from 'vue';
import _IconEveryUser from './icon-every-user.vue';

const IconEveryUser = Object.assign(_IconEveryUser, {
  install: (app: App) => {
    app.component(_IconEveryUser.name, _IconEveryUser);
  }
});

export default IconEveryUser;