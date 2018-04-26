<template>
  <div class="box-container box-shadowed">
    <div class="box-header">
      <span>{{ title }}</span>
    </div>
    <section
      :class="sectionClass"
      class="box-content">
      <slot><p>Some content goes here</p></slot>
    </section>
  </div>
</template>

<script lang="ts">

  import Vue from 'vue';

  export default Vue.extend({
    name: 'box-component',
    props: {
      title: {
        // eslint-disable-next-line space-infix-ops
        type: String,
        default: 'Example Title'
      },
      align: {
        type: String,
        default: 'none'
      },
      fillIn: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {};
    },

    computed: {
      sectionClass() {
        const that:any = this;
        return {
          'padding-of': that.fillIn,
          'align-content-center': that.align === 'center'
        };
      }
    }
  });
</script>

<style scoped lang="scss">

  @import "../../../styles/effects";

  $box-content-padding-right: 10px;
  $box-margin: 10px;
  $box-header-height: 30px;
  $box-text-color: #8A9596;

  $box-header-padding: 10px;
  $box-content-padding: 20px;

  .box-container {
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;

    color: $box-text-color;
    background: white;

    box-sizing: border-box;
    margin: $box-margin;

    span {
      font-size: 14px;
    }
  }

  .box-content {
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    width: 100%;
    min-height: 200px;
    padding: $box-content-padding;
  }

  .box-header {
    text-transform: uppercase;
    min-height: $box-header-height;
    max-height: $box-header-height;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 $box-header-padding;
  }

  .padding-of {
    padding: 0;
  }

  .align-content-center {
    align-items: center;
  }

</style>
