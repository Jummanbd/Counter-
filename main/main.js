const btns = document.querySelectorAll('.btn');
var valused = document.querySelector('.values');

counter = 0;

btns.forEach(function(btn){
    btn.addEventListener('click', function(even){
        const wrap = even.currentTarget.classList;
        if(wrap.contains('plus')){
            counter ++
        }
        else if(wrap.contains('minus')){
            if(0 === counter--){
                counter = 0;
            }
        }
          valused.textContent = counter;

    })
})

// counter 2

const btn2 = document.querySelectorAll('.btn2');
var valused2 = document.querySelector('.values2');

counter2 = 0;

btn2.forEach(function(btn){
    btn.addEventListener('click', function(event){
        const btnShow = event.target.classList;
        if(btnShow.contains('plus2')){
           counter2++
        }else{
            counter2--
        }
        valused2.textContent = counter2
    })
})





