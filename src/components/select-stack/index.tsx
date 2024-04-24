/** @format */

import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Icon } from "@iconify-icon/react";

type StackItem = {
  id: string;
  label: string;
};

type selectStackProp = {
  open: boolean;
  toggleSelect: (name: string) => void;
  itemSelectFn: (name: string, tag: string) => void;
  label: string;
  selectTag: string;
  stackItems: StackItem[];
  selectedItemsArray: string[];
};

const SelectStack = ({
  open,
  toggleSelect,
  itemSelectFn,
  label,
  selectTag,
  stackItems,
  selectedItemsArray,
}: selectStackProp) => {
  return (
    <div className='my-4'>
      <Label className='text-[#131316]'>{label}</Label>
      <div className='flex items-center justify-between mt-1 space-x-2'>
        <Select open={open} onOpenChange={() => toggleSelect(selectTag)}>
          <SelectTrigger className='flex items-center'>
            <SelectValue
              placeholder={`${
                selectedItemsArray.length > 0
                  ? selectedItemsArray.join(", ")
                  : stackItems[0].label
              }`}
            />
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
          </SelectTrigger>
          <SelectContent className='p-1 rounded-xl border-0'>
            <SelectGroup className='space-y-5'>
              {stackItems.map(
                (
                  item: {
                    id: string;
                    label: string;
                  },
                  index: number
                ) => (
                  <SelectLabel key={index}>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                      <Checkbox
                        id={item.id}
                        onClick={() => itemSelectFn(item.label, selectTag)}
                        checked={selectedItemsArray.includes(item.label)}
                      />
                      <label
                        htmlFor='terms'
                        className='text-sm font-medium leading-none  cursor-pointer peer-disabled:opacity-70'>
                        {item.label}
                      </label>
                    </div>
                  </SelectLabel>
                )
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectStack;
