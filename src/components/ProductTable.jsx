import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import dragIcon from "../assets/dragIcon.svg";
const ProductTableRow = lazy(() => import("./ProductTableRow"));
import { useProductContext } from "../contextApi/ProductContext";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import { paginateData } from "../utils/pagination";
import { categories } from "../utils/constants";
import DropDown from "../ui/DropDown";
import upIcon from "../assets/upArrow.svg";
import downIcon from "../assets/downArrow.svg";
import {
  filterByCategory,
  filterByStockStatus,
  getSortedData,
} from "../utils/filterSort";
import DeleteProductModal from "./DeleteProductModal";
import ViewProductModal from "./ViewProductModal";
import EditProductModal from "./EditProductModal";
import { searchProducts } from "../utils/searching";
import { RowSkeleton } from "../ui/skeleton";

const initialColumns = [
  { id: "id", label: "Id" },
  { id: "name", label: "Name" },
  { id: "image", label: "Image" },
  { id: "category", label: "Category" },
  { id: "price", label: "Price" },
  { id: "stock", label: "Stock" },
  { id: "status", label: "Status" },
  { id: "actions", label: "Actions" },
];

const stockStatus = ["In", "Out"];

export default function ProductTable() {
  const [columnOrder, setColumnOrder] = useState(initialColumns);
  const { products, searchText } = useProductContext();
  const [columnData, setColumnData] = useState([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(products.length / 10));
  const columnDragIndex = useRef("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStockStatus, setSelectedStockStatus] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [actionData, setActionData] = useState({ action: "", index: "" });
  const [totalFilteredLength, setTotalFilteredLength] = useState(
    products.length
  );
  const [modelOpen, setModalOpen] = useState();

  const updateCurrentPage = useCallback(
    (newPage) => setCurrentPage(newPage),
    []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setSelectedCategory(value);
    }

    if (name === "stock status") {
      setSelectedStockStatus(value);
    }
  };

  const onDropColum = (e, idx) => {
    e.preventDefault();
    const draggedIndex = columnDragIndex.current;
    const targetIndex = idx;

    if (draggedIndex === targetIndex) return;

    const newOrder = [...columnOrder];
    const [moved] = newOrder.splice(draggedIndex, 1);
    newOrder.splice(targetIndex, 0, moved);
    setColumnOrder(newOrder);
  };
  const handleSort = (columnKey) => {
    setSortConfig((prev) => {
      if (prev.key === columnKey) {
        return {
          key: columnKey,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      } else {
        return {
          key: columnKey,
          direction: "asc",
        };
      }
    });
  };

  function handleModal(name, id) {
    setActionData({ action: name, index: id });
    setModalOpen(true);
  }

  useEffect(() => {
    let filtered = [...products];
    if (searchText) {
      filtered = searchProducts(filtered, searchText);
    }
    if (selectedCategory) {
      filtered = filterByCategory(filtered, selectedCategory);
    }
    if (selectedStockStatus) {
      filtered = filterByStockStatus(filtered, selectedStockStatus);
    }
    if (sortConfig.key && sortConfig.key !== "image") {
      filtered = getSortedData(filtered, sortConfig.key, sortConfig.direction);
    }
    setTotalFilteredLength(filtered.length);
    const data = paginateData(filtered, currentPage, itemsPerPage);
    setTotalPages(Math.ceil(filtered.length / 10));
    setColumnData(data);
  }, [
    currentPage,
    products,
    selectedCategory,
    selectedStockStatus,
    sortConfig,
    searchText,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortConfig, selectedStockStatus, searchText]);

  return (
    <>
      <div className="w-full p-2 bg-gray-50 rounded-lg shadow-md animate-fadeIn">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div className="flex md:w-100">
            <SearchBar variant="table" />
          </div>
          <div className="flex gap-4 justify-end items-center">
            <DropDown
              data={categories}
              onChange={handleChange}
              selected={selectedCategory}
              title="category"
            />
            <DropDown
              data={stockStatus}
              onChange={handleChange}
              selected={selectedStockStatus}
              title="stock status"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-800">
            <thead className="bg-gray-50 uppercase font-semibold">
              <tr>
                {columnOrder.map((column, index) => (
                  <th
                    key={column.id}
                    scope="col"
                    draggable
                    onDragStart={() => {
                      columnDragIndex.current = index;
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(event) => onDropColum(event, index)}
                    className="px-4 py-3 rounded [&>div>img]:opacity-0 hover:[&>div>img]:opacity-100 cursor-grab"
                    onClick={() =>
                      column.id !== "image" && column.id !== "actions"
                        ? handleSort(column.id)
                        : ""
                    }
                  >
                    <div className="flex justify-between items-center gap-2">
                      <div className="flex items-center">
                        <p>{column.label}</p>
                        {sortConfig.key === column.id &&
                          sortConfig.key !== "image" &&
                          column.id !== "actions" && (
                            <img
                              className="w-4 h-4 ml-1"
                              src={
                                sortConfig.direction === "asc"
                                  ? upIcon
                                  : downIcon
                              }
                            />
                          )}
                      </div>
                      <img src={dragIcon} alt="drag" className="w-3 h-3" />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {columnData.map((coldata, index) => (
                <Suspense key={coldata.name + index} fallback={<RowSkeleton />}>
                  <ProductTableRow
                    coldata={coldata}
                    index={index}
                    columnOrder={columnOrder}
                    handleModal={handleModal}
                    sortConfig={sortConfig}
                    productsLength={totalFilteredLength || 0}
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                  />
                </Suspense>
              ))}
              {columnData.length === 0 && (
                <tr className="bg-white border-b border-gray-100 animate-slideDown hover:bg-gray-50 transition-all duration-300 ease-in-out last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-md [&:first-child>td:last-child]:rounded-tr-md [&:last-child>td:first-child]:rounded-bl-md [&:last-child>td:last-child]:rounded-br-md">
                  <td
                    className="px-4 py-3 whitespace-nowrap"
                    colSpan={columnOrder.length}
                  >
                    <div className="flex justify-center items-center">
                      <p>No Result Found</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {totalPages !== 0 && (
        <div className="mt-3 flex w-full justify-center">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            updateCurrentPage={updateCurrentPage}
          />
        </div>
      )}
      {actionData.action === "update" && (
        <EditProductModal
          id={actionData.index}
          isOpen={modelOpen}
          onCancel={() => setModalOpen(false)}
        />
      )}
      {actionData.action === "delete" && (
        <DeleteProductModal
          id={actionData.index}
          isOpen={modelOpen}
          onCancel={() => setModalOpen(false)}
        />
      )}
      {actionData.action === "view" && (
        <ViewProductModal
          id={actionData.index}
          isOpen={modelOpen}
          onCancel={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
