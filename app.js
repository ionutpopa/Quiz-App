var score = 0;

$("#score").append(score);

const scoreFunction = () => {
  score++;
  $("#score").text(score);
};

const colorThree = () => {
  $(".three").addClass("btn-success");
  $(".three").text("correct");
  $(".three").attr("disabled", true);
  $(".two").attr("disabled", true);
  $(".one").attr("disabled", true);
};

const colorFour = () => {
  $(".four").addClass("btn-success");
  $(".four").text("correct");
  $(".four").attr("disabled", true);
  $(".five").attr("disabled", true);
  $(".six").attr("disabled", true);
};

const colorEight = () => {
  $(".eight").addClass("btn-success");
  $(".eight").text("correct");
  $(".nine").attr("disabled", true);
  $(".eight").attr("disabled", true);
  $(".seven").attr("disabled", true);
};

const colorTen = () => {
  $(".ten").addClass("btn-success");
  $(".ten").text("correct");
  $(".ten").attr("disabled", true);
  $(".eleven").attr("disabled", true);
  $(".twelve").attr("disabled", true);
};

const colorFourteen = () => {
  $(".fourteen").addClass("btn-success");
  $(".fourteen").text("correct");
  $(".fourteen").attr("disabled", true);
  $(".fifteen").attr("disabled", true);
  $(".thirteen").attr("disabled", true);
};

const wrongFirstRow = () => {
  $(".one").attr("disabled", true);
  $(".two").attr("disabled", true);
  $(".three").attr("disabled", true);
};

const wrongSecondRow = () => {
  $(".four").attr("disabled", true);
  $(".five").attr("disabled", true);
  $(".six").attr("disabled", true);
};

const wrongThirdRow = () => {
  $(".seven").attr("disabled", true);
  $(".eight").attr("disabled", true);
  $(".nine").attr("disabled", true);
};

const wrongFourthRow = () => {
  $(".ten").attr("disabled", true);
  $(".eleven").attr("disabled", true);
  $(".twelve").attr("disabled", true);
};

const wrongFifthRow = () => {
  $(".thirteen").attr("disabled", true);
  $(".fourteen").attr("disabled", true);
  $(".fifteen").attr("disabled", true);
};

$(document).ready(() => {
  $("#score").val(score);
  $("#score")
  //correct ones
  $(".three").on("click", scoreFunction);
  $(".three").on("click", colorThree);

  $(".four").on("click", scoreFunction);
  $(".four").on("click", colorFour);

  $(".eight").on("click", scoreFunction);
  $(".eight").on("click", colorEight);

  $(".ten").on("click", scoreFunction);
  $(".ten").on("click", colorTen);

  $(".fourteen").on("click", scoreFunction);
  $(".fourteen").on("click", colorFourteen);
  //incorrect ones
  $(".one").on("click", wrongFirstRow);
  $(".one").on("click", () => {
    $(".one").addClass("btn-danger");
  });

  $(".two").on("click", wrongFirstRow);
  $(".two").on("click", () => {
    $(".two").addClass("btn-danger");
  });

  $(".five").on("click", wrongSecondRow);
  $(".five").on("click", () => {
    $(".five").addClass("btn-danger");
  });

  $(".six").on("click", wrongSecondRow);
  $(".six").on("click", () => {
    $(".six").addClass("btn-danger");
  });

  $(".seven").on("click", wrongThirdRow);
  $(".seven").on("click", () => {
    $(".seven").addClass("btn-danger");
  });

  $(".nine").on("click", wrongThirdRow);
  $(".nine").on("click", () => {
    $(".nine").addClass("btn-danger");
  });

  $(".eleven").on("click", wrongFourthRow);
  $(".eleven").on("click", () => {
    $(".eleven").addClass("btn-danger");
  });

  $(".twelve").on("click", wrongFourthRow);
  $(".twelve").on("click", () => {
    $(".twelve").addClass("btn-danger");
  });

  $(".thirteen").on("click", wrongFifthRow);
  $(".thirteen").on("click", () => {
    $(".thirteen").addClass("btn-danger");
  });

  $(".fifteen").on("click", wrongFifthRow);
  $(".fifteen").on("click", () => {
    $(".fifteen").addClass("btn-danger");
  });
});
