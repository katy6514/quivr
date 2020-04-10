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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}
