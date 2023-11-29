import type { App } from 'vue';
import _IconFileWithdrawalOne from './icon-file-withdrawal-one.vue';

const IconFileWithdrawalOne = Object.assign(_IconFileWithdrawalOne, {
  install: (app: App) => {
    app.component(_IconFileWithdrawalOne.name, _IconFileWithdrawalOne);
  }
});

export default IconFileWithdrawalOne;