import type { App } from 'vue';
import _IconQingniaoClue from './icon-qingniao-clue.vue';

const IconQingniaoClue = Object.assign(_IconQingniaoClue, {
  install: (app: App) => {
    app.component(_IconQingniaoClue.name, _IconQingniaoClue);
  }
});

export default IconQingniaoClue;