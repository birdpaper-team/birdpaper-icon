import type { App } from 'vue';
import _IconOpenAnAccount from './icon-open-an-account.vue';

const IconOpenAnAccount = Object.assign(_IconOpenAnAccount, {
  install: (app: App) => {
    app.component(_IconOpenAnAccount.name, _IconOpenAnAccount);
  }
});

export default IconOpenAnAccount;