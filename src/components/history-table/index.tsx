/** @format */

import { format } from "date-fns";
import { Icon } from "@iconify-icon/react";
import Empty from "../empty";

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
};

const HistoryTable: React.FC<HistoryTableProps> = ({ data }) => {
  return (
    <div className='mt-[24px] pb-10'>
      {data.length > 0 ? (
        data.map((history, index) => (
          <div className='flex items-center space-x-2 mb-[24px]' key={index}>
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
                <p className='text-[#131316] text-[16px]'>
                  {history.metadata.product_name}
                </p>
                <p className='text-[#131316] font-[700]'>
                  USD {history.amount}
                </p>
              </div>
              <div className='flex justify-between mt-3'>
                <p className='text-[#56616B]'>{history.metadata.name}</p>
                <p className='text-[#56616B]'>
                  {format(new Date(history.date), "MMM dd yyyy")}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default HistoryTable;
