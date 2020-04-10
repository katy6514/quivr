export const headCells = [
  { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
  { id: 'size', numeric: false, disablePadding: false, label: 'Size' },
  { id: 'length', numeric: true, disablePadding: false, label: 'Length' },
  { id: 'material', numeric: false, disablePadding: false, label: 'Material' },
];

function createData(type, size, length, material) {
  return { type, size, length, material };
}

export const rows = [
  createData('Circularish', 'US10', 6.0, 'metal'),
  createData('Circular', 'US9', 9.0, 'bamboo'),
  createData('DBL Pointed', 'US12', 16.0, 'bamboo'),
];
