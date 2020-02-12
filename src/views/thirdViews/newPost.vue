<template>
	<div id='newPost'>
		<div class='mdui-text-color-theme-text' id='newPost--Tip'><i class="mdui-icon material-icons">&#xe0cb;</i><span>发布帖子来表达你技能交换的请愿</span></div>
		<div class="mdui-divider"></div>
		<div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-has-bottom">
			<i class="mdui-icon material-icons">create</i>
			<label class="mdui-textfield-label">Title</label>
			<input class="mdui-textfield-input" type="text" maxlength="20" required />
			<div class="mdui-textfield-error">标题不能为空</div>
			<div class="mdui-textfield-counter"><span class="mdui-textfield-counter-inputed">0</span> / 20</div>
		</div>

		<div class="mdui-textfield mdui-textfield-floating-label mdui-textfield-has-bottom">
			<i class="mdui-icon material-icons">chat</i>
			<label class="mdui-textfield-label">Message</label>
			<textarea class="mdui-textfield-input" maxlength="140" required="required"></textarea>
			<div class="mdui-textfield-error">内容不能为空</div>
			<div class="mdui-textfield-counter"><span class="mdui-textfield-counter-inputed">0</span> / 140</div>
		</div>

		<div id='newPost--pushBtn'>
			<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent">发送</button>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	#newPost {
		margin: 0 30px;
	}

	#newPost input,
	#newPost label,
	#newPost textarea {
		margin-left: 45px;
		width: calc(100% - 45px);
	}

	.mdui-textfield-error {
		margin-left: 45px !important;
		width: calc(100% - 45px) !important;
	}

	.mdui-textfield-counter {
		bottom: 0;
	}

	#newPost--Tip {
		margin: 35px 0 25px 0;
		text-align: center;
		opacity: .5;
	}
	#newPost--pushBtn{
		margin: 20px 0;
		display: flex;
		justify-content: flex-end;
	}
</style>
