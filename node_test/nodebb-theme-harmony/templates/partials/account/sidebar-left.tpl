<div class="flex-shrink-0 pe-2 border-end-md text-sm mb-3 flex-basis-md-200">
	<div class="sticky-md-top d-flex flex-row flex-md-column flex-wrap gap-1" style="top: 1rem;z-index: 1;">
		<a href="{config.relative_path}/user/{userslug}" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold {{{ if template.account/profile }}}active{{{ end }}}">
			<div class="flex-grow-1">[[global:about]]</div>
		</a>

		<a href="{config.relative_path}/user/{userslug}/topics"class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
			{{{ if template.account/topics }}}active{{{ end }}}">
			<div class="flex-grow-1">我的主题</div>
			<span class="flex-shrink-0 text-xs" title="{counts.topics}">{humanReadableNumber(counts.topics)}</span>
		</a>

		<a href="{config.relative_path}/user/{userslug}/posts"class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
			{{{ if template.account/posts }}}active{{{ end }}}
			{{{ if template.account/best }}}active{{{ end }}}
			{{{ if template.account/upvoted }}}active{{{ end }}}">
			<div class="flex-grow-1">我的帖子</div>

			<span class="flex-shrink-0 text-xs" title="{counts.posts}">{humanReadableNumber(counts.posts)}</span>
		</a>


		<!-- Add drafts -->
		<a href="{config.relative_path}/user/{userslug}/uploads"class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
			{{{ if template.account/uploads }}}active{{{ end }}}">
			<div class="flex-grow-1">[[global:header.drafts]]</div>
			<span component="drafts/count" class="flex-shrink-0 text-xs">0</span>
		</a>

		<div class="d-flex flex-column">
			<button class="btn btn-ghost btn-sm d-flex gap-2 align-items-center" style="width:100%;" type="button" data-bs-toggle="collapse"
			data-bs-target="#collapseDashboard" aria-expanded="true" aria-controls="collapseDashboard">我的收藏</button>

			<div id="collapseDashboard" class="accordion-collapse collapse" data-bs-parent="#accordionACP">
				<div class="accordion-body p-0 d-grid" style="padding-left:20px !important;">
					<a href="{config.relative_path}/user/{userslug}/watched" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
						{{{ if template.account/watched }}}active{{{ end }}}">
						<div class="flex-grow-1">我收藏的主题</div>
						<span class="flex-shrink-0 text-xs" title="{counts.topics}">{humanReadableNumber(counts.topics)}</span>
					</a>
		
					<a href="{config.relative_path}/user/{userslug}/bookmarks"class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
						{{{ if template.account/bookmarks }}}active{{{ end }}}">
						<div class="flex-grow-1">我收藏的帖子</div>
						<span class="flex-shrink-0 text-xs" title="{counts.bookmarks}">{humanReadableNumber(counts.bookmarks)}</span>
					</a>
				</div>
			</div>
		</div>
		<!--

		<a href="{config.relative_path}/user/{userslug}/groups" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
			{{{ if template.account/groups }}}active{{{ end }}}">
			<div class="flex-grow-1">[[global:header.groups]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.groups}">{humanReadableNumber(counts.groups)}</span>
		</a>

		<a href="{config.relative_path}/user/{userslug}/followers" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
			{{{ if template.account/followers }}}active{{{ end }}}">
			<div class="flex-grow-1">我的粉丝</div>
			<span class="flex-shrink-0 text-xs" title="{counts.followers}">{humanReadableNumber(counts.followers)}</span>
		</a>

		<a href="{config.relative_path}/user/{userslug}/following" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
			{{{ if template.account/following }}}active{{{ end }}}">
			<div class="flex-grow-1">我的关注</div>
			<span class="flex-shrink-0 text-xs" title="{counts.following}">{humanReadableNumber(counts.following)}</span>
		</a>

		{{{ if canEdit }}}
		<a href="{config.relative_path}/user/{userslug}/categories" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
			{{{ if template.account/categories }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:watched-categories]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.categoriesWatched}">{counts.categoriesWatched}</span>
		</a>

		-->


		{{{ if isSelf }}}
		<a href="{config.relative_path}/user/{userslug}/tags" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
			{{{ if template.account/tags }}}active{{{ end }}}">
			<div class="flex-grow-1">我的Tag</div>
			<span class="flex-shrink-0 text-xs" title="{counts.tagsWatched}">{counts.tagsWatched}</span>
		</a>
		{{{ end }}}

		<a href="{config.relative_path}/user/{userslug}/blocks" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
			{{{ if template.account/blocks }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:blocked-users]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.blocks}">{humanReadableNumber(counts.blocks)}</span>
		</a>

		<a href="{config.relative_path}/user/{userslug}/uploads" class="btn btn-ghost btn-sm text-start ff-secondary fw-semibold d-flex gap-2 align-items-center
			{{{ if template.account/uploads }}}active{{{ end }}}">
			<div class="flex-grow-1">[[global:uploads]]</div>
			<span class="flex-shrink-0 text-xs" title="{counts.uploaded}">{humanReadableNumber(counts.uploaded)}</span>
		</a>
		{{{ end }}}

		{{{ if (loggedIn && (!isSelf && !banned)) }}}
		<hr class="w-100 my-2"/>

		<!--

		<a href="#" component="account/flag" class="btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 text-start">
			<i class="flex-shrink-0 fa-solid fa-flag text-danger"></i>
			<div class="flex-grow-1 text-nowrap">[[user:flag-profile]]</div>
		</a>
		<a href="#" component="account/block" class="btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 text-start {{{ if isBlocked }}}hidden{{{ end }}}">
			<i class="flex-shrink-0 fa-solid fa-ban text-danger"></i>
			<div class="flex-grow-1 text-nowrap">[[user:block-user]]</div>
		</a>
		<a href="#" component="account/unblock" class="btn btn-ghost btn-sm ff-secondary d-flex align-items-center gap-2 text-start {{{ if !isBlocked }}}hidden{{{ end }}}">
			<i class="flex-shrink-0 fa-solid fa-ban text-danger"></i>
			<div class="flex-grow-1 text-nowrap">[[user:unblock-user]]</div>
		</a>
		{{{ end }}}

		{{{ if canEdit }}}
		<hr class="w-100 my-2"/>
		<a href="{config.relative_path}/user/{userslug}/edit" class="btn btn-ghost btn-sm ff-secondary text-xs text-start
		{{{ if template.account/edit }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:edit-profile]]</div>
		</a>
		<a href="{config.relative_path}/user/{userslug}/settings" class="btn btn-ghost btn-sm ff-secondary text-xs text-start
			{{{ if template.account/settings }}}active{{{ end }}}">
			<div class="flex-grow-1">[[user:settings]]</div>
		</a>
		{{{ end }}}

		{{{ each profile_links }}}
		<a href="{config.relative_path}/user/{userslug}/{./route}" class="btn btn-ghost btn-sm ff-secondary text-xs text-start plugin-link {{{ if ./public }}}public{{{ else }}}private{{{ end }}} {{{ if (url == ./url) }}}active{{{ end }}}" id="{./id}">
			<div class="flex-grow-1">{./name}</div>
		</a>
		{{{end}}}
	</div>
</div>