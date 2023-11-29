import type { App } from 'vue';
import _IconReduceUser from './icon-reduce-user.vue';

const IconReduceUser = Object.assign(_IconReduceUser, {
  install: (app: App) => {
    app.component(_IconReduceUser.name, _IconReduceUser);
  }
});

export default IconReduceUser;