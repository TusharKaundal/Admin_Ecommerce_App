const RowSkeleton = ({ columnOrder }) => {
  return (
    <tr className="animate-pulse">
      {columnOrder.map((col) => (
        <td
          key={col.id}
          className="px-4 py-3 border border-gray-300 whitespace-nowrap bg-white h-8 rounded"
        />
      ))}
    </tr>
  );
};

export { RowSkeleton };
