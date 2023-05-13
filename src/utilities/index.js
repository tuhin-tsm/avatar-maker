export function getAvatarFromArray(avatars, name) {
  for (var i = 0; i < avatars.length; i++) {
    if (avatars[i].name === name) {
      return avatars[i];
    }
  }

  return '';
}
