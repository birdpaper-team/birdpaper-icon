import type { App } from 'vue';
import _IconParagraphRound from './icon-paragraph-round.vue';

const IconParagraphRound = Object.assign(_IconParagraphRound, {
  install: (app: App) => {
    app.component(_IconParagraphRound.name, _IconParagraphRound);
  }
});

export default IconParagraphRound;