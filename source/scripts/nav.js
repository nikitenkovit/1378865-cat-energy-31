(
  function () {
    const Class = {
      toggle: 'main-navigation__menu-toggle',
      toggleActive: 'main-navigation__menu-toggle--active',
      navigationList: 'main-navigation__list',
      navigationListActive: 'main-navigation__list--active',
    };
    const Node = {
      menuButton: document.querySelector(`.${Class.toggle}`),
      navigationList: document.querySelector(`.${Class.navigationList}`)
    };

    const isScriptNotAvailable = Object.values(Node).some((it) => !it);

    if (isScriptNotAvailable) {
      return;
    }

    Node.menuButton.classList.remove(Class.toggleActive);
    Node.navigationList.classList.remove(Class.navigationListActive);

    const clickHandler = (event) => {
      event.preventDefault();

      Node.menuButton.classList.toggle(Class.toggleActive);
      Node.navigationList.classList.toggle(Class.navigationListActive);
    };

    Node.menuButton.addEventListener('click', clickHandler);
  }
)();
