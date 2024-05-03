export interface TabViewOptions {
  options: TabViewProps[];
  selected: string;
  onChange(value: string): void;
}

export interface TabViewProps {
  label: string;
  value: string;
  content: JSX.Element;
}
