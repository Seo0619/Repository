var links ={
    setCOLOR:function(color){
        // var alist = document.querySelectorall('a');
        // var i=0;
        // while(i< alist.length){
        //     alist[i].style.color = color;
        //     i++;
        // }   
        $('a').css("color",color);
    }
}
var body ={
    setCOLOR: function(color){
        $('body').css('color',color);
    }
    ,
    setBGCOLOR : function(color){
        $('body').css('backgroundColor',color);
    }

}

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
       body.setCOLOR('white');
       body.setBGCOLOR('black');
       self.value = 'day';
       links.setCOLOR('powderblue');
       
    } 
    else {
        self.value = 'night';
        body.setCOLOR('black');
        body.setBGCOLOR('white');
        links.setCOLOR('blue');
    }
}