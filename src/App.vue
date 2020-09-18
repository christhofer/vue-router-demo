<template>
  <div id="app">
    <div style="margin: 1rem 0; background: lime;">
      <router-view name="slot1"></router-view>
    </div>
    <div style="margin: 1rem 0; background: gray">
      <router-view></router-view>
    </div>
    <div style="margin: 1rem 0; background: yellow">
      <router-view name="slot2"></router-view>
    </div>
    <div style="margin: 1rem 0; background: pink">
      <router-view name="slot3"></router-view>
    </div>
  </div>
</template>

<style>

</style>
