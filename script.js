const distA = {
    name:"Distributor A",
    lastMonGoods: 10,
    nextMonGoods: 12,
    aveGoods: 15
}
console.log("distributor a:", distA);
let genButton=document.querySelector(".gen-report");

genButton.addEventListener("click", (event)=>{
console.log("pressed.\n");
let report=document.createElement("report");
report.innerHTML= `
<ul>
<li> Distributor Name: ${distA.name}</li>
<li> Quantity of Goods Shipped Last Month: ${distA.lastMonGoods}</li>
<li> Forcasted Quantity of Goods to Ship Next Month: ${distA.nextMonGoods}</li>
<li> Year-to-Date Average Goods Shipped per Month: ${distA.aveGoods}</li>
</ul>`;
document.querySelector(".maincontent").append(report);
});

