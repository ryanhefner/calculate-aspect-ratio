export const gcd = (a, b) => {
  return b
    ? gcd(b, a % b)
    : a;
};

const aspectRatio = (width, height)  => {
  const divisor = gcd(width, height);

  return `${width / divisor}:${height / divisor}`;
};

export default aspectRatio;
