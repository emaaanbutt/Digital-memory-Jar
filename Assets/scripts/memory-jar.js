let currentPage = 0;

function flipNext() {
  const pages = document.querySelectorAll('.page');
  if (currentPage < pages.length) {
    pages[currentPage].classList.add('flipped');
    currentPage++;
  }
}

function flipPrev() {
  const pages = document.querySelectorAll('.page');
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove('flipped');
  }
}

$(function(){
    $("#return-btn").on("click", function(){
        window.location.href = "./main.html";
    });
});


$(function(){
    $("#add-memory").on("click", function(){

    });
});