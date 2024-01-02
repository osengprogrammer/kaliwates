'use client'

import { ColumnDef } from '@tanstack/react-table'

import { MoreHorizontal, ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export type User = {
  id: string,
  CODE: string,
  CODE_FABRIC: string,
  CODE_LINING: string,
  COLOR: string,
  CUSTOMER: string,
  FABRIC_COLOR: string,
  FABRIC_QTY: number,
  LINING_QTY: number,
  PRICE: number
  PRODUCT: string,
  SIZE: string
  
}




export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'PRODUCT',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'CODE',
    header: 'CODE'
  },
  {
    accessorKey: 'COLOR',
    header: 'COLOR',
    // cell: ({ row }) => {
    //   const date = new Date(row.getValue('lastSeen'))
    //   const formatted = date.toLocaleDateString()
    //   return <div className='font-medium'>{formatted}</div>
    // }
  },

  {
    accessorKey: 'SIZE',
    header: 'SIZE'
  },

  {
    accessorKey: 'FABRIC_COLOR',
    header: 'FABRIC_COLOR'
  },
  {
    accessorKey: 'CODE_FABRIC',
    header: 'CODE_FABRIC'
  },
  {
    accessorKey: 'FABRIC_QTY',
    header: 'FABRIC_QTY'
  },
  {
    accessorKey: 'CODE_LINING',
    header: 'CODE_LINING'
  },
  {
    accessorKey: 'LINING_QTY',
    header: 'LINING_QTY'
  },
  {
    accessorKey: 'PRICE',
    header: 'PRICE'
  },
  {
    accessorKey: 'CUSTOMER',
    header: 'CUSTOMER'
  },
  
  // FABRIC_COLOR: string,
  // FABRIC_QTY: number,
  // LINING_QTY: number,
  // PRICE: number

  {
    id: 'actions',
    cell: ({ row }) => {
      const user = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={()=>console.log(user.id)} 
            >Console.log</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]