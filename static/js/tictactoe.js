ifFieldChecked = {
  "i11" : false,
  "i12" : false,
  "i13" : false,
  "i21" : false,
  "i22" : false,
  "i23" : false,
  "i31" : false,
  "i32" : false,
  "i33" : false,
}

function setValue(id) {
  let elem = document.querySelector(id);
  elem.src = "/media/images/O.jpg";
  ifFieldChecked[id]=true;
  doMove();
}
          
function doInit() {
  for (i=1; i<=3; i++) {
    for (j=1; j<=3; j++) {
      id = '#i'+i+j;
      elem = document.querySelector(id);
      elem.src = "/media/images/N.jpg";
      ifFieldChecked[id]=false;
    }
  }
}

function doMove() {
  for (let key in ifFieldChecked) {
      id = '#'+key;
      elem = document.querySelector(id);
      if (!ifFieldChecked[id] ) {
        elem.src = "/media/images/X.jpg";
        ifFieldChecked[id]=true;
        break;
      }
  }
}

