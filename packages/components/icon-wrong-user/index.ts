import type { App } from 'vue';
import _IconWrongUser from './icon-wrong-user.vue';

const IconWrongUser = Object.assign(_IconWrongUser, {
  install: (app: App) => {
    app.component(_IconWrongUser.name, _IconWrongUser);
  }
});

export default IconWrongUser;