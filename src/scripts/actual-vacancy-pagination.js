const paginationContainer = document.querySelector(".pagination");
const paginationNumbers = document.querySelector("#pagination-numbers");
const paginatedList = document.querySelector("#paginated-list");
const nextButton = document.querySelector("#next-button");
const prevButton = document.querySelector("#prev-button");
let currentPage = 1;

function reloadPagination() {
  reloadPaginationNumbers();
  getPaginationNumbers();
  setCurrentPage(1);
  addButtonEventListener();
}

function addButtonEventListener () {
  document.querySelectorAll(".pagination__number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
        scrollTo(0, 400);
      });
    }
  });
}

const examinationLength = () => {
  const listItems = paginatedList.querySelectorAll(".tender__li");
  if(listItems.length > 8)
  {paginationContainer.classList.add("pagination_active")}
  else {paginationContainer.classList.remove("pagination_active")}
}

examinationLength();

function scrollTo(to, duration = 700) {
  const
    element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    },
    animateScroll = function () {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
      else {
        element.scrollTop = to;
      }
    };
  animateScroll();
}

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  const listItems = paginatedList.querySelectorAll(".tender__li");
  const paginationLimit = 8;
  const pageCount = Math.ceil(listItems.length / paginationLimit);
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination__number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination__number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);
  paginationNumbers.appendChild(pageNumber);
};

const reloadPaginationNumbers = () => {
  const allNum = document.querySelectorAll('.pagination__number');
  allNum.forEach(element => element.remove())
}

const getPaginationNumbers = () => {
  const listItems = paginatedList.querySelectorAll(".tender__li");
  const paginationLimit = 8;
  const pageCount = Math.ceil(listItems.length / paginationLimit);
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

function hideOverflow(pageNum) {
  const paginationLimit = 8;
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;
  const listItems = paginatedList.querySelectorAll(".tender__li");
  listItems.forEach((item, index) => {
    item.classList.add("pagination__hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("pagination__hidden");
    }
  });
}

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;
  handleActivePageNumber();
  handlePageButtonsStatus();
  hideOverflow(pageNum);
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
    scrollTo(0, 400);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
    scrollTo(0, 400);
  });

  addButtonEventListener();
});
