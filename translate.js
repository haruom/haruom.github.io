$(document).ready(function () {
    $('.lang-select').click(function () {
        var lang = $(this).attr('data-lang');
        window.location = $(this).attr('href');
        location.reload();
    });
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'ja',
            layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT
        }, 'google_translate_element');
    }
});