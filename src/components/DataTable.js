import React from "react";
import style from "./DataTable.module.css";
import TocIcon from "@mui/icons-material/Toc";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DataTable = ({
  headers,
  data,
  onEdit,
  onDelete,
  onViewClick,
  userAction,
  showEditDeleteButton,
}) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className={style.th}>
              {header}
            </th>
          ))}
          {userAction && <th className={style.th}>Action</th>}
        </tr>
      </thead>

      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex} className={style.tr}>
            {Object.keys(item).map((key, cellIndex) => (
              <td key={cellIndex} className={style.td}>
                {key === "productImage" && item[key] ? (
                  <img src={item[key]} alt="Product" width="50" />
                ) : key === "status" && item[key] ? (
                  item[key] === "Pending" ? (
                    <div className={style.pending}>{item[key]}</div>
                  ) : item[key] === "Delivered" || item[key] === "active" ? (
                    <div className={style.delivered}>{item[key]}</div>
                  ) : (
                    <div className={style.canceled}>{item[key]}</div>
                  )
                ) : (
                  item[key]
                )}
              </td>
            ))}

            {userAction && (
              <>
                {showEditDeleteButton ? (
                  <td className={style.td}>
                    <button
                      onClick={() => onEdit(rowIndex)}
                      className={style.editBtn}
                    >
                      <EditIcon />
                    </button>
                    <button
                      onClick={() => onDelete(rowIndex)}
                      className={style.deleteBtn}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                ) : (
                  <td className={style.td}>
                    <button
                      onClick={() => onViewClick(rowIndex)}
                      className={style.listBtn}
                    >
                      <TocIcon />
                    </button>
                  </td>
                )}
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
