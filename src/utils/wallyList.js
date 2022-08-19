import image1 from '../images/beach-waldo.jpg'
import image2 from '../images/snow-waldo.jpg'
import image3 from '../images/space-waldo.jpg'

import wally from '../images/wally.jpeg'
import odlaw from '../images/Odlaw.jpeg'
import wizard from '../images/wizard.jpeg'

export const wallyList = [
    {
    name:"Wally at the beach",
    id:"beach",
        image:image1,
        itemList:[
            {name:'Odlaw',id:'beach-odlaw',found:false,image:odlaw},
            {name:'Wizard',id:'beach-wizard',found:false,image:wizard},
            {name:'Wally',id:'beach-wally',found:false,image:wally}
        ]
}, {
        name: "Wally in snow",
        id: "snow",
        image: image2,
        itemList: [
            {name: 'Odlaw', id: 'snow-odlaw', found: false, image: odlaw},
            {name: 'Wizard', id: 'snow-wizard', found: false, image: wizard},
            {name: 'Wally', id: 'snow-wally', found: false, image: wally}
        ]
    }


]
