import type { App } from 'vue';
import _IconAddUser from './icon-add-user.vue';

const IconAddUser = Object.assign(_IconAddUser, {
  install: (app: App) => {
    app.component(_IconAddUser.name, _IconAddUser);
  }
});

export default IconAddUser;