/** @format */

"use client";

import * as React from "react";
import { format } from "date-fns";
import { Icon } from "@iconify-icon/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({
  label = "Pick a date",
  updateDate,
}: {
  label: string;
  updateDate: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [date, setDate] = React.useState<Date | undefined>();
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    updateDate(date);
  }, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          onClick={() => setOpen(!open)}
          className={cn(
            "h-11 w-[280px] justify-start text-left font-normal bg-[#EFF1F6] border-0 text-[#131316] rounded-xl",
            !date && "text-muted-foreground"
          )}>
          {date ? format(date, "d MMM yyyy") : <span>{label}</span>}
          {open ? (
            <Icon
              icon='ph:caret-up-bold'
              width='10'
              height='10'
              className='ml-auto text-[#31373D]'
            />
          ) : (
            <Icon
              icon='ph:caret-down-bold'
              width='10'
              height='10'
              className='ml-auto text-[#31373D]'
            />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[390px] p-4' align='start'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
