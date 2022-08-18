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
            {name:'odlaw',id:'beach-odlaw',x: 101, y: 288,found:false,image:odlaw},
            {name:'wizard',id:'beach-wizard',x:253,y:287,found:false,image:wizard},
            {name:'wally',id:'beach-wally',x:579,y:299,found:false,image:wally}
        ]
}, {
        name: "Wally in snow",
        id: "snow",
        image: image2,
        itemList: [
            {name: 'odlaw', id: 'snow-odlaw', x: 301, y: 450, found: false, image: odlaw},
            {name: 'wizard', id: 'snow-wizard', x: 66, y: 529, found: false, image: wizard},
            {name: 'wally', id: 'snow-wally', x: 810, y: 517, found: false, image: wally}
        ]
    }


]
