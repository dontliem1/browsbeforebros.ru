const toggleBtn = /** @type {?HTMLButtonElement} */ (document.getElementById('toggleMap'));
if (toggleBtn) {
    toggleBtn.addEventListener('click', function (e) {
        e.preventDefault();
        this.setAttribute('aria-expanded', 'true');
        // @ts-ignore
        DG.then(function () {
            toggleBtn.disabled = true;
            const mapContainer = document.getElementById('map');
            if (mapContainer) {
                mapContainer.style.minHeight = '25em';
                // @ts-ignore
                let map = DG.map('map', {
                    center: [57.149046, 65.548909],
                    zoom: 14,
                    fullscreenControl: false,
                    maxBounds: [
                        [57, 65.3],
                        [57.25, 65.8]
                    ],
                    minZoom: 11,
                    maxZoom: 16
                });
                // @ts-ignore
                let bbbIcon = DG.icon({
                    iconUrl: '/static/img/marker.png',
                    iconRetinaUrl: '/static/img/marker@2x.png',
                    iconSize: [36, 48],
                    iconAnchor: [18, 48]
                });
                // @ts-ignore
                let bbb = DG.marker([57.149046, 65.548909], {
                    icon: bbbIcon,
                    title: 'Перейти на карту 2GIS',
                    alt: 'Маркер со ссылкой на карту 2GIS'
                }).addTo(map);
                bbb.on('click', function () {
                    if (window.confirm('Перейти на карту 2GIS?')) {
                        window.open('https://go.2gis.com/i3ji9', '_blank');
                    }
                });
            }
        });
    });
}