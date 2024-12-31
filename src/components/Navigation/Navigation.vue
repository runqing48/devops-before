<template>
  <div class="tdesign-demo-item--layout">
    <t-layout>
      <t-header>
        <t-head-menu value="item1" height="120px">
          <t-menu-item value="item1">已选内容</t-menu-item>
          <t-menu-item value="item2">菜单内容一</t-menu-item>
          <t-menu-item value="item3">菜单内容二</t-menu-item>
          <t-menu-item value="item4" :disabled="true">菜单内容三</t-menu-item>
          <template #operations>
            <a href="javascript:;"><t-icon name="search" class="t-menu__operations-icon" /></a>
            <a href="javascript:;"><t-icon name="notification-filled" class="t-menu__operations-icon" /></a>
            <a href="javascript:;"><t-icon name="home" class="t-menu__operations-icon" /></a>
          </template>
        </t-head-menu>
      </t-header>
      <t-layout>
        <t-aside style="border-top: 1px solid var(--td-component-border)">
          <t-menu theme="light" value="dashboard" style="margin-right: 50px" height="550px">
            <t-menu-item value="dashboard"> <t-icon slot="icon" name="dashboard" />仪表盘 </t-menu-item>
            <t-menu-item value="resource"> <t-icon slot="icon" name="server" />资源列表 </t-menu-item>
            <t-menu-item value="root"> <t-icon slot="icon" name="root-list" />根目录 </t-menu-item>
            <t-menu-item value="control-platform"> <t-icon slot="icon" name="control-platform" />调度平台 </t-menu-item>
            <t-menu-item value="precise-monitor"> <t-icon slot="icon" name="precise-monitor" />精准监控 </t-menu-item>
            <t-menu-item value="mail"> <t-icon slot="icon" name="mail" />消息区 </t-menu-item>
            <t-menu-item value="user-circle"> <t-icon slot="icon" name="user-circle" />个人中心 </t-menu-item>
            <t-menu-item value="play-circle"> <t-icon slot="icon" name="play-circle" />视频区 </t-menu-item>
            <t-menu-item value="edit1"> <t-icon slot="icon" name="edit-1" />资源编辑 </t-menu-item>
          </t-menu>
        </t-aside>
      </t-layout>
    </t-layout>
  </div>
</template>
<script>

export default {
};
</script>
