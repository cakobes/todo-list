$("ul").on("click","li",function () {
  
    $(this).toggleClass("completed"); 

});
//click on X to delete to todo
$("ul").on("click","span",function (event) {
    $(this).parent().fadeOut(500,function () {
        $(this).remove();
    });
    event.stopPropagation();
});
$("input").keypress(function (event) {
    if (event.which === 13 && this.value.length>0) {
        var newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ newTodo+"</li>");
    } 
});

$(".fa-plus").click(function () {
    $("input").fadeToggle();
});

