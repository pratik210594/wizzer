<template>
    <div class='rightSideBar-container'>
      <div class='rightSideBar-widget'>
        <div class='widget-count'>01</div>
        <div class='widget-text'>Lorem, ipsum dolor sit amet consectetur.</div>
      </div>
      <div class='rightSideBar-widget'>
        <div class='widget-count'>02</div>
        <div class='widget-text'>Lorem, ipsum dolor sit amet consectetur.</div>
      </div>
      <div class='rightSideBar-widget' style='background: #ecf0fe'>
        <div class='widget-count'>03</div>
        <div class='widget-text'>
          Lorem ipsum dolor sit amet sit Lorem ipsum dolor sit amet sit Lorem
          ipsum dolor sit amet sit
        </div>
      </div>
      <div class='middle-title'>Lorem Ipsum</div>
      <div class='rightSideBar-graph-widget' style='background: #ecf0fe'>
        <div class='widget-text'>
          Lorem ipsum dolor sit amet sit Lorem ipsum dolor sit amet sit Lorem
          ipsum dolor sit amet sit
        </div>
        <div class='widget-graph'>
          <img
            src='../../../assets/dashboard_graph.png'
            class='graph-icon'
            alt='Graph Image'
          />
        </div>
      </div>
      <div class='bottom-widget-container'>
        <div
          class='rightSideBar-widget'
          style='background: rgba(242, 24, 61, 0.05)'
        >
          <div class='widget-text'>Lorem Ipsum</div>
          <div class='widget-count'>2,542</div>
        </div>
        <div
          class='rightSideBar-widget'
          style='background: rgba(42, 107, 207, 0.05)'
        >
          <div class='widget-text'>Lorem Ipsum</div>
          <div class='widget-count'>3,235</div>
        </div>
        <div
          class='rightSideBar-widget'
          style='background: rgba(54, 218, 251, 0.1)'
        >
          <div class='widget-text'>Lorem Ipsum</div>
          <div class='widget-count'>36,001</div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style lang='scss'>
@import '../styles/rightSideBar.scss';
</style>
