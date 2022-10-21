function GetAge() {
    let Ages = document.getElementById("Age").value;
    return Ages;
}
function GetName() {
    let Name = document.getElementById("Name").value;
    return Name;
}
function GetDistance() {
    let Km = document.getElementById("Distance").value;
    return Km;
}
var test=0.00;
sessionStorage.setItem('tot',test)
function Calcola(){
    var Ages=GetAge();
    var Km=GetDistance();
    var Name=GetName();
    const fisso= (Km*0.21);
    var SingleP = fisso;
    let element = document.createElement("P");
    if(Ages<18){
        SingleP= fisso - (fisso/100*20).toFixed(2);
        element.innerHTML = `${Name} <span>${fisso}$</span> ${SingleP}$`;
    }else if(Ages>65){
        SingleP= fisso - (fisso/100*40).toFixed(2);
        element.innerHTML = `${Name} <span>${fisso}$</span> ${SingleP}$`;
    }else{element.innerHTML = `${Name} ${SingleP}$`;}
    document.getElementById('Age').value=null;
    document.getElementById('Name').value=null;
    document.getElementById("passeggeri").append(element);
    var sum=(parseFloat(sessionStorage.getItem('tot'))+SingleP);
    sessionStorage.setItem('tot',sum);
}
function GetTotal(){
    var tot=(parseFloat(sessionStorage.getItem('tot')));
    tot=tot.toFixed(2);
    document.getElementById('total').innerHTML=`${tot}$`;
    var element = document.getElementById("action");
    element.style.display = "none";

}