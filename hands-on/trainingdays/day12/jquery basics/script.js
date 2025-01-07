
function FindArea(x, y){
    return x*y;
}

function FindPerimeter(x,y){
    return 2*(parseInt(x)+ parseInt(y));
}



$(()=>{
    $("#area").click(function(){
        const area = FindArea(parseInt($("#len").val()), parseInt($("#brd").val()));
        $("#out").text(`Area is ${area}`);
    });
    $("#peri").click(function(){
        const peri = FindPerimeter(parseInt($("#len").val()), parseInt($("#brd").val()));
        $("#out").text(`Perimeter is ${peri}`);
    });
    $("#both").click(function(){
        
        const area = FindArea(parseInt($("#len").val()), parseInt($("#brd").val()));
        const peri = FindPerimeter(parseInt($("#len").val()), parseInt($("#brd").val()));
        $("#out").text(`Area is ${area}, Perimeter is ${peri}`);
    });
});
    
