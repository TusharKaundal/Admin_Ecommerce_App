export const generatePageNumber = (currentPage, totalPages) => {
  const blockSize = 5;
  const currentBlock = Math.floor((currentPage - 1) / blockSize);
  const data = Array.from(
    { length: Math.min(blockSize, totalPages - currentBlock * blockSize) },
    (_, i) => currentBlock * blockSize + i + 1
  );
  return data;
};

export const getPaginateData = (data, page, limit) => {
  const startPage = (page - 1) * limit;
  const endPage = startPage + limit;
  return data.slice(startPage, endPage);
};
