
const notifications=[
    {
        name:'Mark',
    image:'./assets/images/avatar-angela-gray.webp',
    message:'followed you',
    time:'3hr ago'
    },
    {
        name:'Joe',
        image:'./assets/images/avatar-anna-kim.webp',
        message:'poked you',
        time:'2hr ago',
    },
    {
        name:'Mark',
    image:'./assets/images/avatar-angela-gray.webp',
    message:'followed you',
    time:'3hr ago'
    },
    {
        name:'Joe',
        image:'./assets/images/avatar-anna-kim.webp',
        message:'poked you',
        time:'2hr ago',
    },
    {
        name:'Mark',
    image:'./assets/images/avatar-angela-gray.webp',
    message:'followed you',
    time:'3hr ago'
    },
    {
        name:'Joe',
        image:'./assets/images/avatar-anna-kim.webp',
        message:'poked you',
        time:'2hr ago',
    },
    {
        name:'Mark',
    image:'./assets/images/avatar-angela-gray.webp',
    message:'followed you',
    time:'3hr ago'
    },
    {
        name:'Joe',
        image:'./assets/images/avatar-anna-kim.webp',
        message:'poked you',
        time:'2hr ago',
    },

]
console.log(notifications)
const notificationElement=document.getElementById('notificationCount')
const countElement=document.createElement('div')
countElement.textContent=notifications.length
console.log(notifications.length)
notificationElement.appendChild(countElement)
const markElement=document.getElementById('mark')

const containerDiv=document.getElementById('container')
notifications.map((obj, key)=>{
    const container=document.createElement('div')
    container.classList.add('notification')
    const imgElement=document.createElement('img')
    imgElement.src=obj.image
    container.appendChild(imgElement)
    const nameElement=document.createElement('h1')
    nameElement.textContent=obj.name
    container.appendChild(nameElement)
    const messageElement=document.createElement('div')
    messageElement.textContent=obj.message
    container.appendChild(messageElement)
    const timeElement=document.createElement('h4')
    timeElement.textContent=obj.time
    container.appendChild(timeElement)
    containerDiv.appendChild(container)
    container.addEventListener('click', function(){
        container.classList.add('clicked')
        notifications.splice(key,1)
        countElement.textContent=notifications.length   
    })
    markElement.addEventListener('click', function(){
        container.classList.add('marked')
        notifications.splice(key)
        countElement.textContent=notifications.length  
        
    })

})


