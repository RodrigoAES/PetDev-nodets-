type menu = '' | 'all' | 'dog' | 'cat' | 'fish';

export const activeMenu = (menu: menu) => {
    let activeMenu = {
        all:false,
        dog:false,
        cat:false,
        fish:false
    }

    if(menu != '') {
        activeMenu[menu] = true;
    }

    return activeMenu;
}