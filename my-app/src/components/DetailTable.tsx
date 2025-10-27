import './DetailTable.css'

interface DetailTableProps {
  data: Record<string, any>
  level?: number
}

export function DetailTable({ data, level = 0 }: DetailTableProps) {
  if (data === null || data === undefined) return <span>—</span>
  if (typeof data !== 'object') return <span>{String(data)}</span>

  if (Array.isArray(data)) {
    return (
      <div className="detail-table-array" style={{ marginLeft: level * 12 }}>
        {data.length === 0 ? (
          <span className="detail-table-empty">Empty</span>
        ) : (
          data.map((item, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>
              <DetailTable data={item} level={level + 1} />
            </div>
          ))
        )}
      </div>
    )
  }

  const isTopLevel = level === 0
  const { name, imgUrl, ...rest } = data

return (
  <div className="detail-table-container">
    {isTopLevel && (
      <div className="detail-table-top">
        {imgUrl && (
          <img
            src={imgUrl}
            alt={name ?? 'Animal image'}
            className="detail-table-image"
          />
        )}
        {name && <h2 className="detail-table-name">{name}</h2>}
      </div>
    )}

    <div className="detail-table-content">
      <table className="detail-table" style={{ marginLeft: level * 12 }}>
        <tbody>
          {Object.entries(rest).map(([key, value]) => (
            <tr key={key}>
              <td className="detail-table-row-key">
                {key.replace(/([A-Z])/g, ' $1')}
              </td>
              <td className="detail-table-row-value">
                <DetailTable data={value} level={level + 1} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)
}
