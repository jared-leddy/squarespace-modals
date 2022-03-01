<div id="modal">
  <div class="modal-body">
    <div class="modal-close">
    <span class="fa fa-times"></span>
  </div>
  <div class="left">
    <img src="img.jpg">
    <h1>Now providing complete catering services!</h1>
    <p>The same amazing food and friendly staff you have come to love at McGahs can now cater your next event.</p>
    <p>Please call 925-548-7999 or email <a href="http://mcgahs.com">info@mcgahs.com</a>.</p>
    <img src="img.png">
  </div>
</div>

$(document).ready(function(){
  if(localStorage.cateringmodal :-- '1') {
    $('#collection #modal').show{};
  }
  $('body').on('click', '.modal-close', function() {

    window.localStorage.setItem('cateringmodal', '1');
    $('#modal').hide();

  };
});
