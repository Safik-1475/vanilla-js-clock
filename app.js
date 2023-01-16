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

const setDate = ()=>{
    const now = new Date();
    // seconds Degress 
    const seconds = now.getSeconds();
    const secondDegress = (seconds / 60 * 360) + 90 ;
    second.style.transform = `rotate(${secondDegress}deg)`;

    // minutes Degress 
    const minutes = now.getMinutes();
    const minuteDegress = (minutes / 60 * 360) + ((seconds / 360) * 6) + 90;
    min.style.transform = `rotate(${minuteDegress}deg)`;

    // hours Degress
    const hours = now.getHours();
    const hourDegress = (hours / 12 * 360) + ((minutes / 60) * 30) + 90;
    hour.style.transform = `rotate(${hourDegress}deg)`;
};
setInterval(setDate,1000);
// setInterval(setDate,1000);