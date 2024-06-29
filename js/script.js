// Switch Left, Middle and Right Part of Banner
function switchBanner(name) {
    const banner = document.querySelector('#banner');
    if (!banner.classList.contains(name)) {
        banner.className = 'banner';
        banner.classList.add(name);
    } 
}

