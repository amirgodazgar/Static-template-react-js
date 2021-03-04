import {image1, image2, image3} from '../coverImage/Images';
import Introduce from '../../layout/catalogPages/Introduce';
import Exhibition from '../../layout/catalogPages/Exhibition';
import Advantages from '../../layout/catalogPages/Advantages';

export const pagesComponents = [
   {
      firstCol : image1 ,
      secondCol : <Introduce/>,
      id:'introduce'
   },
   {
      firstCol : image2  ,
      secondCol : <Exhibition/> ,
      id:'exhibition'
   },
   {
      firstCol : image3  ,
      secondCol : <Advantages/> ,
      id:'advantages'
   },
]

