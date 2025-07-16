import React from "react";

export default function DropDown({
  title,
  selected,
  onChange,
  data,
  defaultOption = true,
}) {
  console.log(title, selected, data);
  return (
    <div className="max-w-md flex items-center gap-1">
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700 w-fit capitalize"
      >
        {title}
      </label>
      <select
        id={title}
        name={title}
        value={selected}
        onChange={onChange}
        className="block grow rounded-md border border-gray-300 bg-white p-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        {defaultOption && <option value="">All</option>}
        {data.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
