import type { App } from 'vue';
import _IconPaperMoneyTwo from './icon-paper-money-two.vue';

const IconPaperMoneyTwo = Object.assign(_IconPaperMoneyTwo, {
  install: (app: App) => {
    app.component(_IconPaperMoneyTwo.name, _IconPaperMoneyTwo);
  }
});

export default IconPaperMoneyTwo;