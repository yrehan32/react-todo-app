import { v4 as uuidv4 } from "uuid";
interface TableProps {
  headers: string[];
  children: React.ReactNode;
}

function Table({ headers, children }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={uuidv4()}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default Table;