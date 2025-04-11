function showMessage() {
  const blessings = [
    "You are loved more than you know.",
    "God's light is guiding you today.",
    "Faith moves mountains—keep believing.",
    "You are a blessing to others.",
    "Miracles happen when you least expect them."
  ];
  const randomBlessing = blessings[Math.floor(Math.random() * blessings.length)];
  document.getElementById("blessing").textContent = randomBlessing;
}
