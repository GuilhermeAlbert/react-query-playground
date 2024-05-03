import { useEffect, useState } from "react";
import { TableHeader } from "../table-header";
import { TableItem } from "../table-item";
import { TableProps } from "./types";

export function Table({
  title,
  columns,
  items,
  itemsLength,
  enableActions,
}: TableProps): JSX.Element {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [isCheck, setIsCheck] = useState<any[]>([]);
  const [list, setList] = useState<any[]>([]);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  useEffect(() => {
    setList(items);
  }, [items]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(list.map((li) => li.id));

    if (selectAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;

    setSelectAll(false);
    setIsCheck([...isCheck, id]);

    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    handleSelectedItems(isCheck);
  }, [isCheck]);

  return (
    <>
      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 relative">
        {title && (
          <header className="px-5 py-4">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              {title}{" "}
              <span className="text-slate-400 dark:text-slate-500 font-medium">
                {itemsLength}
              </span>
            </h2>
          </header>
        )}

        <div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full dark:text-slate-300">
              <TableHeader
                columns={columns}
                selectAll={selectAll}
                handleSelectAll={handleSelectAll}
                enableActions={enableActions}
              />

              <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
                {list.map((item) => {
                  return (
                    <TableItem
                      key={item.id}
                      id={item.id}
                      item={item}
                      handleClick={handleClick}
                      isChecked={isCheck.includes(item.id)}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
