$.ajax({
    type :'get',
    url : 'https://themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    success : function(response)
    {
        for(var i=0;i<response.meals.length;i++)
        {
            var newitem=`<div class='col-md-3 m-2'>
                <p>${response.meals[i].strMeal}</p>
                <img src=${response.meals[i].strMealThumb}/>
                <p>${response.meals[i].idMeal}</p>            
            </div>`

            $('#myitems').append(newitem)
        }
    },
    error :function(error)
    {
        console.log(error)
    }

})