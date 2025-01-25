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
