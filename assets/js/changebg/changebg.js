/**
 * Created by Administrator on 2016/1/14.
 */
$(document).ready(function(){

    //  Initialize Backgound Stretcher
    $('body').bgStretcher({
        images: ['images/banner.jpg', 'images/banner1.png'],
        imageWidth: 1920,
        imageHeight: 880,
        slideDirection: 'N',
        slideShowSpeed: 1000,
        transitionEffect: 'fade',
        sequenceMode: 'normal',
        pagination: '#nav',
        anchoring: 'left center',
        anchoringImg: 'left center'
    });

});
