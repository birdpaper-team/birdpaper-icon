import type { App } from 'vue';
import _IconBtcLine from './icon-btc-line.vue';

const IconBtcLine = Object.assign(_IconBtcLine, {
  install: (app: App) => {
    app.component(_IconBtcLine.name, _IconBtcLine);
  }
});

export default IconBtcLine;