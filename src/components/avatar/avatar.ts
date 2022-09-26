import './avatar.scss';
import { Block } from '../../utils/core/Block';
import { computeAvatarAttributes } from './avatar-helpers';
import { AvatarProps } from './avatar-types';
import { avatarTemplate } from './avatar.template';

export class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super('div', props);
  }

  render() {
    const { img, name, inProfile, href } = this.props;
    const avatarAttributes = computeAvatarAttributes({ inProfile, img });

    return this.compile(avatarTemplate, {
      name,
      avatarAttributes: { ...avatarAttributes, src: img },
      href,
    });
  }
}
