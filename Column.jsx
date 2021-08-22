import { Column_images } from './Column_images';
import React from 'react';
import Nature_Data from '../Data/Nature_Data';
import Pet_Data from '../Data/Pet_Data';
import Cars_Data from '../Data/Cars_Data';
import Tourist_Data from '../Data/Tourist_Data';

const Column_call = (obj) => {
    return (
    <Column_images
    images1={obj.image1}
    images2={obj.image2}
    images3={obj.image3}
    images4={obj.image4}
    images5={obj.image5}
    images6={obj.image6}
    images7={obj.image7}
    />
    )
}


export  function Column() {
   
    return (
        <>
        <div className="Container">
        <div className="gallery_head">
        <h1 id="Nature">Nature</h1>
        </div>
        <div id="Column">
            {Nature_Data.map(Column_call)}  
        </div>
        <div>
           <a href="https://www.google.com/search?q=nature+&tbm=isch&ved=2ahUKEwiiv8yg_tDwAhWrwKACHTGbB0AQ2-cCegQIABAA&oq=nature+&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIFCAAQsQMyAggAMgUIABCxAzIHCAAQsQMQQzIFCAAQsQMyBQgAELEDMgQIABBDMggIABCxAxCDATIFCAAQsQNQ-9pNWM7iTWC57U1oAHAAeACAAc0CiAHoCJIBBzAuNC4xLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=qoWiYKLCF6uBg8UPsbaegAQ&bih=679&biw=1397"  className="linky_link"> See More...</a>
        </div>
        <br/>
        <div className="gallery_head">
        <h1 id="Pets">Pets</h1>
        </div>
        <div id="Column">
            {Pet_Data.map(Column_call)}  
        </div>
        <div >
           <a href="https://www.google.com/search?q=pets+images&tbm=isch&ved=2ahUKEwiF4fOpg9HwAhVd7zgGHa5CDCkQ2-cCegQIABAA&oq=pets+images&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BwgAELEDEEM6BAgAEENQog9YlRtg3xxoAHAAeACAAZgCiAGVCZIBBTAuNS4ymAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=_IqiYIXzBN3e4-EProWxyAI&bih=679&biw=1397"  className="linky_link"> See More...</a>
        </div>
        <br/>
        <div className="gallery_head">
        <h1 id="Cars">Cars</h1>
        </div>
        <div id="Column">
            {Cars_Data.map(Column_call)}  
        </div>
        <div>
           <a href="https://www.google.com/search?q=cars+wallpaper&tbm=isch&ved=2ahUKEwiph5K9ktHwAhW8K7cAHed7D70Q2-cCegQIABAA&oq=cars+wall&gs_lcp=CgNpbWcQARgAMgQIABBDMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgcIABCxAxBDUJcGWNUMYJAZaABwAHgAgAG8AYgB1wWSAQMwLjWYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=3pqiYKmgOrzX3LUP5_e96As&bih=679&biw=1380&hl=en"  className="linky_link"> See More...</a>
        </div>
        <br/>
        <div className="gallery_head">
        <h1 id="Toursit">Tourist Places</h1>
        </div>
        <div id="Column">
            {Tourist_Data.map(Column_call)}  
        </div>
        <div>
           <a href="https://www.google.com/search?q=tourist+places+in+world&tbm=isch&ved=2ahUKEwjLp9fq_d_wAhUSTH0KHXjTDyoQ2-cCegQIABAA&oq=tourist+places+in+&gs_lcp=CgNpbWcQARgCMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgQIABBDMgIIADICCAAyBAgAEENQ8UZYokxg9FtoAHAAeACAAfMBiAGABZIBBTAuMy4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=fWKqYIv1F5KY9QP4pr_QAg&bih=679&biw=1397"  className="linky_link"> See More...</a>
        </div>
        <br/>

        </div>
        
        </>
    )
}
