import React from 'react';

import { Icons } from '@/components/common/icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

interface CustomTooltipProps {
  children: React.ReactNode;
  text: string;
  icon?: any;
}

export default function CustomTooltip({
  children,
  text,
  icon
}: CustomTooltipProps) {
  const IconComponent = icon ? icon : Icons.infoMark;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className='flex items-center text-muted-foreground'>
          <IconComponent className='mr-2 h-4 w-4' />
          <span>{text}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
