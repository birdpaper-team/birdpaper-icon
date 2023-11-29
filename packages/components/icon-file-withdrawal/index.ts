import type { App } from 'vue';
import _IconFileWithdrawal from './icon-file-withdrawal.vue';

const IconFileWithdrawal = Object.assign(_IconFileWithdrawal, {
  install: (app: App) => {
    app.component(_IconFileWithdrawal.name, _IconFileWithdrawal);
  }
});

export default IconFileWithdrawal;