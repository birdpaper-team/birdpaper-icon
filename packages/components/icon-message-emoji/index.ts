import type { App } from 'vue';
import _IconMessageEmoji from './icon-message-emoji.vue';

const IconMessageEmoji = Object.assign(_IconMessageEmoji, {
  install: (app: App) => {
    app.component(_IconMessageEmoji.name, _IconMessageEmoji);
  }
});

export default IconMessageEmoji;