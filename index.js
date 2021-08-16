document.addEventListener('DOMContentLoaded',(e)=>{

    // deleting and liking for seeds

    // let div = document.querySelectorAll('.record')
    // Array.from(div).forEach(element => {
    //     children=element.children
    //     children[2].addEventListener('click',()=>{
    //         element.remove()
    //     })
    //     children[3].addEventListener('click',()=>{
    //         if(!parseInt(element.children[4].innerHTML)){element.children[4].innerHTML=0}
    //         element.children[4].innerHTML=parseInt(element.children[4].innerHTML)+1
    //     })
    // })

    let name=document.querySelector('#record')
    let artist=document.querySelector('#artist')
    let genre=document.querySelector('#genre')
    let submit=document.querySelector('button')
    submit.addEventListener('click',(e)=>{
        e.preventDefault()

        let record = document.createElement('div')
        record.classList.add("record")
        
        let vinyl=document.createElement('img')
        vinyl.src="vinyl (1).png"
        vinyl.classList.add('vinyl')
        record.appendChild(vinyl)
        
        let x=document.createElement('img')
        x.src="close (1).png"
        x.classList.add('close')
        record.appendChild(x)
        
        let o=document.createElement('img')
        o.src="love (1).png"
        o.classList.add('love')
        record.appendChild(o)

        let likes=document.createElement('p')
        likes.classList.add('likes')
        record.appendChild(likes)

        let info=document.createElement('div')
        info.classList.add('info')
        let p1=document.createElement('p')
        let p2=document.createElement('p')
        let p3=document.createElement('p')
        p1.innerHTML=name.value
        p2.innerHTML=artist.value
        p3.innerHTML=genre.value
        info.appendChild(p1)
        info.appendChild(p2)
        info.appendChild(p3)
        record.appendChild(info)

        let old = document.querySelector('.old')
        old.appendChild(record)

        name.value=''
        artist.value=''
        genre.value=''

        o.addEventListener('click',()=>{
            if(!parseInt(likes.innerHTML)){likes.innerHTML=0}
            likes.innerHTML=parseInt(likes.innerHTML)+1
        })

        x.addEventListener('click',()=>{
            record.remove()
        })
    })
})