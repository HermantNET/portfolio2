import calculator from './calculator';
import gallery from './gallery';
import t3 from './tictactoe';
import device from './device';
import ui from './ui';
import ready from 'doc-ready';

import styles from './styles/styles.scss';
import css_calculator from './styles/calculator.scss';
import css_gallery from './styles/gallery.scss';
import css_t3 from './styles/t3.scss';
import css_device from './styles/device.scss';
import css_ui from './styles/ui.scss';

ready( function() {
  AOS.init({
    offset: 140
  });
});
