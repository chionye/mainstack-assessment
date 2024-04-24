/** @format */

import receipt from "@/assets/receipt_long.svg";
import { Button } from "../ui/button";

const Empty = () => {
  return (
    <div className='flex justify-center items-center mt-16'>
      <div className='md:w-96' w-full>
        <span className='bg-[#DBDEE5] rounded-[16px] p-4 flex items-center justify-center w-fit'>
          <img src={receipt} alt='receipt' />
        </span>
        <h2 className='mt-3'>
          No matching transaction found for the selected filter
        </h2>
        <p className='text-[16px] leading-6'>
          Change your filters to see more results, or add a new product.
        </p>
        <Button
          variant={"outline"}
          className=' py-3 px-6 border-0 hover:shadow-none shadow-none bg-[#EFF1F6] rounded-full mt-4'>
          Clear Filter
        </Button>
      </div>
    </div>
  );
};

export default Empty;
