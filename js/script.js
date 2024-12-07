let timeH = 86400
let timeM = 3600
let timeS = 60 
setInterval(function(){
    if(document.querySelector('.mashrooms-action-time_h')){
        timeH = Math.floor((timeH - 1))
        timeM = Math.floor((timeM-1))
        timeS = Math.floor(timeS - 1)
    
        if(timeH == 0 ){
            timeH = '00'
        } else if(timeH < 10 && timeH > 0){
            timeH = '0' + timeH
        } else if(timeH == -1){
            timeH = 59
        }
        if(timeM == 0 ){
            timeM = '00'
        } else if(timeM < 10 && timeM > 0){
            timeM = '0' + timeM
        } else if(timeM == -1){
            timeM = 59
        }
        if(timeS == 0 ){
            timeS = '00'
        } else if(timeS < 10 && timeS > 0){
            timeS = '0' + timeS
        } else if(timeS == -1){
            timeS = 59
        }
        
        let h = document.querySelectorAll('.mashrooms-action-time_h')
        let m = document.querySelectorAll('.mashrooms-action-time_m')
        let s = document.querySelectorAll('.mashrooms-action-time_s')

        console.log('dsada')
        
        for (let i = 0; i < h.length; i++){
            h[i].innerHTML = Math.floor(timeH /60 / 60)
            m[i].innerHTML = Math.floor(timeM / 60)
            s[i].innerHTML= timeS
        
        }
        console.log('sdas')
    } else{
        clearInterval()
    }
      
},1000)


setInterval(function(){
    if(document.querySelector('.nft-container-action-time_h')){

        timeH = Math.floor((timeH - 1))
        timeM = Math.floor((timeM-1))
        timeS = Math.floor(timeS - 1)
    
        if(timeH == 0 ){
            timeH = '00'
        } else if(timeH < 10 && timeH > 0){
            timeH = '0' + timeH
        } else if(timeH == -1){
            timeH = 59
        }

        if(timeM == 0 ){
            timeM = '00'
        } else if(timeM < 10 && timeM > 0){
            timeM = '0' + timeM
        } else if(timeM == -1){
            timeM = 59
        }

        if(timeS == 0 ){
            timeS = '00'
        } else if(timeS < 10 && timeS > 0){
            timeS = '0' + timeS
        } else if(timeS == -1){
            timeS = 59
        }
        
        let h = document.querySelectorAll('.nft-container-action-time_h')
        let m = document.querySelectorAll('.nft-container-action-time_m')
        let s = document.querySelectorAll('.nft-container-action-time_s')
        
        for (let i = 0; i < h.length; i++){
            h[i].innerHTML = Math.floor(timeH /60 / 60)
            m[i].innerHTML = Math.floor(timeM / 60)
            s[i].innerHTML= timeS
        
        }

        

    } else{
        clearInterval()
    }
    
},1000)



document.querySelector('.header-menu-burger_button').addEventListener('click',function(){
    document.querySelector('.menu-burger').style.width = '100%'
    
}) 
document.querySelector('.menu-burger-close').addEventListener('click',function(){
    document.querySelector('.menu-burger').style.width = '0%'
})

if(document.querySelector('#marketplace-search')){
    document.querySelector('#marketplace-search').addEventListener('change',function(){
        let value = this.value.trim().toLowerCase()
        let cards = document.querySelectorAll('[data-namecard]');
        if (value !=''){
            cards.forEach(function(e){
                let valueCard = e.dataset.namecard.toLowerCase()
                if(valueCard.search(value) == -1){
                    e.classList.add('d-none')
                }else{
                    e.classList.remove('d-none')
                }
            })
        } else{
            cards.forEach(function(e){
                e.classList.remove('d-none')
            })
        }
     }) 
     document.querySelector('#marketplace-search').addEventListener('input',function(){
        let value = this.value.trim().toLowerCase()
        let cards = document.querySelectorAll('[data-namecard]');
        if (value !=''){
            cards.forEach(function(e){
                let valueCard = e.dataset.namecard.toLowerCase()
                if(valueCard.search(value) == -1){
                    e.classList.add('d-none')
                }else{
                    e.classList.remove('d-none')
                }
            })
        } else{
            cards.forEach(function(e){
                e.classList.remove('d-none')
            })
        }
     }) 
}

 
