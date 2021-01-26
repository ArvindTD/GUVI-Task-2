var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function()
{
    var data = JSON.parse(this.response); 
     console.log(data);      // print all the data in rest countries.
     for (var i = 0; i< data.length; i++)
        {
            console.log(data[i].name);     //print name of all countries.

            console.log(data[0].name);     //print 1st country name
            console.log(data[1].name);     //print second country name

}
}