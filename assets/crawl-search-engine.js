const crawlPage = (engineToUse, keyword) => {
    var url = "http://localhost:999/getContents.php" + "?kw=" + keyword + '&engine=' + engineToUse;
    url = encodeURI(url);
    console.log(url);
    $.ajax({
        url:url,
        dataType: 'json',
        success:function(json){
            loadSearchResults(json);
        },
        error:function(){
            
        }      
   });
}
const loadSearchResults = ($results) => {
    $appendTo = $(".web-results .results")
    $appendTo.html("");//Reset the container before loading another result
    for(var result = 0; result < $results.length; result++){
        var theResult = '<span class = "result"><a href = "' + $results[result].link + '"><strong>' + $results[result].title + '</strong><span class="bread-crumbs">' + $results[result].bread + '</span><p>' + $results[result].desc + '</p></a></span>'
        $appendTo.append(theResult); 
    }
}
