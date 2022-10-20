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
function Calcola(){
    var Ages=GetAge();
    var Km=GetDistance();
    var Name=GetName();
    const fisso= Km*0.21;
    var SingleP = fisso;
    let element = document.createElement("P");
    if(Ages<18){
        SingleP= fisso - (fisso/100*20);
        element.innerHTML = `${Name} <span>${fisso}$</span> ${SingleP}$`;
    }else if(Ages>65){
        SingleP= fisso - (fisso/100*40);
        element.innerHTML = `${Name} <span>${fisso}</span> ${SingleP}$`;
    }else{element.innerHTML = `${Name} ${SingleP}$`;}
    document.getElementById('Age').value=null;
    document.getElementById('Name').value=null;
    document.getElementById("passeggeri").append(element);

}
