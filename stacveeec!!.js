const express = require('express')
const app = express()
app.use("/images" , express.static('images'))
var minion = {
    top: 0,
    left: 0,
}
app.get('/:top?/:left?', function(req, res){
    var top=parseInt(req.params.top)
    var left=parseInt(req.params.left)

    if(!isNaN(top) && !isNaN(left)){
        minion.top += top
        minion.left += left
    }

    console.log(minion)
   var html= '<html><head><style> tr,td {border: 1px solid black; width: 50px; height: 50px}; </style></head><body><table>'
   for (i = 0; i<=3; i++){
    html+='<tr>'
    for (j = 0; j <=3; j++){
        html += '<td>'
        
        if(j==minion.top && i==minion.left ){
            html+= '<img src="/images/minion.jpg" height="40" width="40">';
        }
    
    html+='</td>'
   }html+='</tr>'
   
}
html+='</table></body></html>'
res.send(html)
})
   
app.listen(3000, function(req, res){
    console.log('runing')
})
