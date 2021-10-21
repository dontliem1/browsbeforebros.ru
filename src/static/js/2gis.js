document.getElementById('toggleMap').onclick = function() {
    this.setAttribute('aria-expanded','true');
    DG.then(function () {
        document.getElementById('toggleMap').disabled = true;
        document.getElementById('map').style.minHeight = '25em';
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
        let bbbIcon = DG.icon({
            iconUrl: '/static/img/marker.png',
            iconRetinaUrl: '/static/img/marker@2x.png',
            iconSize: [36, 48],
            iconAnchor: [18, 48]
        });
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
    });
    return false;
}
