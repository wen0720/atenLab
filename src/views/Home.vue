<template>
  <div class="row">
    <div class="col-sm-6 d-flex">
      <div class="board d-flex">
        <div class="welcome d-flex">
          <div class="welcome__icon">
            <v-icon name="user-clock" scale="2"></v-icon>
          </div>
          <div class="welcome__info">
            <div class="welcome__account">歡迎您，古學浩</div>
            <div class="welcome__description">
              您已連續登入100天
              你的工作表現有上升的趨勢
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="board">
        <div class="board__content">
            <div id="taskStats__chart">
              <apexchart
                type="bar"
                height="250"
                :options="taskStats.chartOptions"
                :series="taskStats.series">
              </apexchart>
            </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="board">
        <div class="board__title">
          專案管理
        </div>
        <div class="board__content">
          <div id="project__chart">
            <!-- <apexchart
              type="line"
              height="250"
              :options="project.chartOptions"
              :series="project.series">
            </apexchart> -->
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="board">
        <div class="board__title">
          任務管理
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconMixins from '@/mixins/icon';

export default {
  name: 'Home',
  mixins: [iconMixins],
  data() {
    return {
      project: {
        series: [
          {
            name: 'Income',
            type: 'column',
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
          }, {
            name: 'Cashflow',
            type: 'column',
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
          }, {
            name: 'Revenue',
            type: 'line',
            data: [20, 29, 37, 36, 44, 45, 50, 58],
          },
        ],
        chartOptions: {
          chart: {
            height: 250,
            type: 'line',
            stacked: false,
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: [1, 1, 4],
          },
          title: {
            text: 'XYZ - Stock Analysis (2009 - 2016)',
            align: 'left',
            offsetX: 110,
          },
          xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
          },
          yaxis: [
            {
              axisBorder: {
                show: true,
                color: '#008FFB',
              },
              labels: {
                style: {
                  colors: '#008FFB',
                },
              },
              title: {
                text: 'Income (thousand crores)',
                style: {
                  color: '#008FFB',
                },
              },
            // tooltip: {
            //   enabled: true,
            // },
            },
            {
              seriesName: 'Income',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#00E396',
              },
              labels: {
                style: {
                  colors: '#00E396',
                },
              },
              title: {
                text: 'Operating Cashflow (thousand crores)',
                style: {
                  color: '#00E396',
                },
              },
            },
            {
              seriesName: 'Revenue',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#FEB019',
              },
              labels: {
                style: {
                  colors: '#FEB019',
                },
              },
              title: {
                text: 'Revenue (thousand crores)',
                style: {
                  color: '#FEB019',
                },
              },
            },
          ],
          // tooltip: {
          //   fixed: {
          //     enabled: true,
          //     position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
          //     offsetY: 30,
          //     offsetX: 60,
          //   },
          // },
          legend: {
            horizontalAlign: 'left',
            offsetX: 40,
          },
        },
      },
      taskStats: {
        series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        }],
        chartOptions: {
          chart: {
            type: 'bar',
            height: 250,
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '30%',
              endingShape: 'rounded',
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['transparent'],
          },
          xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'],
          },
          yaxis: {
            title: {
              text: '件數',
            },
          },
          fill: {
            opacity: 1,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .board{
    width: 100%;
    background: #fff;
    border-radius: 5px;
    margin: 20px 0;
    overflow: hidden;
    @include box-shadow(0, 0, 8px, rgba(200,200,200,.3));
    &__title{
      color: #333;
      font-size: 1.5rem;
      padding: 10px;
      border-bottom: 1px solid #ddd;
      position: relative;
      &:after{
        content: '';
        position: absolute;
        width: 100%;
        bottom: -2px;
        height: 1px;
        background: #eaeaea;
        left: 0;
      }
    }
    &__content{
      padding: 10px;
    }
  }
  .welcome{
    font-size: 1.5rem;
    padding: 30px 20px;
    color: #fff;
    background: linear-gradient(45deg,#048ed1,#3db6f1);
    text-align: center;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    &__icon{
      width: 60px;
      height: 60px;
      margin: 0 auto 14px auto;
      background: rgba(255, 255, 255, .2);
      border-radius: 50%;
      padding: 14px;
      margin-bottom: 14px;
    }
    &__account{
      font-size: 2rem;
      margin-bottom: 8px
    }
    &__description{
      font-size: 1.2rem;
      opacity: .7;
    }
  }
</style>
