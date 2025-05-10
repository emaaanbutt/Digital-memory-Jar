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
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                    </div>`;

        book.append(page);
        $("#title").val("");
        $("#memory").val("");

        localStorage.setItem("book_saved", book.html());

        $("#add-memory-page").hide();
        
    });
});


$(function(){
  $(document).on("click",".delete", function(){
    $(this).parent().remove();
    localStorage.setItem("book_saved", $(".book").html()); 
  });
});


$(function(){
  $(document).on("click", ".edit", function(){
    const parent = $(this).closest(".page");
    const title = parent.find(".memory-title").text().trim();
    const desc = parent.find(".memory-desc").text().trim();


    $("#add-memory-page").show();

    $("#title").val(title);
    $("#memory").val(desc);

    parent.remove();
  });
});