var obnizNoble = require('obniz-noble')
var noble = obnizNoble("OBNIZ_ID_HERE") 

noble.on('discover', function(peripheral){
    console.log(peripheral)
})

noble.startScanning()