import type { App } from 'vue';
import _IconMoneyCnyBoxLine from './icon-money-cny-box-line.vue';

const IconMoneyCnyBoxLine = Object.assign(_IconMoneyCnyBoxLine, {
  install: (app: App) => {
    app.component(_IconMoneyCnyBoxLine.name, _IconMoneyCnyBoxLine);
  }
});

export default IconMoneyCnyBoxLine;