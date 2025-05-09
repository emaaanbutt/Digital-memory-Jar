let currentPage = 0;

$(function(){
   let saved_book = localStorage.getItem("book_saved");
    if (saved_book){
        $(".book").html(saved_book);

        $('.page').each(function(index) {
            const total = $('.page').length;
            $(this).css('z-index', total - index);
        });
    }
});

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
    $("#add-memory-page").hide();
    $("#add-memory").on("click", function(){
        $("#add-memory-page").toggle();
    });

    $("#add").on("click", function(){
        let title = $("#title").val();
        let memory = $("#memory").val();
    
        let book = $(".book");

        let page = `<div class="page">
                    <div class="memory-title">
                    ${title}</div>
                    <div class="memory-desc">
                    ${memory}</div>
                    </div>`;

        book.append(page);
        $("#title").val("");
        $("#memory").val("");

        localStorage.setItem("book_saved", book.html());

        $("#add-memory-page").hide();
        
    });
});