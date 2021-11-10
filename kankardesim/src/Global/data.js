export const menuData=[
    {name:"Kan Ver", image:require("../Assets/icons/kanver.png"), id:"0"},
    {name:"Kan Bul", image:require("../Assets/icons/arama.png"), id:"1"},
    {name:"Bağışlarım", image:require("../Assets/icons/bagis.png"), id:"2"},
    {name:"Son Bağışlar", image:require("../Assets/icons/sonbagislar.png"), id:"3"},
    {name:"Anket", image:require("../Assets/icons/anket.png"), id:"4"},
    {name:"Amacımız", image:require("../Assets/icons/amacimiz.png"), id:"5"},
]

export const kanBekleyenData=[
    {
        hospitalName:"Özel Keçiören Hastanesi", address:"Köşk, Anavatan Cd. No:20, 06000 Keçiören/ANKARA", city:"Ankara", district:"Keçiören", distance:"650,2", hospitalImages:"https://www.keciorenhastanesi.com/images/galeri/d12a22b1f0cd88e.jpg",koordinat:{lat:40.00242334908114, lrg:32.873555268896965},
        kanBekleyen:"Oğuzhan B.", kanGrubu:"0Rh(+)", telNo:"05423328567", aciklama:"Kardeşim için acil trombosit kan ihtiyacımız var lütfen yardımcı olun.", durum:"0", tarih:"02.11.2021 14:50", baslik:"ACİL KAN LAZIM!",
    },
    {
        hospitalName:"Muğla Eğitim ve Araştırma Hastanesi",address:"Kötekli, Marmaris Yolu No 48, 48000 Menteşe/Muğla", city:"Muğla", district:"Menteşe", distance:"2,1", hospitalImages:"http://mugladevrim.com.tr/UserUploads/arast%C4%B1rmahas%C4%B1.jpg",koordinat:{lat:37.1664199347155, lrg:28.36703754676172},
        kanBekleyen:"Fatih S.", kanGrubu:"0Rh(-)", telNo:"05423328567", aciklama:"Annem için acil trombosit kan ihtiyacımız var lütfen yardımcı olun.", durum:"0", tarih:"02.11.2021 14:50", baslik:"ACİL KAN LAZIM!",
    },
    {
        hospitalName:"Muğla Eğitim ve Araştırma Hastanesi", address:"Kötekli, Marmaris Yolu No 48, 48000 Menteşe/Muğla", city:"Muğla", district:"Menteşe", distance:"2,1", hospitalImages:"http://mugladevrim.com.tr/UserUploads/arast%C4%B1rmahas%C4%B1.jpg", koordinat:{lat:37.1664199347155, lrg:28.36703754676172},
        kanBekleyen:"Kuzey T.", kanGrubu:"ARh(+)", telNo:"05423328567", aciklama:"Eşim için acil trombosit kan ihtiyacımız var lütfen yardımcı olun.", durum:"0", tarih:"02.11.2021 14:50", baslik:"ACİL KAN LAZIM!",
    },
    {
        hospitalName:"Yücelen Hastanesi",address:"Kötekli, Marmaris Bulvarı, 48000 Menteşe/Muğla", city:"Muğla", district:"Menteşe", distance:"2,1", hospitalImages:"https://i.ytimg.com/vi/iIBORVUa1MI/maxresdefault.jpg", koordinat:{lat:37.1771509485638, lrg:28.371940624631616 },
        kanBekleyen:"Jhon S.", kanGrubu:"BRh(+)", telNo:"05423328567", aciklama:"Babam için acil trombosit kan ihtiyacımız var lütfen yardımcı olun.", durum:"0", tarih:"02.11.2021 14:50", baslik:"ACİL KAN LAZIM!",
    },
]

export const kanGruplariData=[
    {name:"0RH(+)", id:"0"},
    {name:"0RH(-)", id:"1"},
    {name:"ARH(+)", id:"2"},
    {name:"ARH(-)", id:"3"},
    {name:"BRH(+)", id:"4"},
    {name:"BRH(-)", id:"5"},
    {name:"ABRH(-)", id:"6"},
    {name:"ABRH(+)", id:"7"},
]