//expect(saturdayFun()).to.equal("This Saturday, I want to roller-skate!")
//expect(saturdayFun("bathe my dog")).to.equal("This Saturday, I want to bathe my dog!")
function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`);
}
//saturdayFun('bathe my dog') this overrides 'roller-skate'

// expect(mondayWork()).to.equal("This Monday, I will go to the office.")
//expect(mondayWork("work from home")).to.equal("This Monday, I will work from home.")
function mondayWork(work = 'go to the office'){
    return (`This Monday, I will ${work}.`);
}

function wrapAdjective(char = '*'){
    return function(hello = 'special'){
        return (`You are ${char}${hello}${char}!`);
    }
}
//wrapAdjective('*')('a hard worker')