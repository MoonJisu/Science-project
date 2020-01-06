const toDoForm = document.querySelector(".js-toDoForm"),
     toDoInput = document.querySelector("input"),
     toDoList = document.querySelector(".js-toDoList");

const TODOS = 'toDos';


let toDos = [];

function deleteTo(event){ //삭제하는 함수

    const btn = event.target; //삭제하려는 것을 타겟 잡고
    const li = btn.parentNode; //부모의 번호를 찾아서 어떤 것을 삭제할지 지정
    toDoList.removeChild(li); //li를 삭제함
    const clean = toDos.filter(function (toDo){

        return toDo.id !== parseInt(li.id); //li.id가 string인 것을 parseInt로 숫자로 바꿈
    });
   toDos = clean;
   savetodos();
    console.log("Delete Task...");

}

function savetodos() { //위에 toDos를 가져와서 로컬에 저장하는 역할
     localStorage.setItem(TODOS, JSON.stringify(toDos)); //JSON은 자바스크립트 객체를 strinng으로 바꿔준다는 것

}


function paintToDo(text) {
    const  li = document.createElement("li");
    const span = document.createElement("span");
    const del = document.createElement("div");
    const  newid = toDos.length + 1;
    del.className = "delbtn";
    
    del.addEventListener("click", deleteTo); //클릭하면 deleteTo 함수가 실행됨.
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(del);
    li.className="list";
    li.id = newid;
    toDoList.appendChild(li);
    const toDoobj ={
        text: text,
        id: newid
    };
    toDos.push(toDoobj);
    savetodos();
} // 텍스트를 가지는 함수. 엔터를 눌렀을 때 li 생성, del 버튼과 span 생성


function handle(event) { // 이벤트를 가지는 함수
    event.preventDefault();
    const  currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadto() {
    const loadedToDos  = localStorage.getItem(TODOS);
    if (loadedToDos !== null){  //loadedToDos가 null이랑 같지 않면 toDoForm을 여기 불러옴.
        const parsedToDos = JSON.parse(loadedToDos);
         parsedToDos.forEach(function(toDo){ //forEach는 array를 위한 함수
            paintToDo(toDo.text);
         });
        //forEach는 기본적으로 함수를 실행하고, array에 담겨있는 것을 각각 한번씩 함수를 실행시켜 줌

    }
} //새로 고침해도 정보가 날라가지 않게 해줌
function init() {
    loadto();
    toDoForm.addEventListener("submit", handle) //toDoform에 추가
}
init(); //함수 호출
