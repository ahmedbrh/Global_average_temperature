

const xlabel = [] ; 
const ylabel = [] ; 

getData() ; 
ChartIt() ; 



//API 

async function getData () { 

    const response  =  await fetch('ZonAnn.Ts+dSST.csv') ;
     const data  = await response.text(); 
     console.log(data);
    
     const columns  = data.split(/\n/).slice(1); 
    
     columns.forEach ((element) => {
    
    // console.log(element);
    const table = element.split(','); //  split the comma
    const year = table[0]
    xlabel.push(year) ; // fort the chart 
    const temp = table [1] ;
    ylabel.push( parseFloat(temp)+14); // for the chart + 15 to convert   
    
    console.log(table);
    console.log(year,temp);
     
    
     });
    //  console.log(columns);
     
    
    
    } 

    // Drawing the Chart  ! "chartJs"
    
function ChartIt() { 
    
    Chart.defaults.global.defaultFontColor = 'whitesmoke';
  
const ctx = document.getElementById('chart').getContext('2d');

const myChart = new Chart(ctx, {
 
    type: 'line',

    
    data: {
      
        labels: xlabel,
        datasets: [{
            label: "Températures moyenne  planétaires ",
            data: ylabel , 
            fill : false ,
            pointStyle : 'rectRot'  , 
         
           
            backgroundColor: 
        "darkgrey",
        
    
            borderColor: 
                ['tomato'],
            borderWidth: 2
            
        }]
    } , options: {
  
            elements: {
                line: {
                    tension: 0
                  
                }
            },
        
        scales: {
            yAxes: [{
                ticks: {
                    
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        
                        return value +  '°C' ;
                    }
                }
            }]
        }
    }
}
);



}

