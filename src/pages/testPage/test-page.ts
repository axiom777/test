import { Avatar } from '../../components/avatar/avatar';
import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { avatarProps } from './data';

export class TestPage extends Block<{}> {
  constructor(props: object) {
    super('div', props);
  }

  render() {
    return this.compile('div', {});
  }
}

const avatar = new Avatar(avatarProps);
renderDOM('#app', new TestPage({ avatar }));
