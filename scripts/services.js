const services = [
  {
    name: "Technical Management",
    img: "/images/thumbnails/shipping.jpg",
    content:
      "Understanding the needs of complex technical systems ranging from the most advanced engine room automation systems to high end VSAT communication arays provides reassurance to owners that their assets are being properly and efficiently maintained. ",
    href: "",
  },
  {
    name: "Project Management",
    img: "/images/thumbnails/shipping.jpg",
    content: "",
    href: "",
  },
  {
    name: "Management Service",
    img: "/images/thumbnails/shipping.jpg",
    content:
      "Transparent and efficient managements solutions for your vessel or fleet. CYMS can provide a standard framework management package or tailor a bespoke solution meeting the most demanding of expectations.",
    href: "",
  },
  {
    name: "Recruitment Service",
    img: "/images/thumbnails/shipping.jpg",
    content:
      "Using CYMS's proven candidate-rating system helps to quantify the strengths and weaknesses of each potential new crew member.",
    href: "",
  },
  {
    name: "Audit Service",
    img: "/images/thumbnails/shipping.jpg",
    content: "",
    href: "",
  },
];

const rightBackground = document.getElementById("right");
const leftBackground = document.getElementById("left");
const viewSection = document.getElementById("scrolling-items-container");
const dots = document.querySelectorAll(".dot");

let index = 2; //start position
dots[index].classList.add("dot-active"); //attributes a starting class

generateContainers();

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    chooseDirection(dot);
  });
});

leftBackground.addEventListener("click", () => {
  navigateByIndex("left");
});

rightBackground.addEventListener("click", () => {
  navigateByIndex("right");
});

function chooseDirection(dot) {}

function navigateByIndex(direction) {
  const containers = document.querySelectorAll(".view-container");

  dots.forEach(el => {
    el.classList.remove("dot-active");
  });

  if (direction === "right") {
    index++;
    if (index >= 5) {
      index = 0;
    }
    dots[index].classList.add("dot-active");
  } else {
    index--;
    if (index < 0) {
      index = 4;
    }
    dots[index].classList.add("dot-active");
  }
  animate(index, containers);
}

function addDotButton(index) {
  const leftDot = dots[index - 1];
  const rightDot = dots[index + 1];
}

function animate(index, containers) {
  const targetElement = containers[index];
  const middleElement = [...containers].filter(
    container => getComputedStyle(container).getPropertyValue("z-index") === "30"
  )[0];

  const targetComputedStyles = getComputedStyle(targetElement);
  const middleComputedStyles = getComputedStyle(middleElement);
  const targetStyles = [
    {
      transform: targetComputedStyles.getPropertyValue("transform"),
      zIndex: targetComputedStyles.getPropertyValue("z-index"),
    },
    {
      transform: middleComputedStyles.getPropertyValue("transform"),
      zIndex: middleComputedStyles.getPropertyValue("z-index"),
    },
  ];

  middleElement.style.transform = `${targetStyles[0].transform}`;
  middleElement.style.zIndex = `${targetStyles[0].zIndex}`;
  middleElement.style.filter = "brightness(80%)";

  targetElement.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
  targetElement.style.zIndex = 30;
  targetElement.style.filter = "brightness(100%)";

  console.log(index);
}

function generateContainers() {
  let spreadingDirection;
  let zIndex;
  let size;

  services.forEach((service, index) => {
    if (index === 0) {
      spreadingDirection = -7;
      zIndex = 20;
      size = 0.9;
    } // Technical Management
    if (index === 1) {
      spreadingDirection = -4;
      zIndex = 25;
      size = 0.95;
    } // Project Management
    if (index === 2) {
      spreadingDirection = 0;
      zIndex = 30;
      size = 1;
    } // Management Services
    if (index === 3) {
      spreadingDirection = 4;
      zIndex = 25;
      size = 0.95;
    } // Recruitment Service
    if (index === 4) {
      spreadingDirection = 7;
      zIndex = 20;
      size = 0.9;
    } // Audit Service

    const container = document.createElement("article");
    container.classList.add("view-container");

    const html = `
            <div class="view-img-container">
                <img src="${service.img}" alt="Service image">
            </div>
            <div class="view-title">${service.name}</div>
            <div class="view-content">${service.content}</div>
            <div class="button-align">
                <button class="view-more-button view-display">
                    <a href="${service.href}">View more</a>
                </button>
            </div>
        `;

    container.innerHTML = html;
    container.style.transform = `translateX(${spreadingDirection}vw) scale(${size})`;
    container.style.zIndex = zIndex;
    if (index !== 2) {
      container.style.filter = "brightness(80%)";
    }

    viewSection.appendChild(container);
  });
}

// console.log(previousElement, targetElement, nextElement)
// const targetComputedStyles = getComputedStyle(targetElement)
// const middleComputedStyles = getComputedStyle(middleElement)
// const targetStyles = [
//         {
//             transform: targetComputedStyles.getPropertyValue('transform'),
//             zIndex: targetComputedStyles.getPropertyValue('z-index'),
//         },
//         {
//             transform: middleComputedStyles.getPropertyValue('transform'),
//             zIndex: middleComputedStyles.getPropertyValue('z-index'),
//         },
//     ]

// middleElement.style.transition = 'transform 0.5s, filter 0.5s'
// middleElement.style.transform = `${targetStyles[0].transform}`
// middleElement.style.zIndex = `${targetStyles[0].zIndex}`
// middleElement.style.filter = 'brightness(80%)'

// console.log(targetStyles)

// firstElement.style.transform = `${elementStyles[index + 1].transform}`
// firstElement.style.zIndex = `${elementStyles[index + 1].zIndex}`
// firstElement.style.filter = `${elementStyles[index + 1].filter}`

// previousElement.style.transform = `${elementStyles[index - 2].transform}`
// previousElement.style.zIndex = `${elementStyles[index - 2].zIndex}`
// previousElement.style.filter = `${elementStyles[index - 2].filter}`

// targetElement.style.transform = "matrix(1, 0, 0, 1, 0, 0)"
// targetElement.style.zIndex = "30"
// targetElement.style.filter = "brightness(100%)"

// nextElement.style.transform = `${elementStyles[index].transform}`
// nextElement.style.zIndex = `${elementStyles[index].zIndex}`
// nextElement.style.filter = `${elementStyles[index].filter}`

// lastElement.style.transform = `${elementStyles[index + 2].transform}`
// lastElement.style.zIndex = `${elementStyles[index + 2].zIndex}`
// lastElement.style.filter = `${elementStyles[index + 2].filter}`

// const elementStyles = [...containers].map(container => {
//     return {
//         transform: getComputedStyle(container).getPropertyValue('transform'),
//         zIndex: getComputedStyle(container).getPropertyValue('z-index'),
//         filter: getComputedStyle(container).getPropertyValue('filter'),
//         container
//     }
// })
