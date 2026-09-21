(() => {
  const grid = document.querySelector("#games-grid");
  const games = window.IWAMY_GAMES;
  if (!grid || !Array.isArray(games) || games.length === 0) return;

  grid.replaceChildren(...games.map((game) => {
    const article = document.createElement("article");
    article.className = "game-card";
    const link = document.createElement("a");
    link.className = "game-card-link";
    link.href = game.href;
    link.setAttribute("aria-label", `${game.title}の詳細を見る`);
    const figure = document.createElement("figure");
    figure.className = "game-card-media";
    const image = document.createElement("img");
    image.src = game.image;
    image.width = game.imageWidth;
    image.height = game.imageHeight;
    image.alt = game.alt;
    figure.append(image);
    const copy = document.createElement("div");
    copy.className = "game-card-copy";
    const status = document.createElement("span");
    status.className = "status-label";
    status.textContent = game.status;
    const title = document.createElement("h3");
    title.textContent = game.title;
    const description = document.createElement("p");
    description.textContent = game.description;
    const cta = document.createElement("span");
    cta.className = "inline-cta";
    cta.innerHTML = '作品を見る <span aria-hidden="true">→</span>';
    copy.append(status, title, description, cta);
    link.append(figure, copy);
    article.append(link);
    return article;
  }));
})();
