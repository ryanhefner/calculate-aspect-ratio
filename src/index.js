export const gcd = (a, b) => {
  return !b
    ? a
    : gcd(b, a % b);
};

const aspectRatio = (width, height)  => {
  const divisor = gcd(width, height);

  return `${width / divisor}:${height / divisor}`;
};

export default aspectRatio;
