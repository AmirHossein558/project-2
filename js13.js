$(document).ready(function() {
    let maxNumber;
    let targetNumber;
    let attempts;
    let remainingAttempts;

    function startGame() {
        maxNumber = parseInt(prompt("لطفاً یک عدد به عنوان ماکسیمم وارد کنید (باید بزرگتر از 10 باشد):"));
        if (isNaN(maxNumber) || maxNumber < 10) {
            alert("عدد وارد شده معتبر نیست. لطفاً عددی بزرگتر از 10 وارد کنید.");
            startGame();
        } else {
            targetNumber = Math.floor(Math.random() * maxNumber) + 1;
            attempts = Math.ceil(Math.log2(maxNumber));
            remainingAttempts = attempts;
            $("#message").text(`شما ${remainingAttempts} شانس دارید تا عدد هدف را حدس بزنید.`);
            $("#guess-input").val('');
        }
    }

    function checkGuess() {
        let guess = parseInt($("#guess-input").val());
        if (isNaN(guess)) {
            alert("عدد وارد شده معتبر نیست. لطفاً یک عدد وارد کنید.");
            return;
        }
        remainingAttempts--;
        if (guess === targetNumber) {
            $("#message").text("تبریک! شما برنده شدید.").css("background-color", "#c8e6c9").css("border-color", "#388e3c").css("color", "#2e7d32");
        } else if (remainingAttempts === 0) {
            $("#message").text(`شما بازنده شدید. عدد هدف ${targetNumber} بود.`).css("background-color", "#ffcdd2").css("border-color", "#d32f2f").css("color", "#c62828");
        } else {
            if (guess < targetNumber) {
                $("#message").text(`عدد وارد شده کوچکتر از هدف است. شما ${remainingAttempts} شانس دیگر دارید.`).css("background-color", "#e0f7fa").css("border-color", "#00acc1").css("color", "#00796b");
            } else {
                $("#message").text(`عدد وارد شده بزرگتر از هدف است. شما ${remainingAttempts} شانس دیگر دارید.`).css("background-color", "#e0f7fa").css("border-color", "#00acc1").css("color", "#00796b");
            }
        }
        $("#guess-input").val('');
    }

    $("#submit-guess").click(function() {
        checkGuess();
    });

    $("#restart").click(function() {
        startGame();
    });

    $("#help").click(function() {
        alert("در این بازی شما باید یک عدد را حدس بزنید. ابتدا یک عدد به عنوان ماکسیمم وارد کنید. سپس عدد هدف به صورت رندوم تعیین می‌شود. شما باید عدد هدف را حدس بزنید. اگر عدد وارد شده کوچکتر یا بزرگتر از هدف بود، راهنمایی خواهید شد.");
    });

    startGame();
});
