export function TableItem({ id, handleClick, isChecked, item }): JSX.Element {
  return (
    <>
      <tr>
        <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
          <div className="flex items-center">
            <label className="inline-flex">
              <span className="sr-only">Select</span>

              <input
                id={id}
                className="form-checkbox"
                type="checkbox"
                onChange={handleClick}
                checked={isChecked}
              />
            </label>
          </div>
        </td>

        {Object.values(item).map((value: any, index) => (
          <td
            className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
            key={index}
          >
            <div className="font-medium text-slate-800 dark:text-slate-100">
              {value}
            </div>
          </td>
        ))}
      </tr>
    </>
  );
}
