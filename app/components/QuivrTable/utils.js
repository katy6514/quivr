function createData(type, size, length, material) {
  return { type, size, length, material };
}

export const needles = [
  createData('Circular', 'US10', 6.0, 'metal'),
  createData('Circular', 'US9', 9.0, 'bamboo'),
  createData('DBL Pointed', 'US12', 16.0, 'bamboo'),
];
