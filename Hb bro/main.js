$(document).ready(function() {
    $(function () {
        var flame = $("#flame");
        var txt = $("h1");

        flame.on({
            click: function () {
                flame.removeClass("burn").addClass("puff");
                $(".smoke").each(function () {
                    $(this).addClass("puff-bubble");
                });
                $("#glow").remove();
                txt.hide().html("Happy Birthday Sufyan! 🎉").delay(750).fadeIn(300);

                //img add
                setTimeout(function () {
                    if ($("#birthday-image").length === 0) {
                        $("body").append('<img id="birthday-image" src="bro%20pic.jpg" alt="Sufyan" style="display:none; width: 200px; height: 200px; position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); border-radius: 10px; box-shadow: 0 0 20px rgba(255,255,255,0.8);">');
                        $("#birthday-image").fadeIn(1000);
                    }
                }, 1000);

                $("#candle").animate(
                    {
                        opacity: ".5"
                    },
                    100
                );
            }
        });
    });
});
