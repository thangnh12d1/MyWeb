//Create OVERLAY when click on details button.
$('.product-container').on('click','.details',function(event){
  event.preventDefault();
  $('#overlay img').attr('src',$(this).next().next().text());
  $('#overlay h5').text($(this).next().next().next().next().next().next().next().next().text());
  $('#v-pills-brand').text($(this).next().next().next().text());
  $('#v-pills-description').text($(this).next().next().next().next().text());
  $('#spec1').text($(this).next().next().next().next().next().text());
  $('#spec2').text($(this).next().next().next().next().next().next().text());
  $('#spec3').text($(this).next().next().next().next().next().next().next().text());
  var pos = $(this).parent().parent().position();
  $('#details-container').css('top',pos.top);
  $('#overlay').show();
});

$('#overlay').find('#btn-close').click(function(){
    $('#overlay').hide();
});