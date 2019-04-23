//Memory
function heavyDuty(index) {
    const bigArray = new Array(7000).fill(':)')
    console.log('created!')
    return bigArray[index]
}

heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
const getHeavyDuty = heavyDutyTwo();
getHeavyDuty(688)
getHeavyDuty(689)
getHeavyDuty(700)

function heavyDutyTwo() {
    const bigArray = new Array(7000).fill(':)')
    console.log('created Again!')
    return function (index) {
        return bigArray[index]
    }
}


//Encapsulation
//hiding information
const makeNuclearButton = () => {
    let timeWithoutBoom = 0;
    const passTime = () => timeWithoutBoom++;
    const totalPeaceTime = () => timeWithoutBoom;
    const launch = () => {
        timeWithoutBoom = -1;
        return 'boom';
    }
    setInterval(passTime, 1000);
    return {
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton();
ohno.totalPeaceTime()