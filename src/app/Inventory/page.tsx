"use client"
import React from "react";

import { ChevronDownIcon } from "@radix-ui/react-icons"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Input } from "~/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"

import {FiEdit2} from "react-icons/fi";
import Link from "next/link";
import { Layout } from "lucide-react";

const data: Payment[] = [
  {
    id : "m5",
    product : "Medium",
    inventory : 10,
    type : "Type 1",
    vendor : "Vendor X",
    imageURL : "https://www.bing.com/th?id=OIP.-f35OJgC731Ar7VVvPYBxwHaJ3&w=154&h=206&c=8&rs=1&qlt=90&o=6&dpr=2.1&pid=3.1&rm=2",
  },
  {
    id : "m5",
    product : "Tablet",
    inventory : 10,
    type : "Type 1",
    vendor : "Vendor X",
    imageURL : "https://www.bing.com/th?id=OIP.-f35OJgC731Ar7VVvPYBxwHaJ3&w=154&h=206&c=8&rs=1&qlt=90&o=6&dpr=2.1&pid=3.1&rm=2",

  },
]

export type Payment = {
  id : string
  product : string
  inventory : number
  type : string
  vendor : string
  imageURL : string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "imageURL",
    header: "Preview",
    cell: ({ row }) => (
      <img src={row.getValue("imageURL")} className="h-[5rem] w-[5rem] object-cover rounded-lg shadow-lg shadow-gray-500/50" />
    ),
  },
  {
    accessorKey: "product",
    header: "Product Name",
    cell: ({ row }) => (
      <Link href="/Editing">
            <div className="capitalize text-[#ec4755] font-bold">{row.getValue("product")}</div>
      </Link>
    ),
  },
  {
    accessorKey: "inventory",
    header: "Inventory",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("inventory")}</div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("type")}</div>
    ),
  },
  {
    accessorKey: "vendor",
    header: () => <div className="text-right">Vendor</div>,
    cell: ({ row }) => {

      return <div className="text-right font-medium">{row.getValue("vendor")}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {

      return (
        <Link className="flex flex-1" href={"/Editing"}>
            <div className="font-bold text-white md:w-[50%] bg-[#ec4755] p-2 flex rounded justify-between ">
              <p>Edit</p>
              <FiEdit2/>
            </div>
        </Link>
      )
    },
  },
]

function DataTable() {
 
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full border p-3 rounded">
      <div className="flex items-center py-4 w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto bg-gray-200 ">
              Filters <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) =>
                    column.toggleVisibility(!!value)
                  }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Input
          placeholder="Search by Product Name..."
          value={(table.getColumn("product")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
          table.getColumn("product")?.setFilterValue(event.target.value)
          }
          className="w-full ml-5"
          />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            //disabled={!table.getCanPreviousPage()}
            className=" text-black hover:bg-gray-300"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
           // disabled={!table.getCanNextPage()}
            className="text-black bg-gray-200"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function Inventory(){

    return (
        <div className="w-full h-full gap-5 px-5 ">
          
            <div className="w-full py-5">
                <p><b>Invetory Details</b></p>
                <p className="text-gray-400">View , edit and delete your products.</p>
            </div> 
            <div>
                <div className="flex gap-10">
                    <div className="flex gap-2">
                        <button className="text-[#ec4755] border  border-orange-500 rounded p-2">Export</button>
                        <button className="text-[#ec4755] border border-orange-500 rounded p-2">Import</button>
                    </div>
                    <button className="text-white bg-[#ec4755] p-2 rounded">Manage Directory</button>
                </div>
            </div>
            <div className="my-10">
                <DataTable/>
            </div>
        </div>
    );
}
