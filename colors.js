var Links = {
    setColor:function(color){
        // var alist = document.querySelectorAll('a'); 
        // var i = 0;
        // while(i<alist.length){
        //         alist[i].style.color=color;
        //         i=i+1;
        //     }
        $('a').css('color', color);
        }
}
var Body = {
    setColor:function(color){
        // document.querySelector('body').style.color=color;
        $('body').css('color', color);
    },
    backgroundColor:function(color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightday(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.backgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        target.style.borderColor = 'red';
        Links.setColor('rgb(255,255,255)');
    } else {
        Body.backgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        target.style.borderColor = 'blue';
        Links.setColor('rgb(0,0,0)');
    }
}