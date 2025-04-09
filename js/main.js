document.addEventListener('DOMContentLoaded', function() {
    // 获取所有导航标签和内容区域
    const navTabs = document.querySelectorAll('.nav-tab');
    const contentSections = document.querySelectorAll('.content-section');
    
    // 为每个资源卡片添加动画延迟
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // 为每个导航标签添加点击事件
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有标签的active类
            navTabs.forEach(t => t.classList.remove('active'));
            
            // 为当前点击的标签添加active类
            this.classList.add('active');
            
            // 获取目标内容区域的id
            const targetId = this.getAttribute('data-target');
            
            // 隐藏所有内容区域
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // 显示目标内容区域
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // 设置评分颜色
    const ratingElements = document.querySelectorAll('.resource-rating');
    ratingElements.forEach(element => {
        const rating = parseInt(element.textContent.replace('评分: ', ''));
        if (rating >= 90) {
            element.classList.add('high');
        } else if (rating >= 70) {
            element.classList.add('medium');
        } else {
            element.classList.add('low');
        }
    });
    
    // 默认显示第一个标签内容
    if (navTabs.length > 0) {
        navTabs[0].click();
    }
});