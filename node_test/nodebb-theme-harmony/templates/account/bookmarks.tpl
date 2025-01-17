<!-- IMPORT account/posts.tpl -->
<!-- IMPORT partials/account/header.tpl -->

<div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
	<h3 class="fw-semibold fs-5 mb-0">[[user:bookmarks]]</h3>
</div>

{{{ if !posts.length }}}
<div class="alert alert-warning text-center">{noItemsFoundKey}</div>
{{{ end }}}

<div>
	<!-- IMPORT partials/posts_list.tpl -->

	{{{ if config.usePagination }}}
	<!-- IMPORT partials/paginator.tpl -->
	{{{ end }}}
</div>

<!-- IMPORT partials/account/footer.tpl -->