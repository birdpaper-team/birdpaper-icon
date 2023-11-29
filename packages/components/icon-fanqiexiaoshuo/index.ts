import type { App } from 'vue';
import _IconFanqiexiaoshuo from './icon-fanqiexiaoshuo.vue';

const IconFanqiexiaoshuo = Object.assign(_IconFanqiexiaoshuo, {
  install: (app: App) => {
    app.component(_IconFanqiexiaoshuo.name, _IconFanqiexiaoshuo);
  }
});

export default IconFanqiexiaoshuo;