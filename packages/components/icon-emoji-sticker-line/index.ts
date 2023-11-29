import type { App } from 'vue';
import _IconEmojiStickerLine from './icon-emoji-sticker-line.vue';

const IconEmojiStickerLine = Object.assign(_IconEmojiStickerLine, {
  install: (app: App) => {
    app.component(_IconEmojiStickerLine.name, _IconEmojiStickerLine);
  }
});

export default IconEmojiStickerLine;