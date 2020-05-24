
export const EMPTY_CELL = '--';

export const renderColumnLookup = (renderItem) => (item, record) => item != null ? renderItem(item) : EMPTY_CELL;

export const renderWriter = renderColumnLookup((record) => `${record.name} ${record.surname}`);
export const renderBook = renderColumnLookup((record) => `${record.name}`);
export const renderCustomer = renderColumnLookup((record) => `${record.customer_name}`);