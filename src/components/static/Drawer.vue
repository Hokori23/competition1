<template>
	<aside class="mdui-drawer mdui-drawer-close" id='drawer'>
		<ul class="mdui-list">
			<li class="mdui-list-item mdui-ripple">
				<div class="mdui-list-item-content">Inbox</div>
				<i class="mdui-list-item-icon mdui-icon material-icons">move_to_inbox</i>
			</li>
			<li class="mdui-list-item mdui-ripple">
				<div class="mdui-list-item-content">Outbox</div>
				<i class="mdui-list-item-icon mdui-icon material-icons">send</i>
			</li>
			<li class="mdui-list-item mdui-ripple">
				<div class="mdui-list-item-content">Trash</div>
				<i class="mdui-list-item-icon mdui-icon material-icons">delete</i>
			</li>
			<li class="mdui-list-item mdui-ripple">
				<div class="mdui-list-item-content">Spam</div>
				<i class="mdui-list-item-icon mdui-icon material-icons">error</i>
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
