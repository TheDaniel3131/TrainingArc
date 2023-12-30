// async / await 

// async = makes a function return a promise
// await = makes an async function wait for a promise

// async & await allow you write asynchronous code in a synchronous manner
// async doesn't have resolve or reject parameters
// EVERYTHING after await is placed in an event queue

// [1] - FUNCTION without async

// a promise is an object that may produce a single value some time in the future.
// function walkDog(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const dogWallked = false;

//             if(dogWallked){
//                 resolve('Dog walked');
//             } else {
//                 reject('Dog not walked');
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const kitchenCleaned = true;

//             if(kitchenCleaned){
//                 resolve('Kitchen cleaned');
//             } else {
//                 reject('Kitchen not cleaned');
//             }
//         }, 1000);
//     });
// }

// function washClothes(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const clothesWashed = true;

//             if(clothesWashed){
//                 resolve('Clothes washed');
//             } else {
//                 reject('Clothes not washed');
//             }
//         }, 500);
//     });
// }

// Check if promises are working.
// walkDog().then(value => {console.log(value); return cleanKitchen();})
//         .then(value => {console.log(value); return washClothes();})
//         .then(value => {console.log(value); console.log('Tasks completed');})
//         .catch(error => {console.log(error);});

// function doChores(){
//     walkDog()
//         .then(result => {
//             console.log(result);
//             return cleanKitchen();
//         })
//         .then(result => {
//             console.log(result);
//             return washClothes();
//         })
//         .then(result => {
//             console.log(result);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

// Call function
// doChores();


// [2] - FUNCTION with async

async function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWallked = true;

            if(dogWallked){
                resolve('Dog walked');
            } else {
                reject('Dog not walked');
            }
        }, 1500);
    });
}

async function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve('Kitchen cleaned');
            } else {
                reject('Kitchen not cleaned');
            }
        }, 1000);
    });
}

async function washClothes(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const clothesWashed = true;

            if(clothesWashed){
                resolve('Clothes washed');
            } else {
                reject('Clothes not washed');
            }
        }, 500);
    });
}

async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const washClothesResult = await washClothes();
        console.log(washClothesResult);

        console.log('Tasks completed');
    } catch(error){
        console.log(error);
    }
}

// Call function
doChores();
