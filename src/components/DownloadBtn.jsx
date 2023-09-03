import * as XLSX from "xlsx";

const DownloadBtn = ({ data = [], fileName }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
      }}
    >
      Download
    </button>
  );
};

export default DownloadBtn;
