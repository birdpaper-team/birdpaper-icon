import type { App } from 'vue';
import _IconHanfuChineseStyle from './icon-hanfu-chinese-style.vue';

const IconHanfuChineseStyle = Object.assign(_IconHanfuChineseStyle, {
  install: (app: App) => {
    app.component(_IconHanfuChineseStyle.name, _IconHanfuChineseStyle);
  }
});

export default IconHanfuChineseStyle;