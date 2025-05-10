$(function(){
    $(".warning").hide();
    $("#add-btn").on("click", function(){
        const file = $("#snap")[0].files[0];
        let caption = $("#caption").val().trim();

        if (!file){
            $(".warning").text("Please add a picture.");
            $(".warning").show();
        }
        else if (caption === "")
        {
            $(".warning").text("Please write a caption.");
            $(".warning").show();
        }
        else{
            $(".warning").hide();
            localStorage.setItem("caption", caption);

            $("#snap").val('');
            $("#caption").val("");
            $(".warning").text("Snap added successfully.");
            $(".warning").css("color", "green");
            $(".warning").show();
            setTimeout(function(){
                $(".warning").hide();
                 $(".warning").css("color", "red");

            }, 3000);
        }
    });
});

$("#snap").on("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const base64 = e.target.result;

      localStorage.setItem("mySingleFile", base64);
    };

    reader.readAsDataURL(file);
  }
});

$(function(){
    $(".back-btn").on("click", function(){
        window.location.href = "../pages/time-snaps-menu.html";
    });
});