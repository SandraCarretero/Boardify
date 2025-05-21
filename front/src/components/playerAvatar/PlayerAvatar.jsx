import { AvatarImage, AvatarWrapper } from "./playerAvatar.styled";

const PlayerAvatar = ({ avatar, name, index, isLarge, isProfile }) => {
  const getInitials = fullName => {
    const names = fullName.trim().split(' ');
    if (names.length === 1) return names[0].charAt(0);
    return names[0].charAt(0) + names[1].charAt(0);
  };

  return (
    <AvatarWrapper $index={index} $isLarge={isLarge} $isProfile={isProfile}>
      {avatar ? <AvatarImage src={avatar} alt={name} /> : getInitials(name)}
    </AvatarWrapper>
  );
};

export default PlayerAvatar;
