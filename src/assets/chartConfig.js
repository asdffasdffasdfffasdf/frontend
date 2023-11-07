import dayjs from "dayjs"; // dayjs를 한 번만 가져옴
import axios from 'axios';

var now = dayjs();
now.format();
axios.get('http://43.200.120.63/api/Node1').then((response) => {
  const tempData = response.data.map(item => item.temp);
  const ph = response.data.map(item => item.ph);
  const tak = response.data.map(item => item.tak);
  const DO = response.data.map(item => item.do);
  console.log(response.data);
  console.log(tempData);
  
  // data 객체 업데이트
  data.datasets[0].data = tempData;
  data2.datasets[0].data = ph;
  data3.datasets[0].data = tak;
  data4.datasets[0].data = DO;
});


export const data = {
  //온도
  labels: [
    now.subtract(6, "hour").format("HH:mm"),
    now.subtract(5, "hour").format("HH:mm"),
    now.subtract(4, "hour").format("HH:mm"),
    now.subtract(3, "hour").format("HH:mm"),
    now.subtract(2, "hour").format("HH:mm"),
    now.subtract(1, "hour").format("HH:mm"),
    now.format("HH:mm")
  ],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [],
    }
  ]
};



export const data2 = {
  //ph
  labels: [
    now.subtract(6, "hour").format("HH:mm"),
    now.subtract(5, "hour").format("HH:mm"),
    now.subtract(4, "hour").format("HH:mm"),
    now.subtract(3, "hour").format("HH:mm"),
    now.subtract(2, "hour").format("HH:mm"),
    now.subtract(1, "hour").format("HH:mm"),
    now.format("HH:mm")
  ],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [],
      
    }
  ]
}
export const data3 = {
  //tak
  labels: [
    now.subtract(6, "hour").format("HH:mm"),
    now.subtract(5, "hour").format("HH:mm"),
    now.subtract(4, "hour").format("HH:mm"),
    now.subtract(3, "hour").format("HH:mm"),
    now.subtract(2, "hour").format("HH:mm"),
    now.subtract(1, "hour").format("HH:mm"),
    now.format("HH:mm")
  ],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [],
      
    }
  ]
}

export const data4 = {
  //DO
  labels: [
    now.subtract(6, "hour").format("HH:mm"),
    now.subtract(5, "hour").format("HH:mm"),
    now.subtract(4, "hour").format("HH:mm"),
    now.subtract(3, "hour").format("HH:mm"),
    now.subtract(2, "hour").format("HH:mm"),
    now.subtract(1, "hour").format("HH:mm"),
    now.format("HH:mm")
  ],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [],
      
    }
  ]
}