$(function() {
    $(".warning").hide();

    $("#add-btn").on("click", function() {
        const file = $("#snap")[0].files[0];
        let caption = $("#caption").val().trim();

        if (!file) {
            $(".warning").text("Please add a picture.").show();
        } else if (caption === "") {
            $(".warning").text("Please write a caption.").show();
        } else {
            const reader = new FileReader();
            reader.onload = function(e) {
                const base64 = e.target.result;

                let snaps = JSON.parse(localStorage.getItem("snaps")) || [];

                snaps.push({
                    image: base64,
                    caption: caption
                });

                localStorage.setItem("snaps", JSON.stringify(snaps));

                $("#snap").val('');
                $("#caption").val("");
                $(".warning").text("Snap added successfully.").css("color", "green").show();

                setTimeout(() => {
                    $(".warning").hide().css("color", "red");
                }, 3000);
            };
            reader.readAsDataURL(file);
        }
    });
});

$(function(){
    $(".back-btn").on("click", function(){
        window.location.href = "../pages/time-snaps-menu.html";
    });
});