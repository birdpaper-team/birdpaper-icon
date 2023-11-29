import type { App } from 'vue';
import _IconInvisionLine from './icon-invision-line.vue';

const IconInvisionLine = Object.assign(_IconInvisionLine, {
  install: (app: App) => {
    app.component(_IconInvisionLine.name, _IconInvisionLine);
  }
});

export default IconInvisionLine;