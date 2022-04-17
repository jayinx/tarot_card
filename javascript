let randomNumber = Math.floor(Math.random()*21);
let tarot = randomNumber;
let card;
switch(tarot){
    case 0:
    card ='The Fool';
    break;
    
    case 1:
    card ='The Magician';
    break;
    
        case 2:
    card ='The High Priestess';
    break;
    
        case 3:
    card ='The Empress';
    break;
    
        case 4:
    card ='The Emperor';
    break;
    
        case 5:
    card ='The Hierophant';
    break;
    
            case 6:
    card ='The Lovers';
    break;
    
            case 7:
    card ='The Chariot';
    break;
    
            case 8:
    card ='Strength';
    break;
    
            case 9:
    card ='The Hermit';
    break;
    
            case 10:
    card ='Wheel of Fortune';
    break;
    
            case 11:
    card ='Justice';
    break;
    
            case 12:
    card ='The Hanged Man';
    break;
    
            case 13:
    card ='Death';
    break;
    
            case 14:
    card ='Temperance';
    break;
    
            case 15:
    card ='The Devil';
    break;
    
            case 16:
    card ='The Tower';
    break;
    
            case 17:
    card ='The Star';
    break;
    
            case 18:
    card ='The Moon';
    break;
    
            case 19:
    card ='The Sun';
    break;
    
            case 20:
    card ='Judgement';
    break;
    
            case 21:
    card ='The World';
    break;
    
       default:
    console.log('value not found');
    break;
}
document.getElementById('output').innerHTML = card;
