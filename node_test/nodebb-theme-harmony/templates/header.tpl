<!DOCTYPE html>
<html lang="{function.localeToHTML, userLang, defaultLang}" {{{if languageDirection}}}data-dir="{languageDirection}" style="direction: {languageDirection};"{{{end}}}>
<head>
	<title>{browserTitle}</title>
	{{{each metaTags}}}{function.buildMetaTag}{{{end}}}
	<link rel="stylesheet" type="text/css" href="{relative_path}/assets/client{{{if bootswatchSkin}}}-{bootswatchSkin}{{{end}}}{{{ if (languageDirection=="rtl") }}}-rtl{{{ end }}}.css?{config.cache-buster}" />
	{{{each linkTags}}}{function.buildLinkTag}{{{end}}}

	<script>
		var config = JSON.parse('{{configJSON}}');
		var app = {
			user: JSON.parse('{{userJSON}}')
		};

		document.documentElement.style.setProperty('--panel-offset', `${localStorage.getItem('panelOffset') || 0}px`);
	</script>

	{{{if useCustomHTML}}}
	{{customHTML}}
	{{{end}}}
	{{{if useCustomCSS}}}
	<style>{{customCSS}}</style>
	{{{end}}}
</head>

<script>
	async function fetchAndDisplayPostContent(url, divId) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const postContentElement = doc.querySelector('.content.text-break.post-content'); 

    if (postContentElement) {
      const div = document.getElementById(divId);
      div.innerHTML = postContentElement.innerHTML;
    } else {
      console.error("无法找到帖子内容元素");
    }

  } catch (error) {
    console.error('获取帖子内容失败:', error);
  }
}
	fetchAndDisplayPostContent('https://3001universe.top/topic/28/%E7%AB%99%E5%8A%A1-%E8%AE%BA%E5%9D%9B%E5%85%AC%E5%91%8A%E8%B4%B4', 'notice-content');
</script>

<body class="{bodyClass} skin-{{{if bootswatchSkin}}}{bootswatchSkin}{{{else}}}noskin{{{end}}}">


	<a class="visually-hidden-focusable position-absolute top-0 start-0 p-3 m-3 bg-body" style="z-index: 1021;" href="#content">[[global:skip-to-content]]</a>
	<div class="layout-container d-flex justify-content-between pb-4 pb-md-0">
		<!-- IMPORT partials/sidebar-left.tpl -->

		<main id="panel" class="d-flex flex-column gap-3 flex-grow-1" style="min-width: 0;">
			<!-- IMPORT partials/header/brand.tpl -->
			<script>
				const headerEl = document.getElementById('header-menu');
				if (headerEl) {
					const rect = headerEl.getBoundingClientRect();
					const offset = Math.max(0, rect.bottom);
					document.documentElement.style.setProperty('--panel-offset', offset + `px`);
				} else {
					document.documentElement.style.setProperty('--panel-offset', `0px`);
				}
			</script>
			<div class="container-lg px-md-4 d-flex flex-column gap-3 h-100 mb-5 mb-lg-0" id="content">
			<!-- IMPORT partials/noscript/warning.tpl -->
			<!-- IMPORT partials/noscript/message.tpl -->

			<div class="feature-cards-container">
    			<!-- 左侧轮播图 -->
    			<div id="carousel" class="carousel">
        			<!-- 轮播图片 -->
					<a href="https://3001universe.top/post/193" target="_black">
        			<div class="carousel-item active">
            			<img src="https://sgp1.vultrobjects.com/s3.3001universe.top/asset/122update/banner1.jpg" alt="banner1-image">
            			<div class="carousel-caption">论坛首发新春命题征稿火热进行中！</div>
        			</div>
					</a>
					<a href="https://3001universe.top/post/212" target="_black"> 
        			<div class="carousel-item">
            			<img src="https://sgp1.vultrobjects.com/s3.3001universe.top/asset/122update/banner2.png" alt="banner2-image">
            			<div class="carousel-caption">内含主创团队血泪史（划掉）暖心发言</div>
        			</div>
					</a>

					<a href="https://3001universe.top/post/131" target="_black"> 
        			<div class="carousel-item">
            			<img src="https://sgp1.vultrobjects.com/s3.3001universe.top/asset/123upload/banner3.jpg" alt="banner3-image">
            			<div class="carousel-caption">王侯乔影春常在，绣罗不改添福来</div>
        			</div>
					</a>
    			</div>

				<script>
    // 获取轮播图相关元素
    const carousel = document.getElementById('carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    // 自动轮播功能
    setInterval(() => {
        // 移除当前活跃项
        items[currentIndex].classList.remove('active');
        // 更新索引
        currentIndex = (currentIndex + 1) % items.length;
        // 设置新的活跃项
        items[currentIndex].classList.add('active');
    }, 3000); // 每 3 秒切换一次
</script>
				<!-- 站务卡片 -->
				<div class="feature-section card service">
					<h3>#站务</h3>
					<div class="card-divider"></div>
					<p>在本论坛活动请遵守站规、遵纪守法。使用中如遇到问题，或有意见与建议，可联系论坛管理员。</p>
					<a href="https://3001universe.top/user/%E4%B8%89%E5%8D%83%E5%A2%83%E7%AE%A1%E7%90%86%E5%91%98" class="card-footer">
						@三千境管理员
    				</a>
				</div>
				
				<!-- 异常申诉卡片 -->
				<div class="feature-section card appeal">
					<h3>#异常申诉</h3>
					<div class="card-divider"></div>
					<p>如违反站规，管理员将酌情进行警告、删帖、禁言、封禁等操作，如对处罚结果有异议，可联系论坛管理员。</p>
					<a href="https://3001universe.top/user/%E5%BC%82%E5%B8%B8%E7%94%B3%E8%AF%89%E5%A4%84" class="card-footer">
        				@异常申诉处
    				</a>
				</div>
				
				<!-- 删帖申请卡片 -->
				<div class="feature-section card delete">
					<h3>#删帖申请</h3>
					<div class="card-divider"></div>
					<p>帖子所有者如遇到帖子出现他人不合适言论的评论、评论内容违规等无法处理的问题，可联系论坛管理员。</p>
					<a href="https://3001universe.top/user/%E7%94%B3%E8%AF%B7%E5%88%A0%E5%B8%96%E5%A4%84" class="card-footer">
        				@删帖申请处
    				</a>
				</div>

				<!-- 公告区域 -->
				<a href="https://3001universe.top/topic/28/%E7%AB%99%E5%8A%A1-%E8%AE%BA%E5%9D%9B%E5%85%AC%E5%91%8A%E8%B4%B4" class="feature-section notice" target="_black">
					<!-- 顶部装饰图片 -->
					<div class="notice-decoration">
						<img src="https://sgp1.vultrobjects.com/s3.3001universe.top/asset/118update/notifictionui.png" alt="公告装饰线">
					</div>
					
					<!-- 公告内容区 -->
					<div class="notice-container">
						<div class="notice-content">
							三千界结万缕缘，感谢加入三千零一境同人论坛——属于我们的新世界！
预祝大家游玩愉快，期待各位老师多多发表精彩作品！
论坛仍在持续建设中，欢迎提出意见与建议，一起共创未来~
						</div>
						<div class="notice-tag">
							<i class="fa fa-book-open"></i>
							告示
						</div>
						<div class="notice-time">
							2025年
						</div>
					</div>
				</a>				
			</div>

			<div class="extra-image">
    			<img src="https://sgp1.vultrobjects.com/s3.3001universe.top/asset/118update/gridui.png" alt="论坛版块">
			</div>