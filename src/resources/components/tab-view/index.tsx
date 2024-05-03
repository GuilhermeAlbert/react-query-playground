import { TabViewOptions } from "./types";

export function TabView({
  options,
  selected,
  onChange,
}: TabViewOptions): JSX.Element {
  const selectedOption = options.find((option) => option.value === selected);

  return (
    <>
      <div className="relative mb-4">
        <div
          className="absolute bottom-0 w-full h-px bg-slate-200 dark:bg-slate-700"
          aria-hidden="true"
        ></div>

        {options.length > 0 && (
          <>
            <ul className="relative text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
              {options.map((option, index: number) => (
                <li
                  className="mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8"
                  key={index}
                >
                  <button
                    className={`block pb-3 ${
                      option.value === selected
                        ? "text-[#50C878] whitespace-nowrap border-b-2 border-[#50C878]"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 whitespace-nowrap"
                    }`}
                    onClick={(event) => {
                      event.stopPropagation();

                      onChange(option.value);
                    }}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div>
        {selectedOption && (
          <div className="flex flex-col xl:flex-row xl:space-x-16">
            <div className="flex-1 space-y-5 xl:mb-0">
              {selectedOption.content}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
