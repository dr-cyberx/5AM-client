export const capitalizeText = (str: string): string => {
  const x = str.replace('login_', '').replace('_', ' ').split(' ');
  if (x.length === 0) {
    return x[0];
  } else {
    return x
      .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(' ');
  }
};
