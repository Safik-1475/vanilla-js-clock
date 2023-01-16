// const minute = document.querySelector('.min-hand');
// const second = document.querySelector('.second-hand');
// const hour = document.querySelector('.hour-hand');

// const setDate = () => {
//     const now = new Date();
//     const seconds = now.getSeconds();
//     const secondDegress = ((seconds / 60) * 360) + 90;
//     second.style.transform = `rotate(${secondDegress}deg)`;

//     const minutes = now.getMinutes();
//     const minDegress = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
//     minute.style.transform = `rotate(${minDegress}deg)`;

//     const hours = now.getHours();
//     const hourDegress = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
//     hour.style.transform = `rotate(${hourDegress}deg)`;
// }
// setInterval(setDate, 1000);

const second = document.querySelector('.second-hand');
const min = document.querySelector('.min-hand');
const hour = document.querySelector('.hour-hand');

// const setTime = ()=>{
//     const date = new Date();
//     const seconds = date.getSeconds();
//     const secondDegress = (seconds / 60 * 360) + 90;
//     console.log(secondDegress);
//     second.style.transform = `rotate(${secondDegress}deg)`;

//     const minutes = date.getMinutes();
//     const minutesDegress = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
//     console.log(minutesDegress);
//     min.style.transform = `rotate(${minutesDegress}deg)`;

//     const hours = date.getHours();
//     // console.log(hours);
//     const hoursDegress = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
//     console.log(hoursDegress);
//     hour.style.transform = `rotate(${hoursDegress}deg)`;

// };

// setInterval(setTime,1000);

// const setDate = () =>{
//     const now =  new Date();
//     // console.log(now);
//     const seconds = now.getSeconds();
//     const secondDegress = (seconds / 60 * 360) + 90;
//     second.style.transform = `rotate(${secondDegress}deg)`;

//     const minutes = now.getMinutes();
//     const minutesDegress = ((minutes / 60) * 360) + ((seconds / 360) * 6 ) + 90;
//     min.style.transform = `rotate(${minutesDegress}deg)`;


//     const hours = now.getHours();
//     const hourDegress = ((hours / 12) * 360) + ((minutes / 60) * 30) +90;
//     hour.style.transform = `rotate(${hourDegress}deg)`;

// }
// setInterval(setDate,1000);
// setInterval(setDate);

const setDate = ()=>{
    const now = new Date();
    // seconds Degress 
    const seconds = now.getSeconds() + 1;
    const secondDegress = (seconds / 60 * 360) ;
    second.style.transform = `rotate(${secondDegress}deg)`;

    // minutes Degress 
    const minutes = now.getMinutes();
};
setInterval(setDate,1000)