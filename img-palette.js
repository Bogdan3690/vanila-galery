const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const container = document.querySelector(".js-gallery");
const jsBackdrop = document.querySelector(".js-lightbox");
const overlay = document.querySelector(".lightbox__overlay");
const modalImg = document.querySelector(".lightbox__image");
const closeBtn = document.querySelector([
  'button[data-action="close-lightbox"']);

function createItems() {
  // let items = []

  //   for (let i = 0; i < 6; i++) {

  //       const element = document.createElement('li')
  //       element.classList.add('gallery__item')

  //       const link = document.createElement('a')
  //       link.classList.add('gallery__link')
  //       link.href = galleryItems[i].original

  //       const img = document.createElement('img')
  //       img.classList.add('gallery__image')
  //       img.src = galleryItems[i].preview
  //       img.dataset.org = galleryItems[i].original
  //       img.alt = galleryItems[i].description

  //       link.appendChild(img)
  //       element.appendChild(link)

  //       items.push(element)
  //   }

  const items = galleryItems.map((item) => {
    const element = document.createElement("li");
    element.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = item.original;

    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = item.preview;
    img.dataset.source = item.original;
    img.alt = item.description;

    link.appendChild(img);
    element.appendChild(link);

    return element;
  });

  container.append(...items);
}

createItems();

container.addEventListener("click", onClick);
closeBtn.addEventListener("click", onCloseBtnClick);
overlay.addEventListener("click", onBackDropClick);
document.addEventListener("keydown", onEsc);

function onClick(ev) {
    ev.preventDefault()
    console.log(ev.target);
  if (ev.target.nodeName !== "IMG") {// its not a img
    return;
  }

    jsBackdrop.classList.add('is-open')
    modalImg.src = ev.target.dataset.source
    modalImg.alt = ev.target.alt
}

function onCloseBtnClick() {
  onCloseModal();
}

function onBackDropClick(ev) {
  if (ev.target === ev.currentTarget) {
    onCloseModal();
  }
  console.log(ev.target);
  console.log(ev.currentTarget);
}

function onCloseModal() {
  jsBackdrop.classList.remove("is-open");
    modalImg.src = ''
    modalImg.alt = ''
}

function onEsc(event) {
  console.log(event.code);
  if (event.code === "Escape" && jsBackdrop.classList.contains('is-open')) {
    onCloseModal();
  }
}
