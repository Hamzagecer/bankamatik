let hesapA = {
    ad :'Hamza Gecer',
    hesapNo:'123456789',
    bakiye:2000,
    ekHesap:1000
}

let hesapB = {
    ad :'Serkan Ozata',
    hesapNo:'123226789',
    bakiye:3000,
    ekHesap:1000
}

    function paraCek(hesap,miktar){
        console.log(`Merhaba ${hesap.ad}`);
  
        if(hesap.bakiye >= miktar){
            hesap.bakiye = hesap.bakiye - miktar;
            console.log('paranizi alabilirsiniz');
        }else{
            let toplam = hesap.bakiye + hesap.ekHesap;

            if(toplam>=miktar){
                if(confirm('ek hesabinizi kullanmak ister misiniz ?')){
                    console.log('paranizi alabilirsiniz');
                    let bakiye = hesap.bakiye;
                    let ekhesap=miktar - bakiye;
                    hesap.bakiye = 0;
                    hesap.ekhesap = hesap.ekhesap - ekhesap;
                }else{
                    console.log(`${hesap.hesapNo}nolu hesabinizda ${miktar} TL bulunmamaktadir.`);
                }
            }else{
                console.log('uzgunuz bakiye yetersiz');
            }


        }
    }

    paraCek(hesapA,2000);  
    paraCek(hesapA,1000); 