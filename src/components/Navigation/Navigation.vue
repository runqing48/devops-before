<template>
  <div>
    <t-head-menu theme="light" v-model="menu1Value">
      <t-menu-item value="item1">菜单1</t-menu-item>
      <t-menu-item value="item2">菜单2</t-menu-item>
      <t-menu-item value="item4" :disabled="true">禁用菜单</t-menu-item>
      <template #operations>
        <t-button variant="text" shape="square">
          <t-icon name="search" />
        </t-button>
        <t-button variant="text" shape="square">
          <t-icon name="mail" />
        </t-button>
        <t-button variant="text" shape="square">
          <t-icon name="user" />
        </t-button>
        <t-button variant="text" shape="square">
          <t-icon name="ellipsis" />
        </t-button>
      </template>
    </t-head-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu1Value: 'item2',
      menu2Value: 'item1',
    };
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}

.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
