var t={toggle:"main-navigation__menu-toggle",toggleActive:"main-navigation__menu-toggle--active",navigationList:"main-navigation__list",navigationListActive:"main-navigation__list--active"},i={menuButton:document.querySelector(`.${t.toggle}`),navigationList:document.querySelector(`.${t.navigationList}`)};i.menuButton.classList.remove(t.toggleActive);i.navigationList.classList.remove(t.navigationListActive);var e=n=>{n.preventDefault(),i.menuButton.classList.toggle(t.toggleActive),i.navigationList.classList.toggle(t.navigationListActive)};i.menuButton.addEventListener("click",e);
