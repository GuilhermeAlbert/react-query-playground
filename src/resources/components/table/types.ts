export interface TableProps {
  title?: string;
  columns: TableColumn[];
  items: any[];
  itemsLength: number;
  enableActions?: boolean;
}

export interface TableColumn {
  title: string;
}

export interface TableHeaderProps {
  columns: TableColumn[];
  selectAll: boolean;
  handleSelectAll: () => void;
  enableActions?: boolean;
}
