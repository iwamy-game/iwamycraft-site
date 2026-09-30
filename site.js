(() => {
  const grid = document.querySelector("#games-grid");
  const games = window.IWAMY_GAMES;
  if (grid && Array.isArray(games) && games.length > 0) {
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
      image.loading = "lazy";
      image.decoding = "async";
      image.alt = game.alt;
      const status = document.createElement("span");
      status.className = "status-label";
      status.textContent = game.status;
      figure.append(image, status);
      const copy = document.createElement("div");
      copy.className = "game-card-copy";
      const title = document.createElement("h3");
      title.textContent = game.title;
      copy.append(title);
      link.append(figure, copy);
      article.append(link);
      return article;
    }));
  }

  const lightbox = document.querySelector("#illustration-lightbox");
  const thumbnails = [...document.querySelectorAll(".illustration-thumb")];
  if (lightbox && thumbnails.length > 0) {
    const lightboxFigure = lightbox.querySelector(".lightbox-figure");
    const lightboxImage = lightbox.querySelector(".lightbox-figure img");
    const lightboxCaption = lightbox.querySelector(".lightbox-figure figcaption");
    const closeButton = lightbox.querySelector(".lightbox-close");
    const previousButton = lightbox.querySelector(".lightbox-prev");
    const nextButton = lightbox.querySelector(".lightbox-next");
    const items = thumbnails.map((thumbnail) => {
      const image = thumbnail.querySelector("img");
      const caption = thumbnail.querySelector(".illustration-caption");
      return {
        src: thumbnail.dataset.fullSrc || image.currentSrc || image.src,
        alt: image.alt,
        caption: caption.textContent,
      };
    });
    let currentIndex = 0;
    let opener = null;

    const showItem = (index, direction = null) => {
      currentIndex = (index + items.length) % items.length;
      const item = items[currentIndex];
      lightboxImage.src = item.src;
      lightboxImage.alt = item.alt;
      lightboxCaption.textContent = item.caption;
      if (direction) {
        lightboxFigure.classList.remove("is-switching-next", "is-switching-prev");
        void lightboxFigure.offsetWidth;
        lightboxFigure.classList.add(`is-switching-${direction}`);
      }
    };

    const closeLightbox = () => {
      if (lightbox.classList.contains("is-closing")) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        lightbox.close();
        return;
      }
      lightbox.classList.add("is-closing");
      window.setTimeout(() => lightbox.close(), 180);
    };

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        opener = thumbnail;
        lightbox.classList.remove("is-closing");
        lightboxFigure.classList.remove("is-switching-next", "is-switching-prev");
        showItem(index);
        lightbox.showModal();
      });
    });

    closeButton.addEventListener("click", closeLightbox);
    previousButton.addEventListener("click", () => showItem(currentIndex - 1, "prev"));
    nextButton.addEventListener("click", () => showItem(currentIndex + 1, "next"));
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    lightbox.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showItem(currentIndex - 1, "prev");
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showItem(currentIndex + 1, "next");
      }
    });
    lightbox.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeLightbox();
    });
    lightbox.addEventListener("close", () => {
      lightbox.classList.remove("is-closing");
      opener?.focus();
    });
  }
})();
