import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Pagination from '@mui/material/Pagination';

interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  totalPages: number;
}

interface GenericPaginatedListProps<T> {
  url: string;
  queryKey: string | readonly unknown[];
  renderItem: (item: T) => React.ReactNode;
  pageSize?: number;
}

export default function GenericPaginatedList<T>({
  url,
  queryKey,
  renderItem,
  pageSize = 10,
}: GenericPaginatedListProps<T>) {
  const [page, setPage] = React.useState(1);

  const { data, isLoading, error } = useQuery<PaginatedResponse<T>>({
    queryKey: Array.isArray(queryKey) ? [...queryKey, page] : [queryKey, page],
    queryFn: async () => {
      const res = await fetch(`${url}&Pagination.PageNumber=${page}&Pagination.PageSize=${pageSize}`);
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading items</div>;
  if (!data || !data.items || data.items.length === 0) return <div>No items found</div>;

  return (
    <div>
      <p>{data.totalCount} items found</p>
      {data.items.map((item: T) => (
        <React.Fragment key={(item as any).id}>{renderItem(item)}</React.Fragment>
      ))}
      <Pagination
        count={data.totalPages}
        page={page}
        onChange={(_, value) => setPage(value)}
        variant="outlined"
      />
    </div>
  );
}
