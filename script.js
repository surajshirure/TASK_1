// craete an instance of xmlhttp request
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    for(var i in data)
    console.log(data[i].name)

    //console.log(data);
}