import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { cn } from '../../app/utils/cn';

function DropdownMenuRoot({ children }: { children: React.ReactNode }){
  return(
    <RdxDropdownMenu.Root>
      { children }
    </RdxDropdownMenu.Root>
  )
}

function DropdownMenuTrigger({ children }: { children: React.ReactNode }){
  return(
    <RdxDropdownMenu.Trigger className='outline-none'>
      { children }
    </RdxDropdownMenu.Trigger>
  )
}

interface DropdownMenuContentProps {
  children: React.ReactNode
  className?: string
}

function DropdownMenuContent({ children, className }: DropdownMenuContentProps){
  return(
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content className={cn(
        'rounded-2xl p-2 bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] data-[side=bottom]:animate-slideUpAndFade z-50',
        className
      )}>
      { children }
    </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  )
}

interface DropdownMenuItemProps {
  children: React.ReactNode
  className?: string
  onSelect?(): void
}

function DropdownMenuItem({ children, className, onSelect }: DropdownMenuItemProps){
  return(
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
      'min-h-048px] outline-none flex items-center py-2 px-4 text-gray-800 text-sm data-[highlighted]:bg-gray-50 rounded-2xl transition-colors cursor-pointer',
      className
    )}>
      { children }
    </RdxDropdownMenu.Item>
  )
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem
}
