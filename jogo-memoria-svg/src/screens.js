const router = {
    intro: document.querySelector(".container-intro").dataset,
    board: document.querySelector(".container-board").dataset,
    score: document.querySelector(".container-score").dataset,
};

function activeScreen(screen) {
    Object.entries(router).forEach(([key, value]) => {
        if (key === screen) value.router = "true";
        else value.router = "false";
    });
}

export default activeScreen;
