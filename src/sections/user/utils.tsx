import { User } from 'src/_mock/user';

export const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
};

export function emptyRows(page: number, rowsPerPage: number, arrayLength: number) {
  return page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

function descendingComparator(a: User, b: User, orderBy: keyof User) {
  const aValue = a[orderBy];
  const bValue = b[orderBy];

  if (aValue == null) return 1;
  if (bValue == null) return -1;

  if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
    if (aValue === bValue) {
      return 0;
    } if (aValue) {
      return -1;
    } 
      return 1;
    
  } if (typeof aValue === 'string' && typeof bValue === 'string') {
    return bValue.localeCompare(aValue as string, undefined, { sensitivity: 'base' });
  } if (typeof aValue === 'number' && typeof bValue === 'number') {
    return bValue - aValue;
  } 
    return 0;
  
}

export function getComparator(order: string, orderBy: keyof User) {
  return order === 'desc'
    ? (a: User, b: User) => descendingComparator(a, b, orderBy)
    : (a: User, b: User) => -descendingComparator(a, b, orderBy);
}

export function applyFilter({
  inputData,
  comparator,
  filterName,
}: {
  inputData: User[];
  comparator: (a: User, b: User) => number;
  filterName: string;
}) {
  const stabilizedThis = inputData.map((el, index) => ({ el, index }));

  stabilizedThis.sort((a, b) => {
    const order = comparator(a.el, b.el);
    if (order !== 0) return order;
    return a.index - b.index;
  });

  inputData = stabilizedThis.map((el) => el.el);

  if (filterName) {
    inputData = inputData.filter(
      (user) => user.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  return inputData;
}
