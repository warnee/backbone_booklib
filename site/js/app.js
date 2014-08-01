var app = app || {};

$(function() {
    var books = [
        {title: 'Backbone.js 프로그래밍', author: '애디 오스마니/이지훈', releaseDate: '2014/06/23', keywords: 'Backbone', coverImage: 'img/KOR9788994774688.jpg'},
        {title: '풀스택 자바스크립트 개발', author: '아자트 마르다노프 / 이대엽', releaseDate: '2014/07/17', keywords: 'Backbone', coverImage:'img/KOR9788998139629.jpg'},
        {title: '자바스크립트 라이브러리 실전 활용', author: 'WINGS 프로젝트 / 정인식', releaseDate: '2013/12/30', keywords: 'Backbone', coverImage:'img/KOR9788994506838.jpg'},
        {title: '모던 웹을 위한 HTML5 프로그래밍', author: '윤인성', releaseDate: '2013/08/20', keywords: 'Backbone', coverImage:'img/KOR9788968480416.jpg'},
        {title: '웹개발 레시피', author: '브라이언 호건/정용식', releaseDate: '2013/02/15', keywords: 'Backbone', coverImage:'img/KOR9788966260607.jpg'}
    ];

    //new app.LibraryView(books);
    new app.LibraryView();
});