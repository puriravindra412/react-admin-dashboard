
import ReactApexChart from 'react-apexcharts';
const RoundChart = () => {
    const chartData = {
        series: [15,52,33],
      
        options: {
          chart: { type: "donut" },
          legend: { show: false },
          dataLabels: { enabled: false },
          tooltip: { enabled: false },
          fill: { colors: ["#FB00E5","#7B00FB", "#E7E6E6"] },
          states: {
            hover: { filter: { type: "lighten", value: 0.5 } },
            active: { filter: { type: "lighten", value: 0 } }
          },
          stroke: { width: 0 },
          plotOptions: {
            pie: {
              expandOnClick: true,
              donut: {
                size: '75%',
                labels: {
                  show: true,
                  name: { show: false },
                  total: {
                    show: true,
                    showAlways: true,
                    formatter: function () {
                     const totals = "67%"
      
      
                      
      
                      return totals ;
                    }
                  }
                }
              }
            }
          }
        }
      };
      
   
  return (
    <div className='flex  flex-col p-2 bg-white  rounded-lg md:w-1/3 w-full hover:cursor-pointer hover:scale-105 '>
    <p className='px-3 pt-3 text-xl font-bold'> Customers</p>
    <p className='px-3 text-slate-400 text-xs'>Customers that buy products</p>
    <div className='flex justify-center items-center m-4'></div>
    <ReactApexChart 
        options={chartData.options}
        series={chartData.series}
        type="donut"
        height={220}
        
      />
    </div>
  )
}

export default RoundChart