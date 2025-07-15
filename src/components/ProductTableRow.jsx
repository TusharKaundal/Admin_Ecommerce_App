import React from "react";
import {
  AddToCartButton,
  DeleteButton,
  UpdateButton,
  ViewButton,
} from "../ui/actionButton";
import { useCart } from "../contextApi/CartContext";

const ProductTableRow = ({
  coldata,
  index,
  columnOrder,
  handleModal,
  sortConfig,
  productsLength,
  currentPage,
  itemsPerPage,
}) => {
  const { addToCart } = useCart();

  const indexing = (index) => {
    if (sortConfig.key === "id") {
      if (sortConfig.direction === "asc") {
        return itemsPerPage * (currentPage - 1) + index + 1;
      }
      if (sortConfig.direction === "desc") {
        return productsLength - (currentPage - 1) * itemsPerPage - index;
      }
    }
    return itemsPerPage * (currentPage - 1) + index + 1;
  };

  return (
    <>
      <tr
        key={coldata.id}
        className="bg-white border-b border-gray-100 animate-slideDown hover:bg-gray-50 transition-all duration-300 ease-in-out last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-md [&:first-child>td:last-child]:rounded-tr-md [&:last-child>td:first-child]:rounded-bl-md [&:last-child>td:last-child]:rounded-br-md"
      >
        {columnOrder.map((column) => (
          <td key={column.id} className="px-4 py-3 whitespace-nowrap">
            {column.label === "Id" && <p>{indexing(index)}</p>}
            {column.label === "Image" && (
              <img
                src={coldata[column.id]}
                alt={coldata.name}
                className="rounded-md h-16 w-auto object-cover"
              />
            )}
            {column.label === "Status" && (
              <span
                className={`inline-flex items-center rounded-full px-2 py-1 text-xs text-white ${
                  coldata.status ? "bg-green-400" : "bg-red-400"
                }
                  `}
              >
                {coldata.status ? "In Stock" : "Out of stock"}
              </span>
            )}
            {column.label === "Actions" && (
              <div className="flex gap-3">
                <UpdateButton
                  handleClick={() => handleModal("update", coldata.id)}
                />
                <DeleteButton
                  handleClick={() => handleModal("delete", coldata.id)}
                />
                <ViewButton
                  handleClick={() => handleModal("view", coldata.id)}
                />
                <AddToCartButton
                  disabled={coldata.status ? false : true}
                  handleClick={() => addToCart(coldata)}
                />
              </div>
            )}
            {column.label !== "Id" &&
              column.label !== "Image" &&
              column.label !== "Status" && (
                <p>
                  {column.label === "Price" && "₹"} {coldata[column.id]}
                </p>
              )}
          </td>
        ))}
      </tr>
    </>
  );
};

export default ProductTableRow;
