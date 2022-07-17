// 내번호들 (기존 일반변수에서 배열로 바꾸기)
var p = [0,0,0,0,0,0];

p[0] = 1;
p[1] = 2;
p[2] = 3;
p[3] = 4;
p[4] = 5;
p[5] = 6;

document.write("내가 뽑은 번호는" +p[0]+ "," +p[1]+ "," +p[2]+ "," +p[3]+ "," +p[4]+ "," +p[5])
document.write("<br>")

// 컴 번호들
var random = []; //당첨 번호 생성할 array
var index = 0; //당첨 번호 배열 순서
var r = ""; //로또번호 생성 숫자
while(random.length < 7){
    r = Math.floor(Math.random()*(45)) + 1; //1~45 숫자 랜덤 생성
    if(random.indexOf(r) == -1){ //당첨 번호에 없으면 당첨 번호 추가
        random[index] = r;
        index++;
    }
}

//오름차순으로 숫자정렬
random.sort(function(a,b){
    return a-b;
});

document.write("당첨번호는" +random[0]+ "," +random[1]+ "," +random[2]+ "," +random[3]+ "," +random[4]+ "," +random[5]+ "," + "보너스 번호는" +random[6])
document.write("<br>")


// 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세어 출력하기					 ex. 3개 일치	

var win = 0;    //내가 맞춘 수
var bonus = false;
//컴퓨터의 6개 숫자와 나의 숫자를 비교하여 몇개가 일치하는 지 세는 작업을 반복문으로 처리

for(var i=0; i < 7; i++){
    for(var j=0; j <6; j++){
        if(p[i] == r[j]){
            if(i == 6){
                bonus = true;
            }
            else{
                win++;
            }
        }
    }
}


document.write("win : " + win + "&nbsp" + "bonus: " + bonus);
document.write("<br>");


//등수 출력
if(win == 6){
    document.write("1등입니다.")
}
else if(win == 5){
    if(bonus){document.write("2등입니다.")
    }else{
    document.write("3등입니다.")
    }
}
else if(win == 4){
    document.write("4등입니다.")
}
else if(win == 3){
    document.write("5등입니다.")
}
else{
    document.write("다음 기회에")
}