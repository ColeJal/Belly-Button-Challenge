// let currentID = 940







// let otuIds = [944, 2419, 1795, 2722, 2539, 2859, 482, 2011, 1167, 1839, 728, 939, 963, 2651, 922, 1870, 2275, 2985, 3450, 1335, 2782, 888, 2461, 2389, 2396, 909, 2964, 3476, 2704, 1314, 943, 2318, 919, 1977, 2244, 1189, 2404, 930, 854, 2500, 2558, 1950, 3643, 1188, 352, 1453, 811, 1286, 1200, 2039, 920, 2908, 3581, 3541, 555, 830, 2089, 959, 2820, 2692, 1600, 1724, 2532, 41];

// let sampleValues = [338, 178, 145, 142, 67, 59, 57, 46, 35, 27, 26, 26, 25, 22, 20, 16, 14, 14, 12, 12, 11, 10, 10, 8, 8, 7, 7, 6, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

// let otuLabels = ["Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", 
//     "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Bacilli;Lactobacillales", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium",
//     "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Dermabacteraceae;Dermabacter", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Bacilli;Lactobacillales;Aerococcaceae",
//     "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae;Dialister", "Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus",
//     "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae", "Bacteria;Proteobacteria;Gammaproteobacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia",
//     "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Mobiluncus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia", "Bacteria;Synergistetes;Synergistia;Synergistales;Synergistaceae;Jonquetella", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria",
//     "Bacteria;Cyanobacteria;Cyanobacteria;Chloroplast;Streptophyta", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;Peptococcaceae;Peptococcus", "Bacteria;Proteobacteria;Gammaproteobacteria;Pseudomonadales;Pseudomonadaceae;Pseudomonas", "Bacteria;Proteobacteria;Gammaproteobacteria;Pseudomonadales;Moraxellaceae;Acinetobacter", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Dermabacteraceae;Dermabacter", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Firmicutes;Bacilli",
//     "Bacteria;Firmicutes;Bacilli;Bacillales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria"]

// let sampleValues = []
// let otuIds = []
// let otuLabels = []

// for (let i = 0; i < samples.length; i++) {
//     row = bellyButtonData[i]
// }


// let trace1 = {
//     x: otuIds,
//     y: sampleValues,
//     text: otuLabels,
//     name: 'OTUs',
//     type: 'bar',
//     orientation: 'h'
// };


// let bellyData = [trace1];

// let bellyLayout = {
//     title: 'OTU Belly Button Biodiversity'
//     // margin: {
//     //     l: 100,
//     //     r: 100,
//     //     t: 100,
//     //     b: 100
    
//     // }


// };
d3.json('samples.json').then(function(resp){
    let dataNames = resp.names
    console.log(dataNames)
    let dropDown = d3.select('#selDataset')
    dropDown.html('')
    dataNames.forEach(element => {
    dropDown.append('option').property('value', element).text(element)
    });
    buildChart(940)
})

function optionChanged(currentID){
    buildChart(currentID)
}

// Plotly.newPlot('bar', bellyData, bellyLayout);
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
            // margin: {
            //     l: 100,
            //     r: 100,
            //     t: 100,
            //     b: 100
            
            // }
    
    
        };
    
    
        Plotly.newPlot('bar', bellyData, bellyLayout);
        
        let bellyBubData = {
            x: otuId,
            y: sampleValues,
            mode: "markers",
            text: otuLabels,
            marker: {
                color: otuId,
                size: sampleValues,
            }
            
        }
    
        let bellyBubLayout = {
            margin: {t: 100},
            xaxis: { title: "OTU ID"},
            hovermode: "closest",
        };
            Plotly.newPlot('bubble', bellyBubData, bellyBubLayout);
    
    })
    
    // console.log(resp)

}

init();
    // let bellyBubData = {
    //     x: otuId,
    //     y: sampleValues,
    //     mode: "markers",
    //     text: otuLabels,
    //     marker: {
    //         color: otuId,
    //         size: sampleValues,
    //     }
        
    // }

    // let bellyBubLayout = {
    //     margin: {t: 0},
    //     xaxis: { title: "OTU ID"},
    //     hovermode: "closest",
    // };
    //     Plotly.newPlot('bubble', bellyBubData, bellyBubLayout);

// d3.json('samples.json').then(function(resp){
//     console.log(resp)
//     let sampleData = resp.samples
//     let fiteredSample = sampleData.filter(person => person.id == currentID)[0]
//     console.log(fiteredSample)
//     let otuId = fiteredSample.otu_ids
//     let sampleValues = fiteredSample.sample_values
//     let otuLabels = fiteredSample.otu_labels
//     let trace1 = {
//         y: otuId.slice(0,10).map(OTU=>`OTU ${OTU}`).reverse(),
//         x: sampleValues.slice(0,10).reverse(),
//         text: otuLabels.slice(0,10).reverse(),
//         name: 'OTUs',
//         type: 'bar',
//         orientation: 'h'
//     };


//     let bellyData = [trace1];

//     let bellyLayout = {
//         title: 'OTU Belly Button Biodiversity'
//         // margin: {
//         //     l: 100,
//         //     r: 100,
//         //     t: 100,
//         //     b: 100
        
//         // }


//     };


//     Plotly.newPlot('bar', bellyData, bellyLayout);


// })

