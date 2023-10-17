

export function measuredData() {
  //측정해서 시각화할 데이터
  return [9, 20, 23, 6.5];//서버에서 가져온 최신화된 데이터를 가져올것
  
}



export function getStatusData() {
  const measuredDataArray = measuredData(); // measuredData 함수 호출
  let PH = 0;
  let 용존산소량 =0;
  if (measuredDataArray[3] < 8.5 && measuredDataArray[3] > 6.49) {
    PH = 7;
  } else {
    PH = 1;
  }//PH값 설정

  if(measuredDataArray[0] > 7.5 || measuredDataArray[0] == 7.5)
  {
    용존산소량 = 7;
  } 
  else if(measuredDataArray[0] < 7.5 &&
     (measuredDataArray[0] >5 || measuredDataArray[0] == 5 ))
  {
    용존산소량 = 6;
  }
  else if(measuredDataArray[0] < 5 &&
    (measuredDataArray[0] >2 || measuredDataArray[0] == 2 ))
 {
   용존산소량 = 3;
 }
 else
{
 용존산소량 = 1;
}


  return [용존산소량, 1, 1, PH];
}


export const options = {
   responsive: true,
   
   scales: {
     y: {
       
     },
   },
   tooltips: {
     intersect: false,
   },
 };