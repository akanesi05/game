const question = 'ゲーム史上、最も売れたゲーム機はどれ？';
const answers =[ 'スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'];
const correct ='ニンテンドーDS';

document.getElementById('js-question').textContent = question;
const $button = document.getElementsByTagName('button')
//textContentは、このHTMLタグが持っているテキスト情報を取得するプロパティ .textContent = question;で内容を書き換えることができる
$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

document.getElementsByTagName('button')[0].addEventListener('click',()=>{
    if(correct===$button[0].textContent){
     window.alert('正解')
    }else{
        window.alert('不正解')
    }
})

$button[1].addEventListener('click',()=>{
    if(correct===$button[1].textContent){
     window.alert('正解')
    }else{
        window.alert('不正解')
    }
})

$button[2].addEventListener('click',()=>{
    if(correct===$button[2].textContent){
     window.alert('正解')
    }else{
        window.alert('不正解')
    }
})

$button[3].addEventListener('click',()=>{
    if(correct===$button[3].textContent){
     window.alert('正解')
    }else{
        window.alert('不正解')
    }
})

