import type { App } from 'vue';
import _IconPhoneLockLine from './icon-phone-lock-line.vue';

const IconPhoneLockLine = Object.assign(_IconPhoneLockLine, {
  install: (app: App) => {
    app.component(_IconPhoneLockLine.name, _IconPhoneLockLine);
  }
});

export default IconPhoneLockLine;