import type { App } from 'vue';
import _IconLogin from './icon-login.vue';

const IconLogin = Object.assign(_IconLogin, {
  install: (app: App) => {
    app.component(_IconLogin.name, _IconLogin);
  }
});

export default IconLogin;