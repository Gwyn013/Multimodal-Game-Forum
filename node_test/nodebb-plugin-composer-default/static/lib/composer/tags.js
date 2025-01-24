'use strict';

define('composer/tags', ['alerts', 'autocomplete'], function (alerts, Autocomplete) {
    var tags = {};
    var minTags = 1;

    // 预设的颜色色板
    var colorPalette = [
        '#BE3535',
		'#8D2144',
		'#A72C2A',
		'#D86D80',
		'#262E35',
		'#D1CDD3',
		'#FBC446',
		'#E5A9A9',
		'#759DD4',
		'#4164BC',
		'#979EDE',
		'#5F4294',
		'#4C8F71',
		'#79BE96',
		'#3D888B',
		'#A7DODA',
		'#5A322A',
		'#B89F8B',
		'#D66431',
		'#DA8F57'
    ];

    // 存储标签-颜色映射关系
    var tagColorMap = {};

    // Predefined tags
    var tagsData = {
        classA: ['单人', 'CB', 'BG', 'GB', 'BL', 'GL', '水仙', '其他'],
        classB: ['CB×无CP', '1v1', '1vN', '三角×四角关系', '群像'],
        classC: ['清水', '边限不含特殊元素', '边限内容含特殊元素'],
        classD: ['梦向', '大量私设', '原创角色', '左右位互换', '性转', '双性', 'All广', '刘辩×广陵王', '傅融×广陵王', '袁基×广陵王', 
			'左慈×广陵王', '孙策×广陵王', '史子眇×广陵王', '陈登×广陵王', '朱然×广陵王', '黄盖×广陵王', '令狐茂×广陵王', '马腾×广陵王', 
			'刘繇×广陵王', '戏学×广陵王', '安期×广陵王', '凌统×广陵王', '满宠×广陵王', '荀攸×广陵王', '诸葛诞×广陵王', '诸葛瑾×广陵王', 
			'曹植×广陵王', '董奉×广陵王', '张邈×广陵王', '黄月英×广陵王', '孔融×广陵王', '张鲁×广陵王', '甄宓×广陵王', '甘宁×广陵王', 
			'徐庶×广陵王', '张郃×广陵王', '公孙珊×广陵王', '张闿×广陵王', '太史慈×广陵王', '马超×广陵王', '程昱×广陵王', '张角×广陵王', 
			'夏侯惇×广陵王', '王异×广陵王', '张飞×广陵王', '蔡琰×广陵王', '庞统×广陵王', '荀彧×广陵王', '陆绩×广陵王', '许曼×广陵王', 
			'葛洪×广陵王', '周瑜×广陵王', '张仲景×广陵王', '张辽×广陵王', '小乔×广陵王', '王粲×广陵王', '张修×广陵王', '孙权×广陵王', 
			'郭解×广陵王', '陆逊×广陵王', '蜂使×广陵王', '杨阜×广陵王', '李真×广陵王', '徐穉×广陵王', '楼班×广陵王', '李脱×广陵王', 
			'毛玠×广陵王', '周群×广陵王', '第五天×广陵王', '眭固×广陵王', '雀使×广陵王', '干吉×广陵王', '山九×广陵王', '高览×广陵王', 
			'伍丹×广陵王', '崔烈×广陵王', '鸢使×广陵王', '甘缇×广陵王', '关靖×广陵王', '严颜×广陵王', '阿蝉×广陵王', '颜良×广陵王', 
			'文丑×广陵王', '许攸×广陵王', '严白虎×广陵王', '华佗×广陵王', '吕蒙×广陵王', '蛾使×广陵王', '鲁肃×广陵王', '郭嘉×广陵王', 
			'孙尚香×广陵王', '贾诩×广陵王', '杨修×广陵王', '曹操×广陵王', '袁绍×广陵王', '袁术×广陵王', '袁遗×广陵王', '袁尚×广陵王', 
			'陈宫×广陵王', '伏寿×广陵王', '阿貂×广陵王', '刘虞×广陵王', '嘉云×广陵王', '春梦×广陵王', '姬晋×广陵王', '石邑公主×广陵王', 
			'卫子夫×广陵王', '卫青×广陵王', '霍去病×广陵王', '吕布×广陵王', '赵云×广陵王', '刘协×广陵王', '真·大乔×广陵王', 
			'司马徽（水镜先生）×广陵王', '李傕×广陵王', '诸葛亮×广陵王', '祢衡×广陵王', '司马朗×广陵王', '刘备×广陵王', '关羽×广陵王', 
			'浮丘×广陵王', '暴躁船夫×广陵王', '宾客×广陵王', '狂热信徒×广陵王', '府兵×广陵王', '野狼×广陵王', '赤鱬×广陵王', '氐人×广陵王', 
			'董白×广陵王', '小若×广陵王', '曹丕×广陵王', '刘表×广陵王', '蒯越×广陵王', '刘璋×广陵王', '司马懿×广陵王', '广All', 
			'广陵王×刘辩', '广陵王×傅融', '广陵王×袁基', '广陵王×左慈', '广陵王×孙策', '广陵王×史子眇', '广陵王×陈登', '广陵王×朱然', 
			'广陵王×黄盖', '广陵王×令狐茂', '广陵王×马腾', '广陵王×刘繇', '广陵王×戏学', '广陵王×安期', '广陵王×凌统', '广陵王×满宠', 
			'广陵王×荀攸', '广陵王×诸葛诞', '广陵王×诸葛瑾', '广陵王×曹植', '广陵王×董奉', '广陵王×张邈', '广陵王×黄月英', '广陵王×孔融', 
			'广陵王×张鲁', '广陵王×甄宓', '广陵王×甘宁', '广陵王×徐庶', '广陵王×张郃', '广陵王×公孙珊', '广陵王×张闿', '广陵王×太史慈', 
			'广陵王×马超', '广陵王×程昱', '广陵王×张角', '广陵王×夏侯惇', '广陵王×王异', '广陵王×张飞', '广陵王×蔡琰', '广陵王×庞统', 
			'广陵王×荀彧', '广陵王×陆绩', '广陵王×许曼', '广陵王×葛洪', '广陵王×周瑜', '广陵王×张仲景', '广陵王×张辽', '广陵王×小乔', 
			'广陵王×王粲', '广陵王×张修', '广陵王×孙权', '广陵王×郭解', '广陵王×陆逊', '广陵王×蜂使', '广陵王×杨阜', '广陵王×李真', 
			'广陵王×徐穉', '广陵王×楼班', '广陵王×李脱', '广陵王×毛玠', '广陵王×周群', '广陵王×第五天', '广陵王×眭固', '广陵王×雀使', 
			'广陵王×干吉', '广陵王×山九', '广陵王×高览', '广陵王×伍丹', '广陵王×崔烈', '广陵王×鸢使', '广陵王×甘缇', '广陵王×关靖', 
			'广陵王×严颜', '广陵王×阿蝉', '广陵王×颜良', '广陵王×文丑', '广陵王×许攸', '广陵王×严白虎', '广陵王×华佗', '广陵王×吕蒙', 
			'广陵王×蛾使', '广陵王×鲁肃', '广陵王×郭嘉', '广陵王×孙尚香', '广陵王×贾诩', '广陵王×杨修', '广陵王×曹操', '广陵王×袁绍', 
			'广陵王×袁术', '广陵王×袁遗', '广陵王×袁尚', '广陵王×陈宫', '广陵王×伏寿', '广陵王×阿貂', '广陵王×刘虞', '广陵王×嘉云', 
			'广陵王×春梦', '广陵王×姬晋', '广陵王×石邑公主', '广陵王×卫子夫', '广陵王×卫青', '广陵王×霍去病', '广陵王×吕布', '广陵王×赵云', 
			'广陵王×刘协', '广陵王×真·大乔', '广陵王×司马徽（水镜先生）', '广陵王×李傕', '广陵王×诸葛亮', '广陵王×祢衡', '广陵王×司马朗', 
			'广陵王×刘备', '广陵王×关羽', '广陵王×浮丘', '广陵王×暴躁船夫', '广陵王×宾客', '广陵王×狂热信徒', '广陵王×府兵', '广陵王×野狼', 
			'广陵王×赤鱬', '广陵王×氐人', '广陵王×董白', '广陵王×小若', '广陵王×曹丕', '广陵王×蒯越', '广陵王×刘表', '广陵王×刘璋', 
			'广陵王×司马懿', '登广邈', '策广权', '辽广蝉', '辟雍三贤', '飞广郃', '瑾广诞', '董奉×孔融', '郭嘉×贾诩', '吕布×张辽', 
			'颜良×文丑', '华佗×张仲景', '太史慈×甘宁', '满宠×袁遗', '张飞×张郃', '孙权×孙尚香', '陈宫×孔融', '甘宁×周瑜', '石邑公主×令狐茂', 
			'荀彧×贾诩', '张角×干吉', '诸葛诞×诸葛瑾', '张邈×陈登', '司马徽（水镜先生）×葛洪', '周瑜×小乔', '石邑公主×徐庶', '徐庶×石邑公主', 
			'蛾使×雀使', '王异×蔡琰', '孔融×张闿', '公孙珊×赵云', '李脱×李真', '王粲×嘉云', '吕蒙×陆逊', '张郃×凌统', '安期×孙尚香', 
			'干吉×许曼', '陆逊×孙尚香', '陆逊×孙权', '郭解×小白', '袁尚×伍丹', '袁熙×甄宓', '阿蝉×伍丹', '原创角色×鸢男主', '原创角色×广陵王', 
			'原创角色×NPC', '原创角色×密探', '鸢男主×原创角色', '广陵王×原创角色', 'NPC×原创角色', '密探×原创角色', '刘辩', '广陵王', '袁基', 
			'傅融', '孙策', '左慈', '陈登', '史子眇', '黄盖', '朱然', '马腾', '令狐茂', '戏学', '刘繇', '凌统', '安期', '荀攸', '满宠', 
			'诸葛瑾', '诸葛诞', '董奉', '曹植', '黄月英', '张邈', '张鲁', '孔融', '甘宁', '甄宓', '张郃', '徐庶', '张闿', '公孙珊', '马超', 
			'太史慈', '张角', '程昱', '王异', '夏侯惇', '蔡琰', '张飞', '荀彧', '庞统', '许曼', '陆绩', '周瑜', '葛洪', '张辽', '张仲景', 
			'王粲', '小乔', '孙权', '张修', '陆逊', '郭解', '杨阜', '蜂使', '徐穉', '李真', '李脱', '楼班', '周群', '毛玠', '眭固', '第五天', 
			'干吉', '雀使', '高览', '山九', '崔烈', '伍丹', '甘缇', '鸢使', '严颜', '关靖', '颜良', '阿蝉', '许攸', '文丑', '华佗', '严白虎', 
			'蛾使', '吕蒙', '郭嘉', '鲁肃', '贾诩', '孙尚香', '曹操', '杨修', '袁术', '袁绍', '袁尚', '袁遗', '伏寿', '陈宫', '刘虞', '阿貂', 
			'春梦', '嘉云', '石邑公主', '姬晋', '卫子夫', '卫青', '霍去病', '吕布', '赵云', '刘协', '真·大乔', '吴夫人', '小白', '司马徽（水镜先生）', 
			'飞云', '绣球', '李傕', '刘彻', '诸葛亮', '祢衡', '司马朗', '刘备', '关羽', '浮丘', '椰椰大王', '瓜瓜二王', '菠菠打杂', '水桶', 
			'暴躁船夫', '宾客', '狂热信徒', '府兵', '野狼', '赤鱬', '赤鱬·渑', '氐人', '赤鱬·洱', '赤鱬·涔', '赤鱬·泾', '赤鱬·渭', '赤鱬·洛', 
			'赤鱬·汜', '刘豹', '董白', '公孙瓒', '酆公玖', '酆公珠', '司马徵', '程普', '虞翻', '孙辅', '张昭', '陈应', '小若', '袁熙', '袁谭', 
			'张燕', '张绣', '孙登', '曹丕', '许褚', '蒯越', '黄祖', '管宁', '刘表', '刘璋', '士燮', '陶谦', '司马懿', '第一人称', '第二人称', 
			'第三人称', '多重视角', '未找到所需tag'],
    };

				

    // Store selected tags globally within the module
    var selectedTags = {};

	// 获取随机颜色的函数
    function getColorForTag(tag) {
        // 如果标签已有颜色，返回已分配的颜色
        if (tagColorMap[tag]) {
            return tagColorMap[tag];
        }
        // 随机选择一个颜色
        var randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        tagColorMap[tag] = randomColor;
        return randomColor;
    }

    tags.init = function (postContainer, postData) {
        var modal = postContainer.find('#tags-modal');
        if (!modal.length) {
            return;
        }

        // 将模态框移到 body 下
        if (modal.parent().hasClass('composer')) {
            $('body').append(modal);
        }

        // 重新初始化模态框
        modal.off('shown.bs.modal hidden.bs.modal');
        modal.on('shown.bs.modal', function() {
            // 确保模态框可以点击
            $(this).css({
                'display': 'block',
                'pointer-events': 'auto'
            });
            $('.modal-backdrop').css({
                'z-index': '1999',
                'pointer-events': 'auto'
            });
        });

        // 添加获取当前分类ID的逻辑
        var categoryId = ajaxify.data.cid;
        
        // 定义禁用标签的分类ID列表
        var disabledTagCategories = [5, 6, 22, 21];
        
        // 定义只显示ClassD的分类ID列表
        var onlyClassDCategories = [2];
        
        // 检查当前分类是否禁用标签
        var isTagsDisabled = disabledTagCategories.includes(parseInt(categoryId, 10));
        
        // 如果是禁用标签的分类，直接隐藏标签选择按钮
        if (isTagsDisabled) {
            postContainer.find('#select-tags').hide();
            return;
        }
        
        // 检查当前分类是否只显示ClassD
        var showOnlyClassD = onlyClassDCategories.includes(parseInt(categoryId, 10));

        // Create the tagsinput element
        var tagEl = $('<input class="tags" type="text" />');
        postContainer.append(tagEl);

        // Initialize tagsinput with restrictions
        tagEl.tagsinput({
            tagClass: function(item) {
                var color = getColorForTag(item);
                setTimeout(function() {
                    tagEl.siblings('.bootstrap-tagsinput').find('.tag:contains("' + item + '")').css('background-color', color);
                }, 0);
                return 'badge tag-' + item.replace(/[^a-zA-Z0-9]/g, '-');
            }
        });
        
        // Add custom CSS styles
        $('<style>')
            .text(`
                .bootstrap-tagsinput {
                    border: none;
                    box-shadow: none;
                    padding: 0;
                    background: transparent;
                }
                .bootstrap-tagsinput input {
                    display: none;
                }
                .bootstrap-tagsinput .badge {
                    display: inline-block;
                    padding: 4px 8px;
                    margin: 2px;
                    border-radius: 3px;
                    color: #fff !important;
                }
                /* 添加自动补全下拉列表的样式 */
                .ui-autocomplete {
                    max-height: 300px;
                    overflow-y: auto;
                    overflow-x: hidden;
                    padding-right: 20px;
                }
                .ui-menu .ui-menu-item {
                    padding: 5px 10px;
                    cursor: pointer;
                }
                .ui-menu .ui-menu-item.ui-state-disabled {
                    opacity: 0.5;
                    cursor: default;
                }
            `)
            .appendTo('head');

        // Intercept adding tags to enforce predefined tags
        tagEl.on('beforeItemAdd', function (event) {
            if (!isValidTag(event.item)) {
                event.cancel = true; // Cancel adding the tag
                alerts.error('请选择标签。');
            }
        });

        // Fill dropdown options
        fillSelectOptions(modal);

        // Event: Open the modal
        postContainer.find('#select-tags').off('click').on('click', function () {
            // 移除所有现有的模态框背景
            $('.modal-backdrop').remove();
            
            // 确保模态框在正确的位置
            if (!$('body > #tags-modal').length) {
                $('body').append(modal);
            }
            
            modal.modal('show');
        });

        // 初始化存储标签时添加 classD
        var selectedTagsMap = {
            classA: [],
            classB: [],
            classC: [],
            classD: []
        };

        // 设置 Class D 的自动补全
        var classDInput = modal.find('#classD');
        
        app.loadJQueryUI(function () {
            classDInput.autocomplete({
                delay: 100,
                position: { my: 'left bottom', at: 'left top', collision: 'flip' },
                open: function () {
                    $(this).autocomplete('widget').css('z-index', 20000);
                },
                source: function (request, response) {
                    // 根据输入内容过滤标签
                    var matches = tagsData.classD.filter(function(tag) {
                        return tag.toLowerCase().includes(request.term.toLowerCase());
                    });

                    if (matches.length === 0) {
                        // 无匹配项时显示提示
                        response([{
                            label: '无相关内容',
                            value: '',
                            disabled: true
                        }]);
                    } else {
                        response(matches.map(function(tag) {
                            return {
                                label: tag,
                                value: tag
                            };
                        }));
                    }
                },
                select: function (event, ui) {
                    // 防止选择"无相关内容"
                    if (ui.item.disabled) {
                        event.preventDefault();
                        return;
                    }

                    // 添加选中的标签
                    if (!selectedTagsMap.classD.includes(ui.item.value)) {
                        selectedTagsMap.classD.push(ui.item.value);
                        updatePreview();
                    }

                    // 清空输入框
                    setTimeout(function() {
                        classDInput.val('');
                    }, 0);

                    event.preventDefault();
                }
            }).data('ui-autocomplete')._renderItem = function(ul, item) {
                // 自定义渲染下拉项
                var element = $('<li>')
                    .append($('<div>')
                        .addClass(item.disabled ? 'text-muted' : '')
                        .text(item.label));

                if (item.disabled) {
                    element.addClass('ui-state-disabled');
                }

                return element.appendTo(ul);
            };
        });

        // 更新预览函数添加 Class D
        function updatePreview() {
            var preview = modal.find('#tags-preview');
            preview.empty();

            function addPreviewTag(tag, className) {
                var color = getColorForTag(tag);
                var tagElement = $('<span>')
                    .addClass('badge me-2 mb-2')
                    .css('background-color', color)
                    .css('color', '#fff')
                    .html(tag + '<i class="fa fa-times ms-1" style="cursor:pointer;"></i>')
                    .attr('data-tag', tag)
                    .attr('data-class', className);
                
                // 添加删除事件
                tagElement.find('i').on('click', function(e) {
                    e.stopPropagation();
                    removeTag(tag, className);
                });
                
                preview.append(tagElement);
            }

            // 添加所有已选标签到预览
            selectedTagsMap.classA.forEach(tag => addPreviewTag(tag, 'classA'));
            selectedTagsMap.classB.forEach(tag => addPreviewTag(tag, 'classB'));
            if (selectedTagsMap.classC[0]) {
                addPreviewTag(selectedTagsMap.classC[0], 'classC');
            }
            selectedTagsMap.classD.forEach(tag => addPreviewTag(tag, 'classD'));
        }

        // 移除标签的函数
        function removeTag(tag, className) {
            var index = selectedTagsMap[className].indexOf(tag);
            if (index > -1) {
                selectedTagsMap[className].splice(index, 1);
                updatePreview();
            }
        }

        // 处理下拉框选择事件
        modal.find('select').on('change', function() {
            var $select = $(this);
            var className = $select.attr('id');
            var selectedValue = $select.val();

            if (!selectedValue) return;

            if (className === 'classC') {
                // Class C 是单选
                selectedTagsMap.classC = [selectedValue];
            } else {
                // Class A 和 B 是多选
                if (!selectedTagsMap[className].includes(selectedValue)) {
                    selectedTagsMap[className].push(selectedValue);
                }
            }

            updatePreview();
        });

        // 修改modal显示逻辑
        if (showOnlyClassD) {
            // 隐藏Class A/B/C的选择器
            modal.find('#classA').parent().hide();
            modal.find('#classB').parent().hide();
            modal.find('#classC').parent().hide();
            
            // 修改验证逻辑
            validateTags = function(selectedTags) {
                return true; // ClassD是选填的，所以直接返回true
            };
        } else {
            // 显示所有选择器
            modal.find('#classA').parent().show();
            modal.find('#classB').parent().show();
            modal.find('#classC').parent().show();
        }

        // Event: Submit the tags
        modal.find('#submit-tags').on('click', function () {
            tagEl.tagsinput('removeAll');

            selectedTags = {
                classA: showOnlyClassD ? [] : selectedTagsMap.classA,
                classB: showOnlyClassD ? [] : selectedTagsMap.classB,
                classC: showOnlyClassD ? [] : selectedTagsMap.classC,
                classD: selectedTagsMap.classD
            };

            // 获取后台设置的标签限制
            var minTags = ajaxify.data.tagSettings ? parseInt(ajaxify.data.tagSettings.minTags, 10) : 0;
            var maxTags = ajaxify.data.tagSettings ? parseInt(ajaxify.data.tagSettings.maxTags, 10) : 0;
            var totalTags = tags.getTags().length;

            // 检查标签数量限制
            if (totalTags < minTags) {
                return alerts.error('[[error:not-enough-tags, ' + minTags + ']]');
            }
            if (maxTags > 0 && totalTags > maxTags) {
                return alerts.error('[[error:too-many-tags, ' + maxTags + ']]');
            }

            // 根据不同情况使用不同的验证逻辑
            if (!showOnlyClassD && !validateTags(selectedTags)) {
                return alerts.error('有必填项尚未填写，请填写后再提交。');
            }

            // 添加所有标签到 tagsinput，并设置背景色
            const allTags = tags.getTags();
            allTags.forEach(function (tag) {
                if (tag) {
                    tagEl.tagsinput('add', tag);
                    // 为新添加的标签设置背景色
                    var color = getColorForTag(tag);
                    tagEl.siblings('.bootstrap-tagsinput').find('.tag:contains("' + tag + '")').css('background-color', color);
                }
            });

            modal.modal('hide');
        });
    };

    // Get selected tags in a structured way
    tags.getTags = function () {
        var categoryId = ajaxify.data.cid;
        var disabledTagCategories = [5, 6, 22, 21];
        
        // 如果是禁用标签的分类，返回空数组
        if (disabledTagCategories.includes(parseInt(categoryId, 10))) {
            return [];
        }
        
        // 确保返回所有类别的标签
        return [
            ...(selectedTags.classA || []),
            ...(selectedTags.classB || []),
            ...(selectedTags.classC || []),
            ...(selectedTags.classD || [])
        ];
    };

    // Check if enough tags are selected
    tags.isEnoughTags = function () {
        var categoryId = ajaxify.data.cid;
        var disabledTagCategories = [5, 6, 22, 21];
        var showOnlyClassD = [2].includes(parseInt(categoryId, 10));

        // 如果是禁用标签的分类，直接返回true
        if (disabledTagCategories.includes(parseInt(categoryId, 10))) {
            return true;
        }

        // 获取后台设置的标签限制
        var minTags = ajaxify.data.tagSettings ? parseInt(ajaxify.data.tagSettings.minTags, 10) : 0;
        var maxTags = ajaxify.data.tagSettings ? parseInt(ajaxify.data.tagSettings.maxTags, 10) : 0;
        
        // 获取当前选择的所有标签数量
        var totalTags = tags.getTags().length;

        if (showOnlyClassD) {
            // 只显示 ClassD 时只检查总数限制
            return totalTags >= minTags && (maxTags === 0 || totalTags <= maxTags);
        }

        // 检查基本要求
        var basicRequirementsMet = (
            selectedTags.classA.length >= 1 &&
            selectedTags.classB.length >= 1 &&
            selectedTags.classC.length === 1
        );

        // 同时满足基本要求和后台设置的数量限制
        return basicRequirementsMet && 
               totalTags >= minTags && 
               (maxTags === 0 || totalTags <= maxTags);
    };

    // Fill dropdown options
    function fillSelectOptions(modal) {
        Object.keys(tagsData).forEach(function (className) {
            var select = modal.find('#' + className);
            if (select.length && Array.isArray(tagsData[className])) {
                tagsData[className].forEach(function (tag) {
                    var option = document.createElement('option');
                    option.value = tag;
                    option.textContent = tag;
                    select.append(option);
                });
            }
        });
    }

    // Get selected tags from a dropdown
    function getSelectedTags(selectElement) {
        return selectElement.val() || [];
    }

    // Validate the selected tags
    function validateTags(selectedTags) {
        return (
            selectedTags.classA.length >= minTags &&
            selectedTags.classB.length >= minTags &&
            selectedTags.classC.length === 1  // Class C 必须且只能选择一个
            // 不检查 classD，因为它是选填的
        );
    }

    // Check if a tag is valid (exists in predefined tags)
    function isValidTag(tag) {
        return Object.values(tagsData).some(function (tags) {
            return tags.includes(tag);
        });
    }

    return tags;
});
