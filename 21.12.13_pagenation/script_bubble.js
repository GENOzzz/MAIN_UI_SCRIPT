/*
이벤트 캡쳐링
element.addEventListener('이벤트 이름', 이벤트핸들러 함수, true)
이벤트 버블링과 반대.

이벤트 버블링
element.addEventListener('이벤트 이름', 이벤트핸들러 함수, false)
브라우저가 이벤트를 감지하는 방식 때문입니다.
브라우저는 특정 화면 요소에서 이벤트가 발생했을 때 그 이벤트를 최상위에 있는 화면 요소까지 이벤트를 전파시킵니다. 요거시 키포인트
따라서, 클래스 명 three -> two -> one 순서로 div 태그에 등록된 이벤트들이 실행됩니다. 
마찬가지로 two 클래스를 갖는 두 번째 태그를 클릭했다면 two -> one 순으로 클릭 이벤트가 동작하겠죠.
여기서 주의해야 할 점은 각 태그마다 이벤트가 등록되어 있기 때문에 상위 요소로 이벤트가 전달되는 것을 확인할 수 있습니다.
만약 이벤트가 특정 div 태그에만 달려 있다면 위와 같은 동작 결과는 확인할 수 없습니다.
이와 같은 하위에서 상위 요소로의 이벤트 전파 방식을 이벤트 버블링(Event Bubbling)이라고 합니다.
“Trigger clicks all the way up”
*/
const parent=document.querySelector('.parent');
const child=document.getElementById('child');

function hideParent(){
  console.log('parent click');
  parent.classList.add('hide');
}

function popup(e){
  alert('child click');
  e.stopPropagation();//<<이벤트 버블링 방지
}

function clickbody(){
  console.log('body click');
}

// parent.addEventListener('click',hideParent,true);//캡쳐링
// parent.addEventListener('click',popup,true);
// document.body.addEventListener('click',clickbody,true); //<<body부터 이벤트가 내려감

parent.addEventListener('click',hideParent);//버블링
child.addEventListener('click',popup);//<<child부터 이벤트가 올라옴//alert창이 뜨고 확인하면 parent div가 hide 됨
document.body.addEventListener('click',clickbody);