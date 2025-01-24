<!-- IMPORT partials/account/header.tpl -->

<div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
	<h3 class="fw-semibold fs-5 mb-0">我收藏的主题</h3>
</div>

{{{ if !topics.length }}}
<div class="alert alert-warning text-center">{noItemsFoundKey}</div>
{{{ end }}}

<div class="category">
	<!-- IMPORT partials/topics_list.tpl -->
	{{{ if config.usePagination }}}
	<!-- IMPORT partials/paginator.tpl -->
	{{{ end }}}
</div>

<!-- IMPORT partials/account/footer.tpl -->