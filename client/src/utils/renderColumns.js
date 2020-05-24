
export const EMPTY_CELL = '--';

export const renderColumnLookup = (renderItem) => (item, record) => item != null ? renderItem(item) : EMPTY_CELL;

export const renderWriter = (record) => `${record.name} ${record.surname}`;
export const renderBook = (record) => `${record.name}`;
export const renderCustomer = (record) => `${record.customer_name}`;

export const renderColumnWriter = renderColumnLookup((record) => `${record.name} ${record.surname}`);
export const renderColumnBook = renderColumnLookup((record) => `${record.name}`);
export const renderColumnCustomer = renderColumnLookup((record) => `${record.customer_name}`);