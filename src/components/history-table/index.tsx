/** @format */

import { format } from "date-fns";
import { Icon } from "@iconify-icon/react";
import receipt from "@/assets/receipt_long.svg";
import { sentenceCase } from "@/services/helpers";
import { Button } from "../ui/button";

type metadataProps = {
  name: string;
  type: string;
  email: string;
  quantity: string;
  country: string;
  product_name: string;
};

type historyProps = {
  amount: string;
  metadata: metadataProps;
  payment_reference: string;
  status: string;
  type: string;
  date: string;
};

type HistoryTableProps = {
  data: historyProps[];
  clearFilterFn: () => void
};

const HistoryTable: React.FC<HistoryTableProps> = ({ data, clearFilterFn }) => {
  return (
    <div className='mt-[24px] pb-10'>
      {data.length > 0 ? (
        data.map((history: historyProps, index: number) => (
          <div className='flex items-center space-x-2 mb-[24px]' key={index}>
            <span
              className={`w-[48px] h-[48px] ${
                history.metadata?.product_name ? "bg-[#E3FCF2]" : "bg-[#F9E3E0]"
              } rounded-full flex justify-center items-center`}>
              <Icon
                icon={`${
                  history.metadata?.product_name
                    ? "bi:arrow-down"
                    : "bi:arrow-up"
                }`}
                width='20'
                height='20'
                className={`${
                  history.metadata?.product_name
                    ? "text-[#075132]"
                    : "text-[#961100]"
                } origin-center rotate-45`}
              />
            </span>
            <div className='w-full'>
              <div className='flex justify-between'>
                <p className='text-[#131316] text-[16px]'>
                  {history.metadata?.product_name || "Cash Withdrawal"}
                </p>
                <p className='text-[#131316] font-[700]'>
                  USD {history.amount}
                </p>
              </div>
              <div className='flex justify-between mt-3'>
                <p
                  className={`${
                    !history.metadata?.name && history.status == "successful"
                      ? "text-[#0EA163]"
                      : !history.metadata?.name && history.status == "pending"
                      ? "text-[#A77A07]"
                      : "text-[#56616B]"
                  }`}>
                  {sentenceCase(history.metadata?.name || history.status)}
                </p>
                <p className='text-[#56616B]'>
                  {format(new Date(history.date), "MMM dd yyyy")}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
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
              onClick={clearFilterFn}
              className=' py-3 px-6 border-0 hover:shadow-none shadow-none bg-[#EFF1F6] rounded-full mt-4'>
              Clear Filter
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryTable;
