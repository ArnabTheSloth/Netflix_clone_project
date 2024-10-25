
function info() {

    let title = document.getElementById('ctitle').value
    let name = document.getElementById('cname').value
    let views = document.getElementById('cviews').value
    if(views>=1000 && views<1000000){
        views = (Math.floor(views/100))/10 + 'K'
    }
    else if(views>=1000000){
        views = (Math.floor(views/1000000))/10 + 'M'
    }
    else{
        views = views
    }
    let monthsOld = document.getElementById('age').value
    let duration = document.getElementById('cduration').value
    let thumbnail = document.getElementById('thumb').value
    document.querySelector('p.head').innerHTML = title
    document.querySelectorAll('li.desc')[0].innerHTML = name
    document.querySelectorAll('li.desc')[1].innerHTML = views + ' views'
    document.querySelectorAll('li.desc')[2].innerHTML = monthsOld + ' months old'
    document.querySelector('img').src = thumbnail
    document.querySelector('div.duration').innerHTML = duration
}

document.querySelector('#submit').addEventListener('click', info)