<!-- IMPORT partials/account/header.tpl -->

<div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
	<h3 class="fw-semibold fs-5 mb-0">我的草稿</h3>
</div>
<div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
	<h3 class="fs-5 mb-0 text-warning">请注意：草稿箱仅为本地临时保存，清除浏览器缓存会导致草稿丢失【刷新页面以查看数据】</h3>
</div>

<div component="sidebar/drafts">
	<div component="drafts/list" class="list-container draft-list list-unstyled d-flex flex-column overscroll-behavior-contain gap-1 pe-1 ghost-scrollbar">
		<div class="hidden no-drafts text-center p-4 d-flex flex-column">
			<div class="p-4"><i class="fa-solid fa-wind fs-2 text-muted"></i></div>
			<div class="text-xs fw-semibold text-muted">[[modules:composer.no-drafts]]</div>
		</div>
		<div class="draft-item-container">
			{{{ each drafts }}}
			{{{ if !@first}}}
			<hr class="my-1"/>
			{{{ end }}}
			<div data-save-id="{./save_id}">
				<div class="d-flex gap-1 justify-content-between ff-base">
					<div class="dropdown-item rounded-1 p-2 d-flex flex-column gap-2 pointer" component="drafts/open" data-save-id="{./save_id}" role="menuitem">
						{{{ if (./action == "topics.post") }}}
						{{{ if ./title}}}
						<div class="text text-xs fw-semibold line-clamp-2 text-break">{./title}</div>
						{{{ end }}}
						{{{ end }}}

						{{{ if (./action == "posts.reply") }}}
						<div class="text text-xs fw-semibold line-clamp-2 text-break">[[topic:composer.replying-to, "{./title}"]]</div>
						{{{ end }}}

						{{{ if (./action == "posts.edit") }}}
						<div class="text text-xs fw-semibold line-clamp-2">[[topic:composer.editing-in, "{./title}"]]</div>
						{{{ end }}}

						{{{ if ./text }}}
						<div class="text text-sm line-clamp-3 text-break">{./text}</div>
						{{{ end }}}
						<div class="timeago text-xs text-muted" title="{./timestampISO}"></div>
					</div>
					<div>
						<button component="drafts/delete" data-save-id="{./save_id}" class="btn btn-light btn-sm">
							<i class="unread fa fa-xs fa-trash text-secondary"></i>
						</button>
					</div>
				</div>
			</div>
			{{{ end }}}
		</div>
	</div>
</div>

<!-- IMPORT partials/account/footer.tpl -->