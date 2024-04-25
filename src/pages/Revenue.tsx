
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify-icon/react";
import { DatePicker } from "@/components/ui/date-picker";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import Drawer from "@/components/drawer";
import { filterButtonItems } from "@/utils/page-props";
import SelectStack from "@/components/select-stack";
import {
  selectTransactionTypeItems,
  selectTransactionStatusItems,
} from "@/utils/page-props";
import HistoryTable from "@/components/history-table";
import Query from "@/api/query";
import { BASE_URL, TRANSACTIONS, WALLET } from "@/constants/endpoints";
import { formatAmount, generatePascalCase } from "@/services/helpers";
import { filterData } from "@/services/filter";
import Loader from "@/components/loader";
import Chart from "@/components/chart";

interface SelectOpenState {
  [key: string]: boolean;
}

interface SetSelectedItemsProps {
  [key: string]: string[];
}

const Revenue = () => {
  const [selectedItems, setSelectedItems] = useState<SetSelectedItemsProps>({
    trans_type: [],
    trans_status: [],
  });
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [transactionPeriod, setTransactionPeriod] = useState<string>("all time");
  const [transactionHistory, setTransactionHistory] = useState<any>([]);
  const [filter, setFilter] = useState<any>([]);
  const [statement, setStatement] = useState<any>({
    balance: 0,
    total_payout: 0,
    total_revenue: 0,
    pending_payout: 0,
    ledger_balance: 0,
  });
  const [isSelectOpen, setIsSelectOpen] = useState<SelectOpenState>({
    trans_type: false,
    trans_status: false,
  });
  const queryParamsArray = [
    {
      id: "wallet",
      url: `${BASE_URL}${WALLET}`,
    },
    {
      id: "transactions",
      url: `${BASE_URL}${TRANSACTIONS}`,
    },
  ];
  const { queries } = Query(queryParamsArray);

  const toggleSelection = (item: string, key: string) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = { ...prevSelectedItems };

      if (updatedSelectedItems[key].includes(item)) {
        updatedSelectedItems[key] = updatedSelectedItems[key].filter(
          (selectedItem) => selectedItem !== item
        );
      } else {
        updatedSelectedItems[key] = [...updatedSelectedItems[key], item];
      }

      return updatedSelectedItems;
    });
  };

  const toggleSelect = (name: string) => {
    setIsSelectOpen((prevState: SelectOpenState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const updateTransactionPeriod = (transPeriod: string) => {
    setTransactionPeriod(transPeriod.toLowerCase());
  };

  const handleFilter = () => {
    const filterResult = filterData(
      transactionHistory,
      transactionPeriod,
      startDate,
      endDate,
      selectedItems.trans_type,
      selectedItems.trans_status
    );
    setFilter(filterResult);
  };

  const handleClearFilter = () => {
    setFilter(transactionHistory);
    setStartDate("");
    setEndDate("");
    setSelectedItems({
      trans_type: [],
      trans_status: [],
    });
    setTransactionPeriod("all time");
  };

  useEffect(() => {
    if (queries[0].isSuccess) {
      setStatement(queries[0].data?.data);
    }
    if (queries[1].isSuccess) {
      setTransactionHistory(queries[1].data?.data);
      setFilter(queries[1].data?.data);
      return;
    }
  }, [queries[0].isSuccess, queries[1].isSuccess]);

  return (
    <>
      {queries[0].isLoading || queries[1].isLoading ? (
        <Loader />
      ) : (
        <>
          <div className='flex md:flex-row flex-col justify-between'>
            <div>
              <div className='flex space-x-16 md:p-0 p-5'>
                <div className='text-left'>
                  <p className='text-[#56616B]'>Available balance</p>
                  <h1 className='text-[36px] font-semibold'>
                    USD {formatAmount(statement?.balance)}
                  </h1>
                </div>
                <div className='flex items-center'>
                  <Button className='text-[14px] py-[14px] px-[28px] rounded-full'>
                    Withdraw
                  </Button>
                </div>
              </div>
              <Chart data={filter} />
            </div>
            <div className='md:w-[271px] w-full flex space-y-7 flex-col md:p-0 md:mt-0 p-5 mt-10'>
              {Object.keys(statement).map((key: string, index: number) =>
                key && key !== "balance" ? (
                  <div key={index}>
                    <div className='flex justify-between'>
                      <p>{generatePascalCase(key)}</p>
                      <Icon
                        icon='material-symbols-light:info-outline'
                        width='15.83'
                        height='15.83'
                        className='text-[#888F95]'
                      />
                    </div>
                    {statement[key] !== undefined && (
                      <h2>USD {formatAmount(statement[key])}</h2>
                    )}
                  </div>
                ) : null
              )}
            </div>
          </div>
          <div className='flex justify-between mt-24 border-b-2 pb-[24px] md:px-0 p-2'>
            <div>
              <h3>{filter.length} Transactions</h3>
              <p>
                Your transactions for{" "}
                {transactionPeriod === "this month" ||
                  (transactionPeriod === "all time" && "")}{" "}
                {transactionPeriod}
              </p>
            </div>
            <div className='flex space-x-2 items-center'>
              <Drawer
                title='Filter'
                button={
                  <Button
                    variant={"outline"}
                    className='py-3 px-6 border-0 hover:shadow-none shadow-none bg-[#EFF1F6] rounded-full  flex items-center space-x-1 '>
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
                            onClick={() => updateTransactionPeriod(item.label)}
                            className={`shadow-none rounded-full text-[#131316] border-[#EFF1F6] hover:bg-[#EFF1F6] ${
                              transactionPeriod === item.label.toLowerCase() &&
                              "bg-[#EFF1F6]"
                            }`}>
                            {item.label}
                          </Button>
                        )
                      )}
                    </div>
                    <div className='my-4'>
                      <Label className='text-[#131316]'>Date Range</Label>
                      <div className='flex items-center justify-between mt-1 space-x-2'>
                        <DatePicker
                          label='Start date'
                          updateDate={setStartDate}
                        />
                        <DatePicker label='End date' updateDate={setEndDate} />
                      </div>
                    </div>
                    <SelectStack
                      open={isSelectOpen.trans_type}
                      toggleSelect={toggleSelect}
                      label='Transaction Type'
                      selectTag='trans_type'
                      stackItems={selectTransactionTypeItems}
                      itemSelectFn={toggleSelection}
                      selectedItemsArray={selectedItems.trans_type}
                    />
                    <SelectStack
                      open={isSelectOpen.trans_status}
                      toggleSelect={toggleSelect}
                      label='Transaction Status'
                      selectTag='trans_status'
                      stackItems={selectTransactionStatusItems}
                      itemSelectFn={toggleSelection}
                      selectedItemsArray={selectedItems.trans_status}
                    />
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Button
                      variant={"outline"}
                      className='text-[14px] py-[14px] px-[28px] w-full rounded-full border-[#EFF1F6] shadow-none'
                      onClick={handleClearFilter}>
                      Clear
                    </Button>
                    <Button
                      className='text-[14px] py-[14px] px-[28px] w-full rounded-full'
                      onClick={handleFilter}>
                      Apply
                    </Button>
                  </div>
                </div>
              </Drawer>
              <Button
                variant={"outline"}
                className=' py-3 px-6 border-0 hover:shadow-none shadow-none bg-[#EFF1F6] rounded-full flex items-center space-x-1 '>
                <span>Export list</span>
                <Icon icon='prime:download' width='13' height='13' />
              </Button>
            </div>
          </div>
          <HistoryTable data={filter} clearFilterFn={handleClearFilter} />
        </>
      )}
    </>
  );
};

export default Revenue;
