import { TableHeaderProps } from "../table/types";

export function TableHeader({
  columns,
  selectAll,
  handleSelectAll,
  enableActions,
}: TableHeaderProps): JSX.Element {
  return (
    <thead className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20 border-t border-b border-slate-200 dark:border-slate-700">
      <tr>
        <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
          <div className="flex items-center">
            <label className="inline-flex">
              <span className="sr-only">Selecionar todos</span>

              <input
                className="form-checkbox"
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </label>
          </div>
        </th>

        {columns.map((column, index) => (
          <th
            className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
            key={index}
          >
            <div className="font-semibold text-left">{column.title}</div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
