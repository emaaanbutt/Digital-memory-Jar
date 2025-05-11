$(function() {
    $("#alert").hide();
    const snaps = JSON.parse(localStorage.getItem("snaps")) || [];
    let currentIndex = 0;

    function renderPolaroid(index) {
        $("#gallery").empty(); 
        if (snaps.length === 0){
            $("#polaroid-container").hide();
            $("#alert").show();
            return;
        } 

        $("#polaroid-container").show();
        const img = $("<img>").attr("src", snaps[index].image);
        const snapDiv = $("<div>").addClass("snap").append(img);
        const caption = $("<p>").text(snaps[index].caption);
        const captionDiv = $("<div>").addClass("caption").append(caption);
        const buttonDiv = $("<button>").addClass("del-btn").text("Delete");
        const polaroid = $("<div>").addClass("polaroid").append(snapDiv, captionDiv, buttonDiv);

        $("#gallery").append(polaroid);
    }

    renderPolaroid(currentIndex);

    $("#right").on("click", function() {
        if (currentIndex < snaps.length - 1) {
            currentIndex++;
            renderPolaroid(currentIndex);
        }
    });

    $("#left").on("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            renderPolaroid(currentIndex);
        }
    });


     $(document).on("click", ".del-btn", function(){
        snaps.splice(currentIndex, 1); 
        localStorage.setItem("snaps", JSON.stringify(snaps));

        if (currentIndex >= snaps.length) {
            currentIndex = snaps.length - 1;
        }

        renderPolaroid(currentIndex);
    });
});

$(function(){
    $("#back-btn").on("click", function(){
        window.location.href = "../pages/time-snaps-menu.html";
    });
});