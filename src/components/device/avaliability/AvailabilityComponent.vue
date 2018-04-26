<template>
  <section class="chart-column">
    <div class="chart-row">
      <box-component
        align="center"
        title="Last day availability">
        <div class="doughnut-block">
          <doughnut
            class="pie-chart"
            :chart-data="chartData[0]"/>
        </div>
      </box-component>
      <box-component
        align="center"
        title="Last week availability">
        <div class="doughnut-block">
          <doughnut :chart-data="chartData[1]"/>
        </div>
      </box-component>
      <box-component
        align="center"
        title="Last month availability">
        <div class="doughnut-block">
          <doughnut :chart-data="chartData[2]"/>
        </div>
      </box-component>
    </div>
    <div class="text-section center">
      <span>Availability percentage is based on
      the number of critical alarms raised and resolved.</span>
    </div>
    <div class="linechart-section">
      <box-component
        align="center"
        title="Last month operability">
        <bar-chart
          class="bar-chart"
          :chart-data="barData"/>
        <div class="text-section left">
          <span>Operability chart displays how many devices had
          their average availability on particular level in the last month.</span>
        </div>
      </box-component>
    </div>
  </section>
</template>

<script lang="ts">
  // eslint-disable-next-line space-infix-ops
  import {mapActions, mapGetters} from 'vuex';
  import Vue from 'vue';
  import Doughnut from '../../common/charts/Doughnut';
  import Bar from '../../common/charts/Bar';
  import * as types from '../../../store/modules/types/device-types';


  export default Vue.extend({
    name: 'availability-component',
    components: {
      doughnut: Doughnut,
      'bar-chart': Bar
    },

    computed: mapGetters({
      chartData: types.GET_DEVICE_AVAILABILITY,
      barData: types.GET_DEVICE_OPERABILITY
    }),

    mounted() {
      setTimeout(() => {
        // side-navigation bug temporary fix @author Evgenii Ray
        this.fillData();
      }, 600);
    },

    methods: {
      ...mapActions({
        fetchAvailability: types.FETCH_DEVICE_AVAILABILITY,
        fetchOperability: types.FETCH_DEVICE_OPERABILITY
      }),
      fillData() {
        this.fetchAvailability();
        this.fetchOperability();
      }
    }
  });
</script>

<style lang="scss" scoped>

  .bar-chart {
    width: 82vw;
  }

  .chart-column {
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
  }

  .chart-row {
    display: flex;
    flex-direction: row;
    flex: 1 1;
  }

  .linechart-section {
    display: flex;
    flex: 1 1;
  }

  .text-section {
    padding: 0 1em;
    flex-direction: column;
    font-size: 85%;
    color: black;
    display: flex;
  }

  .doughnut-block {
    width: 70%;
    height: 70%;
  }

  .left {
    align-self: flex-start;
  }

  .center {
    align-items: center;
  }

</style>
