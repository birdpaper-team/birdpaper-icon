import type { App } from 'vue';
import _IconKakaoTalkLine from './icon-kakao-talk-line.vue';

const IconKakaoTalkLine = Object.assign(_IconKakaoTalkLine, {
  install: (app: App) => {
    app.component(_IconKakaoTalkLine.name, _IconKakaoTalkLine);
  }
});

export default IconKakaoTalkLine;