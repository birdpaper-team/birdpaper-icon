import type { App } from 'vue';
import _IconBaiduLine from './icon-baidu-line.vue';

const IconBaiduLine = Object.assign(_IconBaiduLine, {
  install: (app: App) => {
    app.component(_IconBaiduLine.name, _IconBaiduLine);
  }
});

export default IconBaiduLine;