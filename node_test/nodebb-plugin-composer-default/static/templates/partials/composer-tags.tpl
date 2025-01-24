<div class="tag-row">
    <div class="tags-container d-flex align-items-center {{{ if tagWhitelist.length }}}haswhitelist{{{ end }}}">
        
        <!-- Button to open the modal for selecting tags -->
        <button id="select-tags" class="btn btn-sm btn-link text-body">
            <span class="visible-sm-inline visible-md-inline visible-lg-inline"><i class="fa fa-tags"></i></span>
            [[tags:select-tags]]
        </button>
        
        <!-- Modal for tag selection -->
        <div id="tags-modal" class="modal fade" tabindex="-1" aria-labelledby="tags-modal-label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="tags-modal-label">[[tags:select-tags]]</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <!-- Class A Tags: Multiple Selection -->
                            <div class="mb-3">
                                <label for="classA">*性向（可多选）</label>
                                <select id="classA" class="form-select option-color" required>
                                    <option value="">请选择...</option>
                                    <!-- Options will be dynamically inserted here -->
                                </select>
                            </div>
                            
                            <!-- Class B Tags: Multiple Selection -->
                            <div class="mb-3">
                                <label for="classB">*主要角色关系（可多选）</label>
                                <select id="classB" class="form-select option-color" required>
                                    <option value="">请选择...</option>
                                    <!-- Options will be dynamically inserted here -->
                                </select>
                            </div>
                            
                            <!-- Class C Tags: Single Selection -->
                            <div class="mb-3">
                                <label for="classC">*边限要素（单选）</label>
                                <select id="classC" class="form-select option-color" required>
                                    <option value="">请选择...</option>
                                    <!-- Options will be dynamically inserted here -->
                                </select>
                            </div>

                            <!-- Class D Tags: Single Selection -->
                            <div class="mb-3">
                                <label for="classD">其他标签（选填）</label>
                                <input type="text" id="classD" class="form-control tag-input" placeholder="输入关键字搜索标签...">
                            </div>
                        </form>

                        <!-- Tags Preview Section -->
                        <div class="mt-4">
                            <h5>已选标签预览：</h5>
                            <div id="tags-preview" class="p-2 border rounded">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                        <button type="button" id="submit-tags" class="btn btn-primary">提交</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>