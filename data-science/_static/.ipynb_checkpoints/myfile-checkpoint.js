// 显示弹框
// alert("欢迎来到我的网站！");

document.addEventListener('DOMContentLoaded', function() {
    // 找到 article-header-buttons 容器
    var headerButtons = document.querySelector('.article-header-buttons');


    // 创建一个新的按钮
    var newButton = document.createElement('button');
    newButton.className = 'btn btn-info'; // 设置按钮样式
    newButton.innerText = 'New Button'; // 设置按钮文本

    // 添加点击事件
    newButton.addEventListener('click', function() {
        alert('New Button Clicked!');
    });
    
    // 添加 div elecment
    var div = document.createElement("div");
    div.id = "google_translate_element"
    
    // 添加 script elecment
    var script1 = document.createElement("script");

    // set sciprt type and add script content
    script1.type = "text/javascript"
    script1.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

    script1.onload = function googleTranslateElementInit() {
        new google.translate.TranslateElement({ pageLanguage: 'zh-CN',
                  includedLanguages: 'en,zh-CN,zh-TW,ja,ko,de,ru,fr,es,it,pt,hi,ar,fa',
layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
      };

    // 添加 script element
    var script2 = document.createElement("script");

    // set aciprt type and add script content
    script2.type = "text/javascript"
    script2.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

    // 将新按钮添加到容器中
    //headerButtons.prepend(newButton);
    headerButtons.prepend(div);
    headerButtons.prepend(scirpt1);
    headerButtons.prepend(script2);
    
    setcookie('googtrans', '/en');
});
    
    
