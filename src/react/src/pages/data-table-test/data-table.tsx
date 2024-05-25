import * as React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  TableProps,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  SortingState,
  getSortedRowModel,
  ColumnDef,
} from "@tanstack/react-table";

type DataTableColumn<Data> = {
  header: string;
  render: (params: { data: Data }) => React.ReactNode;
};

type DataTableProps<Data extends object> = {
  data: Data[];
  columns: DataTableColumn<Data>[];
  tableProps?: TableProps;
};

export function DataTable<Data extends object>({
  data,
  columns,
  tableProps,
}: DataTableProps<Data>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const tableColumns = React.useMemo<ColumnDef<Data>[]>(
    () =>
      columns.map((col) => ({
        header: col.header,
        cell: (info) => col.render({ data: info.row.original }),
      })),
    [columns]
  );

  const table = useReactTable({
    columns: tableColumns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <Table {...tableProps}>
      <Thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const meta = header.column.columnDef.meta as
                | {
                    isNumeric?: boolean;
                  }
                | undefined;
              return (
                <Th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  isNumeric={meta?.isNumeric}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  <chakra.span pl="4">
                    {header.column.getIsSorted() ? (
                      header.column.getIsSorted() === "desc" ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              );
            })}
          </Tr>
        ))}
      </Thead>
      <Tbody>
        {table.getRowModel().rows.map((row) => (
          <Tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              const meta = cell.column.columnDef.meta as
                | {
                    isNumeric?: boolean;
                  }
                | undefined;
              return (
                <Td key={cell.id} isNumeric={meta?.isNumeric}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              );
            })}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export function createColumns<Data extends object>(
  dynamicColumns: DataTableColumn<Data>[],
  staticColumns: DataTableColumn<Data>[]
): DataTableColumn<Data>[] {
  return [...dynamicColumns, ...staticColumns];
}
