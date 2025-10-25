interface DetailTableProps {
  data: any;
  level?: number; 
}

export function DetailTable({ data, level = 0 }: DetailTableProps) {
  if (data === null || data === undefined) {
    return <span>null</span>;
  }

  if (typeof data !== "object") {
    return <span>{data.toString()}</span>;
  }

  if (Array.isArray(data)) {
    return (
      <table style={{ borderCollapse: "collapse", marginLeft: level * 20 }}>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ccc", padding: "4px" }}>
                <DetailTable data={item} level={level + 1} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <table style={{ borderCollapse: "collapse", marginLeft: level * 20 }}>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td style={{ fontWeight: "bold", border: "1px solid #ccc", padding: "4px" }}>
              {key}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "4px" }}>
              <DetailTable data={value} level={level + 1} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
