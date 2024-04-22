/** @format */

import { Button } from "@/components/ui/button";
import graph from "@/assets/graph.png";
import { Icon } from "@iconify-icon/react";

const Revenue = () => {
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
        <div className='flex space-x-2'>
          <Button className='bg-[#EFF1F6] py-[12px] px-[20px] text-black rounded-full flex items-center space-x-1 hover:bg-[#131316] hover:text-white'>
            <span>Filter</span>
            <Icon icon='ph:caret-down-bold' width='10' height='10' />
          </Button>
          <Button className='bg-[#EFF1F6] py-[12px] px-[20px] text-[#131316] rounded-full flex items-center space-x-1 hover:bg-[#131316] hover:text-white'>
            <span>Export list</span>
            <Icon icon='prime:download' width='13' height='13' />
          </Button>
        </div>
      </div>
      <div className='mt-[24px] pb-10'>
        <div className='flex items-center space-x-2 mb-[24px]'>
          <span className='w-[48px] h-[48px] bg-[#E3FCF2] rounded-full flex justify-center items-center'>
            <Icon
              icon='bi:arrow-down'
              width='20'
              height='20'
              className='text-[#075132] origin-center rotate-45'
            />
          </span>
          <div className='w-full'>
            <div className='flex justify-between'>
              <p className='text-[#131316] text-[16px]'>Psychology of Money</p>
              <p className='text-[#131316] font-[700]'>USD 600</p>
            </div>
            <div className='flex justify-between mt-3'>
              <p className='text-[#56616B]'>Roy Cash</p>
              <p className='text-[#56616B]'>Apr 03,2022</p>
            </div>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <span className='w-[48px] h-[48px] bg-[#F9E3E0] rounded-full flex justify-center items-center'>
            <Icon
              icon='bi:arrow-up'
              width='20'
              height='20'
              className='text-[#961100] origin-center rotate-45'
            />
          </span>
          <div className='w-full'>
            <div className='flex justify-between'>
              <p className='text-[#131316] text-[16px]'>Cash withdrawal </p>
              <p className='text-[#131316] font-[700]'>USD 600</p>
            </div>
            <div className='flex justify-between mt-3'>
              <p className='text-[#0EA163]'>Successful</p>
              <p className='text-[#56616B]'>Apr 03,2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Revenue;
