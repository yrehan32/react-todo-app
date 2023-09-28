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
              <th key={crypto.randomUUID()}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default Table;