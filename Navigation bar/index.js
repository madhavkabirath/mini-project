var navstatus=0;


function OpenNav()
{
    if(!navstatus)
    {
        $('.maindiv').css('width','100%')
        $('li').css('display','block')
        navstatus=1
    }   
    else
    {
        $('.maindiv').css('width','0')
        $('.li').css('display','none')
        navstatus=0
    } 
}