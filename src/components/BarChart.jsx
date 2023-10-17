
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const TotalRevenueSeries = [
    {
      name: "Last Month",
      data: [6,4,10,7,8,3,8,10,8,7,8,6],
    },
    
  ];

  const TotalRevenueOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
      margin:0
    },
    colors: ["#7787FE", "#C7CEFF"],
    plotOptions: {
      bar: {
        borderRadius: 10,
        horizontal: false,
        columnWidth: "75%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    stroke: {
      colors: ["transparent"],
      width: 1,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sept","Oct","Nov","Dec"],
      labels: {
        show: true, // Hide Y-axis labels
      },
    },
    yaxis: {
        labels: {
            show: false, // Hide Y-axis labels
          },
    
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    
  };

  return (
    <div id="total-revenue-chart" className="md:w-2/3 w-full bg-white rounded-lg hover:cursor-pointer hover:scale-105 ">
    <div className='flex p-4 pb-0 mb-0 '>
    <div className='flex flex-col '>
    <p className=' text-xl font-bold'>Overview</p>
    <p className=' text-slate-400 text-xs'>Monthly Earning</p>
    </div>
    
    <select className='ml-auto text-slate-400 text-xs bg-slate-50 rounded-md h-7 p-1'>
    <option value="quartely">Quarterly</option>
    <option value="quartely">Half-yearly</option>
    <option value="quartely">Yearly</option>
    </select>
    </div>
      <ReactApexChart 
        options={TotalRevenueOptions}
        series={TotalRevenueSeries}
        type="bar"
        height={250}
        
      />
    </div>
  );
};

export default BarChart;
