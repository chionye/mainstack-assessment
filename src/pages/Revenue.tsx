/** @format */

import { Button } from "@/components/ui/button";
import graph from "@/assets/graph.png";
import { Icon } from "@iconify-icon/react";
import { DatePicker } from "@/components/ui/date-picker";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Drawer from "@/components/drawer";
import { filterButtonItems } from "@/utils/page-props";
import SelectStack from "@/components/select-stack";
import {
  selectTransactionTypeItems,
  selectTransactionStatusItems,
} from "@/utils/page-props";
import HistoryTable from "@/components/history-table";

interface SelectOpenState {
  [key: string]: boolean;
}

const Revenue = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [transactionHistory, setTransactionHistory] = useState<any>([]);
  const [isSelectOpen, setIsSelectOpen] = useState<SelectOpenState>({
    trans_type: false,
    trans_status: false,
  });

  const toggleSelection = (item) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter(
          (selectedItem) => selectedItem !== item
        );
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };

  const toggleSelect = (name: string) => {
    setIsSelectOpen((prevState: SelectOpenState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <>
      <div className='flex md:flex-row flex-col justify-between'>
        <div>
          <div className='flex space-x-16 md:p-0 p-5'>
            <div className='text-left'>
              <p className='text-[#56616B]'>Available balance</p>
              <h1 className='text-[36px] font-semibold'>USD 120,500.00</h1>
            </div>
            <div className='flex items-center'>
              <Button className='text-[14px] py-[14px] px-[28px] rounded-full'>
                Withdraw
              </Button>
            </div>
          </div>
          <img src={graph} alt='' />
        </div>
        <div className='md:w-[271px] w-full flex space-y-7 flex-col md:p-0 md:mt-0 p-5 mt-10'>
          <div>
            <div className='flex justify-between'>
              <p>Ledger Balance</p>
              <Icon
                icon='material-symbols-light:info-outline'
                width='15.83'
                height='15.83'
                className='text-[#888F95]'
              />
            </div>
            <h2>USD 0.00</h2>
          </div>
          <div>
            <div className='flex justify-between'>
              <p>Total Payout</p>
              <Icon
                icon='material-symbols-light:info-outline'
                width='15.83'
                height='15.83'
                className='text-[#888F95]'
              />
            </div>
            <h2>USD 55,080.00</h2>
          </div>
          <div>
            <div className='flex justify-between'>
              <p>Total Revenue</p>
              <Icon
                icon='material-symbols-light:info-outline'
                width='15.83'
                height='15.83'
                className='text-[#888F95]'
              />
            </div>
            <h2>USD 175,580.00</h2>
          </div>
          <div>
            <div className='flex justify-between'>
              <p>Pending Payout</p>
              <Icon
                icon='material-symbols-light:info-outline'
                width='15.83'
                height='15.83'
                className='text-[#888F95]'
              />
            </div>
            <h2>USD 0.00</h2>
          </div>
        </div>
      </div>
      <div className='flex justify-between mt-24 border-b-2 pb-[24px] md:px-0 p-2'>
        <div>
          <h3>24 Transactions</h3>
          <p>Your transactions for the last 7 days</p>
        </div>
        <div className='flex space-x-2 items-center'>
          <Drawer
            title='Filter'
            button={
              <Button className='bg-[#EFF1F6] py-[12px] px-[20px] text-black rounded-full flex items-center space-x-1 hover:bg-[#131316] hover:text-white'>
                <span>Filter</span>
                <Icon icon='ph:caret-down-bold' width='10' height='10' />
              </Button>
            }>
            <div className='flex flex-col justify-between h-full'>
              <div>
                <div className='flex items-center justify-between'>
                  {filterButtonItems.map(
                    (item: { label: string }, index: number) => (
                      <Button
                        key={index}
                        variant={"outline"}
                        className='shadow-none rounded-full text-[#131316] border-[#EFF1F6] hover:bg-[#EFF1F6]'>
                        {item.label}
                      </Button>
                    )
                  )}
                </div>
                <div className='my-4'>
                  <Label className='text-[#131316]'>Date Range</Label>
                  <div className='flex items-center justify-between mt-1 space-x-2'>
                    <DatePicker label='Start date' />
                    <DatePicker label='End date' />
                  </div>
                </div>
                <SelectStack
                  open={isSelectOpen.trans_type}
                  toggleSelect={toggleSelect}
                  label='Transaction Type'
                  selectTag='trans_type'
                  stackItems={selectTransactionTypeItems}
                />
                <SelectStack
                  open={isSelectOpen.trans_status}
                  toggleSelect={toggleSelect}
                  label='Transaction Status'
                  selectTag='trans_status'
                  stackItems={selectTransactionStatusItems}
                />
              </div>
              <div className='flex items-center space-x-2'>
                <Button
                  variant={"outline"}
                  className='text-[14px] py-[14px] px-[28px] w-full rounded-full border-[#EFF1F6] shadow-none'>
                  Clear
                </Button>
                <Button className='text-[14px] py-[14px] px-[28px] w-full rounded-full'>
                  Apply
                </Button>
              </div>
            </div>
          </Drawer>
          <Button className='bg-[#EFF1F6] py-[12px] px-[20px] text-[#131316] rounded-full flex items-center space-x-1 hover:bg-[#131316] hover:text-white'>
            <span>Export list</span>
            <Icon icon='prime:download' width='13' height='13' />
          </Button>
        </div>
      </div>
      <HistoryTable data={transactionHistory} />
    </>
  );
};

export default Revenue;
