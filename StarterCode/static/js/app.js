
function buildMetadata(currentID) {
   let demoInfo = d3.select("#sample-metadata");

   d3.json("samples.json").then(data => {
      let metadata = data.metadata
      let filteredData = metadata.filter(Info => Info.id == currentID)[0]
        console.log(filteredData)
      Object.entries(filteredData).forEach(([key,value]) => {
         demoInfo.append("p").text(`${key}: ${value}`)
      })
   })
}




d3.json('samples.json').then(function(resp){
    let dataNames = resp.names
    console.log(dataNames)
    let dropDown = d3.select('#selDataset')
    dropDown.html('')
    dataNames.forEach(element => {
    dropDown.append('option').property('value', element).text(element)
    });
    buildChart(940)
    buildMetadata(940)
})

function optionChanged(currentID){
    buildChart(currentID)
    buildMetadata(currentID)
}


function buildChart(currentID){
    d3.json('samples.json').then(function(resp){
        console.log(resp)
        let sampleData = resp.samples
        let fiteredSample = sampleData.filter(person => person.id == currentID)[0]
        console.log(fiteredSample)
        let otuId = fiteredSample.otu_ids
        let sampleValues = fiteredSample.sample_values
        let otuLabels = fiteredSample.otu_labels
        let trace1 = {
            y: otuId.slice(0,10).map(OTU=>`OTU ${OTU}`).reverse(),
            x: sampleValues.slice(0,10).reverse(),
            text: otuLabels.slice(0,10).reverse(),
            name: 'OTUs',
            type: 'bar',
            orientation: 'h'
        };
    

    
        let bellyData = [trace1];
    
        let bellyLayout = {
            title: 'OTU Belly Button Biodiversity'
            
    
    
        };
    
    
        Plotly.newPlot('bar', bellyData, bellyLayout);

        
        
        let bellyBubData = [{
            x: otuId,
            y: sampleValues,
            mode: "markers",
            text: otuLabels,
            marker: {
                color: otuId,
                size: sampleValues,
            }
            
        }];
    
        let bellyBubLayout = {
            margin: {t: 100},
            xaxis: { title: "OTU ID"},
        };
        
        Plotly.newPlot('bubble', bellyBubData, bellyBubLayout);
    
    })
    


    

};


    