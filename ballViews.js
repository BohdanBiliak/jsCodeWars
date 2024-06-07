function bouncingBall(h,  bounce,  window) {
    let ballViews = 1;
    let countingBallView = h*bounce;
    if(h > 0 && bounce > 0 && bounce < 1 && window < h){
        while((countingBallView) > window){
            ballViews+=1;
            countingBallView*=bounce;
           
            ballViews+=1;

            
            
        

        }
        return ballViews;
     
      
    }else{
      return -1;
    }

  }
  console.log(bouncingBall(3,0.9,1.5))