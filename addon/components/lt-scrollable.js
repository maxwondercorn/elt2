import classic from 'ember-classic-decorator';
import { tagName } from '@ember-decorators/component';
import Component from '@ember/component';

@classic
@tagName('')
export default class LtScrollableComponent extends Component {
  vertical = true;
  horizontal = false;
}
