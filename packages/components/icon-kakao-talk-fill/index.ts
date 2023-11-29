import type { App } from 'vue';
import _IconKakaoTalkFill from './icon-kakao-talk-fill.vue';

const IconKakaoTalkFill = Object.assign(_IconKakaoTalkFill, {
  install: (app: App) => {
    app.component(_IconKakaoTalkFill.name, _IconKakaoTalkFill);
  }
});

export default IconKakaoTalkFill;