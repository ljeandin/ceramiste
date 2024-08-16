document.addEventListener("DOMContentLoaded", () => {
    const menuTrigger = document.querySelector(
        ".js-menu-trigger"
    );
    const menu = document.querySelector(".js-menu");
    const menuLink =
        document.querySelectorAll(".js-menu-link");

    let isMenuHidden =
        menu.classList.contains("menu--hidden");

    function openMenu() {
        menu.classList.remove("menu--hidden");
        setTimeout(() => {
            menu.classList.add("menu--open");
        }, 150); // Matches --transition-duration

        menuTrigger.classList.add("menu-trigger--open");

        menuLink.forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener(
            "click",
            handleClickOutside
        );
        isMenuHidden = false;
    }

    function closeMenu() {
        menu.classList.remove("menu--open");
        setTimeout(() => {
            menu.classList.add("menu--hidden");
        }, 150); // Matches --transition-duration

        menuTrigger.classList.remove("menu-trigger--open");

        menuLink.forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        document.removeEventListener(
            "click",
            handleClickOutside
        );
        isMenuHidden = true;
    }

    function handleClickOutside(event) {
        if (
            !menu.contains(event.target) &&
            !menuTrigger.contains(event.target)
        ) {
            closeMenu();
        }
    }

    menuTrigger.addEventListener("click", () => {
        navigator.vibrate(40);
        if (isMenuHidden) {
            openMenu();
        } else {
            closeMenu();
        }
    });
});
