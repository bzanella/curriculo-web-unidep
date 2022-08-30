const player = document.querySelector("#player");
const obstacle = document.querySelector("#obstacle");
const jump = () => {
  player.classList.add("jump");
  setTimeout(() => {
    player.classList.remove("jump");
  }, 500);
};
const loop = setInterval(() => {
  const obstaclePosition = obstacle.offsetLeft;
  const playerPosition = window
    .getComputedStyle(player)
    .bottom.replace("px", "");

  if (obstaclePosition <= 33 && obstaclePosition > 8 && playerPosition < 10) {
    obstacle.style.animation = "none";
    obstacle.style.left = `${obstaclePosition}px`;

    player.style.animation = "none";
    player.style.bottom = `${playerPosition}px`;

    clearInterval(loop);
  }
}, 10);
document.addEventListener("click", jump);
document.addEventListener("keydown", jump);

function playAgain() {
  location.reload();
}
