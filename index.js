const openMenu = function () {
    openicon.classList.add("hidden");
    blurredbg.classList.remove('hidden');
    sidebarnav.classList.remove("hidden");
    // body.classList.add("overflow-hidden");
}

const closeMenu = function () {
    openicon.classList.remove("hidden");
    blurredbg.classList.add("hidden");
    sidebarnav.classList.add("hidden");
    // body.classList.remove("overflow-hidden");
}