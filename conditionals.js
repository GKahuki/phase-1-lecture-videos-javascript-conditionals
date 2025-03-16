//function isRose(cat){
//  cat === 'rose'?'Hi rose you are cute': `Hi ${cat}!`
//}

function isRose(cat){
    switch(cat) {
        case 'rose':
            return 'Hi rose you are cute'
        case 'Ted':
            return 'Hi Ted nice to see you'
            default:
                return `Hi ${cat}!`
    }
}
