const dataList = [
    [
    `<div class="font-manrope font-normal text-[12px] leading-[20px] text-[#0F1B27] ">#3437</div>`,
   `<div class="flex items-center gap-1">
       <img src="./assets/dataTable-img.svg" alt="John Doe" class="w-10 h-10  " />
       <span >Name here</span>
     </div>`,
     `<div class="font-manrope font-normal text-[12px] leading-[20px] text-[#0F1B27] ">Tablet</div>`,
     `<div class="font-manrope font-normal text-[12px] leading-[20px] text-[#0F1B27] w-[107px]">30 mg</div>`,
     `<div class="font-manrope font-normal text-[12px] leading-[20px] text-[#0F1B27] w-[107px]">$5.7</div>`,
     `<div class="font-manrope font-normal text-[12px] leading-[20px] text-[#0F1B27] w-[107px]">25</div>`,
    `<div class="w-[107px]"><button style="background-color: #97F39B; border-radius: 90px; padding-top: 2px; padding-bottom:2px; padding-left: 8px; padding-right: 8px;">In stock</button></div>`,
      `<div class="w-[107px] border border-black p-[10px]">
        <img src="./assets/dot.svg" alt="John Doe" class="w-5 h-5" />
      </div>`
    ],
   
    // Add more data as needed
  ];

  new simpleDataTable("myTable", dataList);