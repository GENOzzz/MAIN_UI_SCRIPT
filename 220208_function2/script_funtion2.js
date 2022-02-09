//Component(태그이름,{class:'dog',href:'http://www'},[Component()])


var Component=(function(){
    var _name=""//_프라이빗 변수
    
    //_프라이빗 메소드
    function _setAttributes(el, attrs){
        if(attrs === undefined || attrs === null || Object.keys(attrs).length===0) return;
        for(var prop in attrs){//{class:,href:,}=>attrs
            el.setAttribute(prop,attrs[prop])
        }
    }

    function _setValues(el, values){
        if(values===undefined||values===null||values.length===0)return;
        el.innerHTML=''//자식요소 초기화
        values.map(function(value){
            el.append(value)//부모에 자식 요소 추가
        })
    }

    //퍼블릭 메소드
    var create=function(tag, attrs, values){
        var el=document.createElement(tag);//dom객체(부모요소) 생성
        _setAttributes(el,attrs);//속성 설정
        _setValues(el,values);//자식요소 추가
        return el
    }

    var update=function(selector, attrs, values){
        var targetEl=document.querySelector(selector);//selector로 검색
        if(!targetEl) return;
        _setAttributes(targetEl,attrs);//속성 업데이트
        _setValues(targetEl,values);//자식요소 업데이트
        return targetEl;
    }

    return{
        create,//dom 생성하는 퍼블릭 메소드
        update,//dom 업데이트하는 퍼블릭 메소드
        get name(){
            return _name //프라이빗 멤버변수 =>컴포넌트 이름
        },
        set name(value){
            _name=value
        }
    }

})()

var mainDiv=Component.create('div',{class:"main"},[
    Component.create('h1',{class:"title"},['main page']),
    Component.create('textarea',{class:"text-area"})
])

mainDiv.name="main page";//컴포넌트 이름 설정
console.log(mainDiv)
console.log(mainDiv.name)//getter 로 프라이빗 요소 접근

const popupBtns =  document.querySelectorAll('.popup')

function addPopupEvents(){
    for(let i=0; i<popupBtns.length; i++){
        console.log(popupBtns[i])
        popupBtns[i].onclick = function(){
            alert(i)
        }
    }
}

addPopupEvents()