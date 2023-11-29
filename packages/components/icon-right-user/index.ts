import type { App } from 'vue';
import _IconRightUser from './icon-right-user.vue';

const IconRightUser = Object.assign(_IconRightUser, {
  install: (app: App) => {
    app.component(_IconRightUser.name, _IconRightUser);
  }
});

export default IconRightUser;