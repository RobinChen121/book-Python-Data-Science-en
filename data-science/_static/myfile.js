// 显示谷歌翻译
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
        new google.translate.TranslateElement({ pageLanguage: 'en',
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



document.addEventListener('DOMContentLoaded', function() {
    // 1. 创建按钮元素
    const scrollBottomBtn = document.createElement('button');

    // 2. 设置内容：使用更优雅的 SVG 图标（向下箭头）
    // SVG 可以确保在任何分辨率下都清晰，且比文字更具通用性
    scrollBottomBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
    `;

    // 3. 设置基础样式（半透明、毛玻璃效果）
    Object.assign(scrollBottomBtn.style, {
        position: 'fixed',
        bottom: '80px',   // 位于“回到顶部”按钮上方
        right: '20px',
        zIndex: '1000',
        width: '45px',    // 圆形按钮
        height: '45px',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)', // 柔和阴影
        display: 'flex',   // 居中图标
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease', // 平滑过渡动画
        backdropFilter: 'blur(8px)', // 毛玻璃效果 (背景模糊)
        WebkitBackdropFilter: 'blur(8px)' // 兼容 Safari
    });

    // // 4. 悬停效果
    scrollBottomBtn.onmouseover = () => scrollBottomBtn.style.backgroundColor = "currentColor" ;
    scrollBottomBtn.onmouseout = () => scrollBottomBtn.style.backgroundColor = '#684679';

    // 5. 点击逻辑：平滑滚动到底部
    scrollBottomBtn.addEventListener('click', function() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });

    // 6. 将按钮添加到页面
    document.body.appendChild(scrollBottomBtn);
});
    
    
