<template>
  

<div>
    <div class="status_of_node">
      <div class="status_of_node-item">
        <span class="status_of_node-label" style="font-size: 36px;">상태</span>
        <span class="status_of_node-value" style="font-size: 48px;">매우 좋음</span>
      </div>
    </div>
    <div class="chart-grid">
      <div class="chart-item" v-if="lineChartData2.datasets[0].data.length">
        <Line :data="lineChartData2" :options="options2" />
        <h3>용존산소량</h3>
      </div>
      <div class="chart-item" v-if="lineChartData.datasets[0].data.length">
        <Line :data="lineChartData" :options="options2" />
        <h3>수온</h3>
      </div>
      <div class="chart-item" v-if="lineChartData4.datasets[0].data.length">
        <Line :data="lineChartData4" :options="options2" />
        <h3>PH</h3>
      </div>
      <div class="chart-item" v-if="lineChartData3.datasets[0].data.length">
        <Line :data="lineChartData3" :options="options2" />
        <h3>탁도</h3>
      </div>
    </div>
  </div>
<div>

  <div class="status">
    <div class="status-item">
      <div class="status-label">용존산소량</div>
      <div class="status-value" >{{ lineChartData2.datasets[0].data[lineChartData.labels.length - 1] }}</div>
    </div>
    <div class="status-item">
      <div class="status-label">탁도</div>
      <div class="status-value">{{ lineChartData3.datasets[0].data[lineChartData.labels.length - 1] }}NTU</div>
    </div>
    <div class="status-item">
      <div class="status-label">수온</div>
      <div class="status-value">{{ lineChartData.datasets[0].data[lineChartData.labels.length - 1]}}°C </div>
    </div>
    <div class="status-item">
      <div class="status-label">PH</div>
      <div class="status-value">{{ lineChartData4.datasets[0].data[lineChartData.labels.length - 1] }}PH</div>
      
        
    </div>
  </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import * as chartConfig2 from '../assets/chartConfig2.js'
import axios from 'axios';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
)

export default {
  name: 'CombinedChart',
  components: {
    Line 
  },
  data() {
    return {
      options2: {},
      lineChartData: {},
      lineChartData2: {},
      lineChartData3: {},
      lineChartData4: {},
    }
  },
  beforeMount() {
    // 데이터를 생성 또는 가져와서 데이터 속성에 할당
    this.options2 = chartConfig2.options;
    this.lineChartData = chartConfig2.data;
    this.lineChartData2 = chartConfig2.data2;
    this.lineChartData3 = chartConfig2.data3;
    this.lineChartData4 = chartConfig2.data4;

    // 서버에서 데이터 가져오기
    axios.get('http://43.200.120.63/api/Node2').then((response) => {
      const tempData = response.data.map(item => item.temp);
      const ph = response.data.map(item => item.ph);
      const tak = response.data.map(item => item.tak);
      const DO = response.data.map(item => item.do);

      // data 객체 업데이트
      this.lineChartData.datasets[0].data = tempData;
      this.lineChartData2.datasets[0].data = ph;
      this.lineChartData3.datasets[0].data = tak;
      this.lineChartData4.datasets[0].data = DO;
    });
  }
}
</script>

<style>
.status {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px;
  height: 80px; /* Adjust the height as needed */
  width: 90%;
  max-width: 100vw;
  margin: 0 auto;
}
.status_of_node {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 20px; /* 원하는 패딩 크기로 조정하세요 */
  max-width: 100%;
  margin: 10px auto; /* 가운데 정렬을 위해 margin 수정 */
  text-align: center; /* 텍스트 가운데 정렬 추가 */
}

.status_of_node-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.status_of_node-label {
  font-size: 36px; /* 라벨의 글자 크기를 36px로 수정 */
  font-weight: bold;
}

.status_of_node-value {
  font-size: 48px; /* 값의 글자 크기를 48px로 수정 */
  font-weight: bold;
  color: #007bff;
  margin-top: 10px; /* 상단 마진을 조금 더 늘립니다 */
}
.status {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f9fa;
  padding: 20px; /* 원하는 패딩 크기로 조정하세요 */
  height: auto; /* 높이 자동 조정 */
  width: 100%; /* 100%로 변경 */
  max-width: 100%; /* 최대 너비 100%로 변경 */
  margin: 10px auto; /* 수평 중앙 정렬을 위해 margin 수정 */
  text-align: center; /* 텍스트 가운데 정렬 추가 */
}

.status-item {
  display: flex;
  flex-direction: row; /* 요소를 수평으로 배치하도록 변경 */
  justify-content: center;
  align-items: center;
  margin-top: 10px; /* 항목 사이에 상단 여백 추가 */
}

.status-label {
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
}

.status-value {
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  margin-left: 10px; /* 라벨과 값을 좀 더 떨어트립니다 */
  white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
}
.chart {
  height: 800px;
  width: 80%;
  max-width: 100vw;
  margin: 0 auto;
}
.chart-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 10px;
  height: 100vh;
}

.chart-bar {
  height: 100%;
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
}

.chart-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
}

.chart-item {
  height: 100%;
  width: 100%;
  max-width: 100%;
}
</style>
