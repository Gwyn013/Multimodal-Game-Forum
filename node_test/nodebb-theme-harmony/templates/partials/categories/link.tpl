{{{ if ./isSection }}}
<span class="section-name">{./name}</span>
{{{ else }}}
<a class="text-reset" href="{{{ if ./link }}}{./link}{{{ else }}}{config.relative_path}/category/{./slug}{{{ end }}}" itemprop="url">{../name}</a>
{{{ end }}}