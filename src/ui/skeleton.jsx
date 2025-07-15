export const RowSkeleton = () => {
  return (
    <tr className="bg-white border-b border-gray-100 hover:bg-gray-50 transition-all duration-300 ease-in-out last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-md [&:first-child>td:last-child]:rounded-tr-md [&:last-child>td:first-child]:rounded-bl-md [&:last-child>td:last-child]:rounded-br-md">
      <td className="px-4 py-3 whitespace-nowrap animate-pulse">
        <p className="bg-gray-300 h-3"></p>
      </td>
      <td className="px-4 py-3 whitespace-nowrap animate-pulse">
        <div className="bg-gray-300 h-3"></div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap animate-pulse">
        <div className="bg-gray-300 rounded-md h-16 w-auto max-w-25"></div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap animate-pulse">
        <div className="bg-gray-300 h-3"></div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap animate-pulse">
        <div className="bg-gray-300 h-3"></div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap animate-pulse">
        <div className="bg-gray-300 h-3"></div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap animate-pulse">
        <div className="bg-gray-300 h-3 rounded-full px-2 py-1"></div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap animate-pulse">
        <div className="flex gap-3">
          <div className="bg-gray-300 h-10 w-30 md:w-65 px-4 rounded-md"></div>
        </div>
      </td>
    </tr>
  );
};

const TableSkeleton = () => {
  return (
    <div className="w-full p-2 bg-gray-50 rounded-lg shadow-md animate-fadeIn">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        <div className="flex md:w-100">
          <div className="bg-gray-300 p-2.5 w-full h-10 rounded-sm"></div>
        </div>
        <div className="flex gap-4 justify-end items-center">
          <div className="flex items-center gap-1">
            <div className="bg-gray-300 w-20 h-4"></div>
            <div className="bg-gray-300 p-2.5 w-30 h-10 rounded-sm"></div>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-gray-300 w-15 h-4"></div>
            <div className="bg-gray-300 p-2.5 w-15 h-10 rounded-sm"></div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-800">
          <thead className="bg-gray-50 uppercase font-semibold">
            <tr>
              <th className="px-4 py-3 rounded">
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center">
                    <div>ID</div>
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 rounded">
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center">
                    <div>NAME</div>
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 rounded">
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center">
                    <div>IMAGE</div>
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 rounded">
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center">
                    <div>CATEGORY</div>
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 rounded">
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center">
                    <div>PRICE</div>
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 rounded">
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center">
                    <div>STOCK</div>
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 rounded">
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center">
                    <div>STATUS</div>
                  </div>
                </div>
              </th>
              <th className="px-4 py-3 rounded">
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center">
                    <div>ACTIONS</div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }, () => 0).map((_, i) => (
              <RowSkeleton key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CardSkeleton = () => {
  return (
    <div className={`rounded-xl bg-gray-50 p-2 animate-pulse`}>
      <div className="flex p-4">
        <div className="h-6 w-6 bg-gray-200 rounded-sm"></div>
        <div className="ml-2 text-sm font-medium w-20 h-6 bg-gray-200 rounded-sm"></div>
      </div>
      <div className="truncate rounded-xl bg-white px-4 py-8 flex justify-center text-2xl">
        <div className="h-8 w-15 bg-gray-200 rounded-sm"></div>
      </div>
    </div>
  );
};

const CardGridSkeleton = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 my-6">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};

export { CardGridSkeleton, TableSkeleton };
