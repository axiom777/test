import { AvatarAttribute, AvatarProps } from './avatar-types';

export function computeAvatarAttributes({ inProfile }: Partial<AvatarProps>) {
  const sizeMod: string = inProfile ? 'avatar__img_big' : 'avatar__img_small';
  const avatarAttributes: AvatarAttribute = {
    class: ['avatar__img', sizeMod],
    alt: 'avatar',
  };
  return avatarAttributes;
}
