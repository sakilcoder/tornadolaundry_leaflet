function onEachAoi(feature, layer) {

    let str_popup = '<a href="#" class="pull-right" style="padding:2px 5px 0 0" onclick="closeInfoPanel();"><i class="fa fa-close"></i></a>';
    str_popup += '<h5 class="text-center" style="font-weight: bold">' + feature.properties.zip_code + ', ' + feature.properties.city+ '</h5>';
    str_popup += '<h5 class="text-center">'+ feature.properties.item +'</h5>';
    str_popup += '<p>One Time Cost: $'+ feature.properties.one_time + ' ' +  feature.properties.unit +' <br/>';
    str_popup += 'Same Day Pickup Cost: $'+ feature.properties.same_day_p + ' ' +  feature.properties.unit +' <br/>';
    str_popup += 'Recurring Cost: $'+ feature.properties.recurring + ' ' +  feature.properties.unit +' </p>';

    layer.on('mouseover', function (e) {
        
        this.setStyle({
            'fillColor': '#DC6A74',
        });

        infoView = 1;
        infoPanel.style.display = "block";
        popup_info.update(str_popup);

    
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }

    });

    layer.on('mouseout', function (e) {
        // e.target.closePopup();
        // console.log('out-aoi');

        this.setStyle({
            'fillColor': '#93bcb8',
        });
    });

}
function onEachZipPoint(feature, layer) {

    var icon = getIcon('zip');
    var icon1 = icon[0];
    var icon2 = icon[1];
    layer.setIcon(icon1);

    let str_popup = '<a href="#" class="pull-right" style="padding:2px 5px 0 0" onclick="closeInfoPanel();"><i class="fa fa-close"></i></a>';
    str_popup += '<h5 class="text-center" style="font-weight: bold">' + feature.properties.zip_code + ', ' + feature.properties.city+ '</h5>';
    str_popup += '<h5 class="text-center">'+ feature.properties.item +'</h5>';
    str_popup += '<p>One Time Cost: $'+ feature.properties.one_time + ' ' +  feature.properties.unit +' <br/>';
    str_popup += 'Same Day Pickup Cost: $'+ feature.properties.same_day_p + ' ' +  feature.properties.unit +' <br/>';
    str_popup += 'Recurring Cost: $'+ feature.properties.recurring + ' ' +  feature.properties.unit +' </p>';

    // layer.on('click', function(e) {
    //     console.log(e);
        
    // });

    layer.on('mouseover', function (e) {
        layer.setIcon(icon2);

        infoView = 1;
        infoPanel.style.display = "block";
        popup_info.update(str_popup);

    });

    layer.on('mouseout', function (e) {
        // e.target.closePopup();
        layer.setIcon(icon1);
    });

}
function onEachLocation(feature, layer) {

    let str_popup = '<a href="#" class="pull-right" style="padding:2px 5px 0 0" onclick="closeInfoPanel();"><i class="fa fa-close"></i></a>';
    str_popup += '<h5 class="text-center" style="font-weight: bold">' + feature.properties.name + '</h5>';
    str_popup += '<h5 class="text-center">'+ feature.properties.location +'</h5>';

    var icon = getIcon('location');
    var icon1 = icon[0];
    var icon2 = icon[1];
    layer.setIcon(icon1);

    layer.on('click', function(e) {
        // console.log(e.latlng);
        // console.log(feature.properties.google_map);
        // window.location = feature.properties.google_map;
        window.open(feature.properties.google_map, '_blank');
        
    });

    layer.on('mouseover', function (e) {
        layer.setIcon(icon2);

        infoView = 1;
        infoPanel.style.display = "block";
        popup_info.update(str_popup);

    });

    layer.on('mouseout', function (e) {
        layer.setIcon(icon1);
    });

}

var getIcon = function(type) {
    let gi = '';
    let gi2 = '';

    if(type == 'location'){
        gi = '<i class="fa fa-shopping-cart g-icon-i" style="font-size:22px; color: #890F0D"></i>';
        gi2 = '<i class="fa fa-shopping-cart g-icon-i" style="font-size:24px; color: #890F0D"></i>';

    }else{
        gi = '<i class="material-icons g-icon-i" style="font-size:16px; color: #FDECD0">place</i>';
        gi2 = '<i class="material-icons g-icon-i" style="font-size:18px; color: #FDECD0">place</i>';
    }


    var icon1 = GoogleIcon('<span class="g-icon">' + gi + '</span>');
    var icon2 = GoogleIcon('<span class="g-icon">' + gi2 + '</span>');
    return [icon1, icon2];
}


function closeInfoPanel(){
    infoView = 0;
    infoPanel.style.display = "none";

}