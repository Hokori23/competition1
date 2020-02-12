<template>
	<aside class="mdui-drawer mdui-drawer-close" id='drawer'>
		<ul class="mdui-list">
			<li class="mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons">move_to_inbox</i>
				<div class="mdui-list-item-content">Inbox</div>
			</li>
			<li class="mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons">send</i>
				<div class="mdui-list-item-content">Outbox</div>
			</li>
			<li class="mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons">delete</i>
				<div class="mdui-list-item-content">Trash</div>
			</li>
			<li class="mdui-list-item mdui-ripple">
				<i class="mdui-list-item-icon mdui-icon material-icons">error</i>
				<div class="mdui-list-item-content">Spam</div>
			</li>
		</ul>
	</aside>
</template>

<script>
	export default {
		name: 'Drawer'
	}
</script>

<style>
</style>
