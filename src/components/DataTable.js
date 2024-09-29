import React from "react";
import style from "./DataTable.module.css";
import TocIcon from "@mui/icons-material/Toc";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DataTable = ({ headers, data, onEdit, onDelete, userAction }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className={style.th}>
              {header}
            </th>
          ))}
          <th className={style.th}>Action</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={style.tr}>
            {Object.values(row).map((value, cellIndex) => (
              <td key={cellIndex} className={style.td}>
                {value}
              </td>
            ))}

            {userAction ? (
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
                  onClick={() => onDelete(rowIndex)}
                  className={style.listBtn}
                >
                  <TocIcon />
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
