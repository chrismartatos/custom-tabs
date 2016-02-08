$(function()
{
	tabs_init();
});

/*--------------------------------------------------------------------------
			TABS
---------------------------------------------------------------------------*/
function tabs_init()
{
var tabs = $('#tabs');
	
  if(tabs.length)
  {    
	//tabs
	var tab_content = tabs.find('.tab-content'),
		tab_title = tabs.find('.tab-title'),
		count_tabs =  tab_title.length;
    
     //Hide-empty
     tab_content.each(function(i)
     {
      	if($(this).text().length == 0)
      	{ 
      		var target = $(this).attr("id");
	  		
	  		tab_title.find("."+target).hide();
      	} else {
	      	$(this).show();
      	}
     });
    
    //Hide all tabs if not active 
    if($('#tabs .tab-content:not(:visible)').length == count_tabs) 
    { 
      tabs.hide(); 
    }
   
    //Tabs init
    tabs.each(function(i)
    {
      //Get all tabs
      var tab = $(".tab-title .tab-btn");
      
      tab.click(function(e)
      {  
                 
        //Get Location of tab's content
        var contentLocation = $(this).attr('href');
        
        //Let go if not a hashed one
        if(contentLocation.charAt(0)=="#") 
        {
          e.preventDefault();
  
          //Make Tab Active
          tab.removeClass('active');
          tab_content.removeClass('active');
          
          $(this).addClass('active');
          
           //Show Tab Content & add active class
           $(contentLocation).fadeIn().addClass('active');
           
           var gutter = 60;
           var menu_height = tab_title.height()+gutter;
           var total_height = $(contentLocation).height()+menu_height;
                     
           tabs.css('height', total_height);
           
           $("#tabs .tab-content:not(.active)").fadeOut().removeClass('active');
        }  
      });
    }); 
    
    //Init First visible title
    $('#tabs .tab-title .tab-btn:visible').eq(0).addClass('active').click();
    //Init First visible tab
    $('#tabs .tab-content:visible').eq(0).addClass('active');
    
  }   
}