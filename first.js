  'use strict';

   const allworks = [
    {
      NAME : 'HIGHBEE ELECTRICALS',
      WORK : 'electrician',
      phone : '2348074165231',
      img : './image/highbee-electricals.jpg'
    },
    {
      NAME : 'MAASHAALLAH ELECTRICALS',
      WORK : 'electrician',
      phone : '2349083313743',
      img : './image/maa-sha-allah-electrical-service.jpg'
    },
    {
      NAME : 'MR ELECTRIC',
      WORK : 'electrician',
      phone : '2349160356338',
      img : './image/mr-electric.jpg'
    },
     {
      NAME : '3EL-MAJOR',
      WORK : 'electrician',
      phone : '2348109842007',
      img : './image/3EL-MAJOR.jpg'
    },
      {
      NAME : 'GLORY LIGHT',
      WORK : 'electrician',
      phone : '2349063545396',
      img : './image/GLORY-LIGHT.jpg'
    },
    {
      NAME : 'QUAM PLUMBING',
      WORK : 'plumber',
      phone : '2348087889301',
      img : './image/QUAM-PLUMBING-CONTRACTOR.jpg'
    },
    {
      NAME : 'WASMID PLUMBLING',
      WORK : 'plumber',
      phone : '2348175632072',
       img : './image/WASMED-PLUMBLING.jpg'
    },
     {
      NAME : 'FREEBORN PLUMBLING',
      WORK : 'plumber',
      phone : '2349069688472',
       img : './image/freeborn-solution.jpg'
    },
      {
      NAME : 'KAY JOSH PLUMBLING',
      WORK : 'plumber',
      phone : '2348160580207',
       img : './image/KAY-DOSH-PLUMBLING.jpg'
    },
     {
      NAME : 'MD TECH PLUMBLING',
      WORK : 'plumber',
      phone : '2348161565645',
       img : './image/MD-PLUMBLING.jpg'
    },
    {
      NAME : 'DECHEWABLES',
      WORK : 'private chef',
      phone : '2348105529078',
      img : './image/dechewables.jpg'
    },
     {
      NAME : 'BELLYFIXER',
      WORK : 'private chef',
      phone : '2349037681042',
      img : './image/BELLYFIXER.jpg'
    },
     {
      NAME : 'CHEF/SPA',
      WORK : 'private chef',
      phone : '2348163297966',
      img : './image/CHEF-SPA.jpg'
    },
     {
      NAME : 'CHEF FAY',
      WORK : 'private chef',
      phone : '2347019796868',
      img : './image/CHEF-FAY.jpg'
    },
     {
      NAME : 'CHEF NAOMI',
      WORK : 'private chef',
      phone : '2347026568067',
      img : './image/CHEF-NAOMI.jpg'
    },
     {
      NAME : 'DIMMY & SPACES',
      WORK : 'painter',
      phone : '2348027254971',
      img : './image/DIMMY-SPACES.jpg'
    },
     {
      NAME : 'ARISTY PAINTING',
      WORK : 'painter',
      phone : '2348131645896',
      img : './image/ARISTY PAINTING.jpg'
    },
      {
      NAME : 'BIG LUXE INTERIORS',
      WORK : 'painter',
      phone : '2348133588050',
      img : './image/BIG-LUXE.jpg'
    },
     {
      NAME : 'LAGOS PAINTER',
      WORK : 'painter',
      phone : '2348125798211',
      img : './image/LAGOS-PAINTER.jpg'
    },
    ,
     {
      NAME : 'FABDUS CUT',
      WORK : 'barbar',
      phone : '2348036210403',
      img : './image/FABDUS-CUT.jpg'
    },
     {
      NAME : 'AY CUTZ',
      WORK : 'barbar',
      phone : '2347069023957',
      img : './image/AY-CUTZ.jpg'
    },
     {
      NAME : 'D4FADE',
      WORK : 'barbar',
      phone : '2348140789493',
      img : './image/D4FADE.jpg'
    },
     {
      NAME : 'LINE CRAFT',
      WORK : 'barbar',
      phone : '2347011948555',
      img : './image/LINE-CRAFT.jpg'
    },
     {
      NAME : 'TIMMYCUTZ',
      WORK : 'barbar',
      phone : '2349057113411',
      img : './image/TIMMY-CUTZ.jpg'
    },
   ];

   const savedcategory = localStorage.getItem('selectedcategory');

   if(savedcategory === 'electrician') {
    electrician();
   }

   else if(savedcategory === 'plumber') {
     plumber(); 
   }

   else if(savedcategory === 'private chef') {
     privatechef(); 
   }

    else if(savedcategory === 'painter') {
     painter(); 
   }

   
    else if(savedcategory === 'barbar') {
     barbar(); 
   }

   function electrician () {

    localStorage.setItem('selectedcategory', 'electrician');

    var pickedproducthtml = document.querySelector('.pickedworked');
     const electricianarray = [];

     allworks.forEach(worker => {
        if (worker.WORK === 'electrician')
        {
           electricianarray.push(worker);
           console.log(electricianarray);

           const message =`Hello, I saw your profile on CHETA FIX and I need an ${worker.WORK}`;
           const encodedmessage = encodeURIComponent(message);

           pickedproducthtml.innerHTML += `
            <div class = "flex bg-white  h-[600px] w-[90%] justify-center items-center flex-col mt-[40px]">

             <div class = "w-[95%] h-[400px] bg-[#6c6c6c] 
              flex flex-col justify-center items-center">
            <img class = "w-[90%] h-[90%]  " src="${worker.img}">
            </div>
            

            <div class = "flex justify-center flex-col items-center">
            <p class = "mt-[10px] font-bold text-white text-[16px] bg-black">
            NAME - ${worker.NAME} </p>
           <p class = "mt-[10px] font-bold text-white bg-black"> WORK - ${worker.WORK}</p>
           
          
           </div>

          <a  class = "w-[90%] " href= "https://wa.me/${worker.phone}?text=${encodedmessage}" target="_blank ">
            <button class = "h-[50px] bg-black text-white font-bold mt-[10px] w-[100%] 
            rounded-[20px] 
            ">
            MESSAGE ME ON WHATSAPP
            </button>
            </a>

            <a class = "w-[90%]" href="index.html">
            <button class="bg-black hover:bg-blue-700 text-white h-[50px] w-full 
        rounded-[23px] mt-[7px] font-bold
     ">
     GO BACK TO HOMEPAGE 
     </button>
     </a>
           <div>
           `
        }
      });
   };

   
   function plumber () {
    localStorage.setItem('selectedcategory', 'plumber');
    
     const plumberarray = [];

      var pickedproducthtml = document.querySelector('.pickedworked');

     allworks.forEach(worker => {
        if (worker.WORK === 'plumber')
        {
           plumberarray.push(worker);
           console.log(plumberarray);

            const message =`Hello, I saw your profile on CHETA FIX and I need a ${worker.WORK}`;
           const encodedmessage = encodeURIComponent(message);

              pickedproducthtml.innerHTML += `
            <div class = "flex bg-white  h-[600px] w-[90%] justify-center items-center flex-col mt-[40px]">

             <div class = "w-[95%] h-[400px] bg-[#6c6c6c] 
              flex flex-col justify-center items-center">
            <img class = "w-[90%] h-[90%]" src="${worker.img}">
            </div>
            

            <div class = "flex justify-center flex-col items-center">
            <p class = "mt-[10px] font-bold text-white text-[16px] bg-black">
            NAME - ${worker.NAME} </p>
           <p class = "mt-[10px] font-bold text-white bg-black"> WORK - ${worker.WORK}</p>
           
          
           </div>

          <a  class = "w-[90%] " href= "https://wa.me/${worker.phone}?text=${encodedmessage}" target="_blank ">
            <button class = "h-[50px] bg-black text-white font-bold mt-[10px] w-[100%] 
            rounded-[20px] 
            ">
            MESSAGE ME ON WHATSAPP
            </button>
            </a>

            <a class = "w-[90%]" href="index.html">
            <button class="bg-black hover:bg-blue-700 text-white h-[50px] w-full 
        rounded-[23px] mt-[7px] font-bold
     ">
     GO BACK TO HOMEPAGE 
     </button>
     </a>
           <div>
           `
        }
      });
   };


      function privatechef () {

       localStorage.setItem('selectedcategory', 'private chef'); 

        var pickedproducthtml = document.querySelector('.pickedworked');
     const privatechefarray = [];

     allworks.forEach(worker => {
        if (worker.WORK === 'private chef')
        {
           privatechefarray.push(worker);
           console.log(privatechefarray);

           const message =`Hello, I saw your profile on CHETA FIX and I need a ${worker.WORK}`;
           const encodedmessage = encodeURIComponent(message);

            pickedproducthtml.innerHTML += `
            <div class = "flex bg-white  h-[600px] w-[90%] justify-center items-center flex-col mt-[40px]">

             <div class = "w-[95%] h-[400px] bg-[#6c6c6c] 
              flex flex-col justify-center items-center">
            <img class = "w-[90%] h-[90%]" src="${worker.img}">
            </div>
            

            <div class = "flex justify-center flex-col items-center">
            <p class = "mt-[10px] font-bold text-white text-[16px] bg-black">
            NAME - ${worker.NAME} </p>
           <p class = "mt-[10px] font-bold text-white bg-black"> WORK - ${worker.WORK}</p>
           
          
           </div>

          <a  class = "w-[90%] " href= "https://wa.me/${worker.phone}?text=${encodedmessage}" target="_blank ">
            <button class = "h-[50px] bg-black text-white font-bold mt-[10px] w-[100%] 
            rounded-[20px] 
            ">
            MESSAGE ME ON WHATSAPP
            </button>
            </a>

            <a class = "w-[90%]" href="index.html">
            <button class="bg-black hover:bg-blue-700 text-white h-[50px] w-full 
        rounded-[23px] mt-[7px] font-bold
     ">
     GO BACK TO HOMEPAGE 
     </button>
     </a>
           <div>
           `
        }
      });
   };

    function painter () {

       localStorage.setItem('selectedcategory', 'painter'); 

        var pickedproducthtml = document.querySelector('.pickedworked');
     const painterarray = [];

     allworks.forEach(worker => {
        if (worker.WORK === 'painter')
        {
           painterarray.push(worker);
           console.log(painterarray);

           const message =`Hello, I saw your profile on CHETA FIX and I need a ${worker.WORK}`;
           const encodedmessage = encodeURIComponent(message);

            pickedproducthtml.innerHTML += `
            <div class = "flex bg-white  h-[600px] w-[90%] justify-center items-center flex-col mt-[40px]">

             <div class = "w-[95%] h-[400px] bg-[#6c6c6c] 
              flex flex-col justify-center items-center">
            <img class = "w-[90%] h-[90%]" src="${worker.img}">
            </div>
            

            <div class = "flex justify-center flex-col items-center">
            <p class = "mt-[10px] font-bold text-white text-[16px] bg-black">
            NAME - ${worker.NAME} </p>
           <p class = "mt-[10px] font-bold text-white bg-black"> WORK - ${worker.WORK}</p>
           
          
           </div>

          <a  class = "w-[90%] " href= "https://wa.me/${worker.phone}?text=${encodedmessage}" target="_blank ">
            <button class = "h-[50px] bg-black text-white font-bold mt-[10px] w-[100%] 
            rounded-[20px] 
            ">
            MESSAGE ME ON WHATSAPP
            </button>
            </a>

            <a class = "w-[90%]" href="index.html">
            <button class="bg-black hover:bg-blue-700 text-white h-[50px] w-full 
        rounded-[23px] mt-[7px] font-bold
     ">
     GO BACK TO HOMEPAGE 
     </button>
     </a>
           <div>
           `
        }
      });
   };

   function barbar () {

       localStorage.setItem('selectedcategory', 'barbar'); 

        var pickedproducthtml = document.querySelector('.pickedworked');
     const barbararray = [];

     allworks.forEach(worker => {
        if (worker.WORK === 'barbar')
        {
           barbararray.push(worker);
           console.log(barbararray);

           const message =`Hello, I saw your profile on CHETA FIX and I need a ${worker.WORK}`;
           const encodedmessage = encodeURIComponent(message);

            pickedproducthtml.innerHTML += `
            <div class = "flex bg-white  h-[600px] w-[90%] justify-center items-center flex-col mt-[40px]">

             <div class = "w-[95%] h-[400px] bg-[#6c6c6c] 
              flex flex-col justify-center items-center">
            <img class = "w-[90%] h-[90%]" src="${worker.img}">
            </div>
            

            <div class = "flex justify-center flex-col items-center">
            <p class = "mt-[10px] font-bold text-white text-[16px] bg-black">
            NAME - ${worker.NAME} </p>
           <p class = "mt-[10px] font-bold text-white bg-black"> WORK - ${worker.WORK}</p>
           
          
           </div>

          <a  class = "w-[90%] " href= "https://wa.me/${worker.phone}?text=${encodedmessage}" target="_blank ">
            <button class = "h-[50px] bg-black text-white font-bold mt-[10px] w-[100%] 
            rounded-[20px] 
            ">
            MESSAGE ME ON WHATSAPP
            </button>
            </a>

            <a class = "w-[90%]" href="index.html">
            <button class="bg-black hover:bg-blue-700 text-white h-[50px] w-full 
        rounded-[23px] mt-[7px] font-bold
     ">
     GO BACK TO HOMEPAGE 
     </button>
     </a>
           <div>
           `
        }
      });
   };