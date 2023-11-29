import type { App } from 'vue';
import _IconSecurityStall from './icon-security-stall.vue';

const IconSecurityStall = Object.assign(_IconSecurityStall, {
  install: (app: App) => {
    app.component(_IconSecurityStall.name, _IconSecurityStall);
  }
});

export default IconSecurityStall;