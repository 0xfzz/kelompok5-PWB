const path = window.location.pathname.split('/')[1]
console.log(path)
const sejarah = [{
    tahun: "1760-1765", 
    peristiwa: "pada awal pembangunannya status tanah tetap atas nama milik Keraton, tetapi penggunaannya di bawah pengawasan Nicolaas Harting, Gubernur Direktur wilayah Patai Utara Jawa."
},{
    tahun: "1765-1788", 
    peristiwa: "status tanah secara formal tetap milik Keraton, tetapi penguasaan benteng dan tanahnya dipegang oleh Belanda di bawah Gubernur W.H. Ossenberg."
},{
    tahun: "1788-1799", 
    peristiwa: "status tanah tetap milik keraton, kemudian pada masa ini, benteng digunakan secara sempurna oleh VOC."
},{
    tahun: "1807-1811", 
    peristiwa: "secara formal tanah tetap milik Keraton, dan penggunaan benteng secara de facto menjadi milik pemerintah Belanda di bawah pemerintahan Gubernur Daendels."
},{
    tahun: "1811-1816", 
    peristiwa: "secara yuridis benteng tetap milik Keraton, kemudian secara de facto benteng dikuasai oleh pemerintahan Inggris di bawah pimpinan Jenderal Raffles."
},{
    tahun: "1816-1942", 
    peristiwa: "sattus tanah tetap berada pada kepemilikan Keraton, dan secara de facto dipegang oleh pihak Belanda, sampai menyerahnya Belanda di tangan Jepang dan benteng ini mulai dikuasai penuh oleh pihak Jepang, yang ditandai dengan penandatanganan perjanjian Kalijati di Jawa Barat, Maret 1942."
},{
    tahun: "1942-1945", 
    peristiwa: "satus tanah tetap milik Keraton, tetapi secara de facto penguasaan berada di tangan Jepang sebagai markas Kempetei atau polisi jepang, gudang mesiu, dan rumah tahanan bagi orang-orang Belanda dan Indo-Belanda serta kaum politisi RI yang menentang Jepang."
},{
    tahun: "1945-1977", 
    peristiwa: "status tanah tetap milik Keraton, setelah proklamasi kemerdekaan RI pada tahun 1945, benteng diambil alih oleh instansi militer RI. Dilanjutkan dengan diambil alih kembali oleh pihak Belanda tahun 1948 karena adanya peristiwa Agresi Militer Belanda II, dan akhirnya direbut kembali oleh Indonesia setelah adanya peristiwa Serangan Umum 1 Maret 1949 dan pengelolaan benteng ditangani oleh APRI (Angkatan perang Republik Indonesia)."
},{
    tahun: "1977-1992", 
    peristiwa: "Pada periode itu, pengelolaan benteng kembali ke pemerintahan Yogyakarta dari Hankam. Pada 9 Agustus 1980, Sri Sultan HB IX dan Mendikbud DR. Daud Jusuf sepakat memanfaatkan bekas benteng Vredeburg sebagai museum, didukung oleh pernyataan Mendikbud Prof. Dr. Nugroho Notosusanto pada 5 November 1984. Sri Sultan HB IX mengizinkan perubahan bangunan pada 1985, dan museum dibuka untuk umum pada 1987. Status tanahnya tetap milik Keraton."
},{
    tahun: "1992 sampai sekarang", 
    peristiwa: "Museum Benteng Vredeburg Yogyakarta diresmikan sebagai Museum Khusus Perjuangan Nasional pada 23 November 1992 oleh SK Mendikbud RI No. 0475/0/1992. Pada 5 September 1997, museum ini diberi tanggung jawab untuk mengelola Museum Perjuangan Yogyakarta di Brontokusuman berdasarkan SK Menteri Kebudayaan dan Pariwisata Nomor: KM. 48/OT. 001/MKP/2003 tanggal 5 Desember 2003."
}]
function createItemTimeline(left, right){
    const nodeWrapper = document.createElement("div")
    const nodeDivRight = document.createElement("div")
    const nodeLine = document.createElement("span")
    nodeLine.className = "relative pentol garis"
    nodeDivRight.style.width = "50%"
    nodeDivRight.style.paddingLeft = "24px"
    nodeDivRight.innerHTML = right
    nodeDivRight.style.paddingBottom = "24px"
    const nodeDivLeft = document.createElement("div")
    nodeDivLeft.style.width = "50%"
    nodeDivLeft.style.paddingRight = "24px"
    nodeDivLeft.style.textAlign = "right"
    nodeDivLeft.style.paddingBottom = "24px"
    nodeDivLeft.innerHTML = left
    nodeWrapper.className = "flex w-full size-regular"
    nodeWrapper.append(nodeDivLeft, nodeLine, nodeDivRight)
    return nodeWrapper
}
if(path == "index.html" || path == ""){
    const tabs = document.querySelectorAll(".tab_btn");
    const all_content = document.querySelectorAll(".content");
    const line = document.querySelector(".line");
    
    tabs.forEach((tab, index) => {
        const isActive = tab.classList.contains("active")
        if(isActive){
            line.style.width = tab.offsetWidth + "px";
            line.style.left = tab.offsetLeft + "px";
        }
        tab.addEventListener("click", (e) => {
            tabs.forEach(tab => { tab.classList.remove("active") });
            tab.classList.add("active");
    
            line.style.width = e.target.offsetWidth + "px";
            line.style.left = e.target.offsetLeft + "px";
    
            all_content.forEach(content => { content.classList.remove("active") });
            all_content[index].classList.add("active");
        })
    })
    const nodes = []
    var apanih = 0
    for(const item of sejarah){
        item.tahun = `<b class="text-krem">${item.tahun}</b>`
        if(apanih == 0){
            nodes.push(createItemTimeline(item.tahun, item.peristiwa))
            apanih = 1
        }else {
            nodes.push(createItemTimeline(item.peristiwa, item.tahun))
            apanih = 0
        }
        
    }
    const elementTab = document.getElementsByClassName("tab")
    function hideAllKonten(){
        const elements = document.getElementsByClassName("konten")
        for(const element of elements){
            element.style.display = "none"
        }
    }
    hideAllKonten()
    function clearClass(){
        for(const tab of elementTab){
            tab.classList.remove("active")
        }
    }
    function hidupKonten(id){
        hideAllKonten()
        document.getElementById(id).style.display = "flex"
    }
    for(const tab of elementTab){
        tab.addEventListener("click", (ev) => {
            clearClass()
            console.log(tab.getAttribute("data-id"))
            tab.classList.add("active")
            hidupKonten(tab.getAttribute("data-id"))
        })
        const active = tab.classList.toString().split(" ").indexOf("active")
        if(active > -1) {
            const id = tab.getAttribute("data-id")
            console.log(id)
            hidupKonten(id)
        }
        
    }
    const slides = document.querySelectorAll(".slide");
    
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${indx * 100}%)`;
    });
    let curSlide = 0
    function prevSlide(){
        curSlide--
        if(slides.length - 1 > curSlide){
            curSlide = slides.length - 1
        }
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    }
    function nextSlide(){
        curSlide++
        if(slides.length - 1 < curSlide){
            curSlide = 0
        }
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    }
    document.querySelector(".btn.next").addEventListener("click", (e) => {
        nextSlide()
    })
    document.querySelector(".btn.prev").addEventListener("click", (e) => {
        prevSlide()
    })
    var slider = document.getElementById("slider")
    var interval = setInterval(nextSlide, 5000)
    slider.addEventListener("mouseover",function(){
        clearInterval(interval)
    })
    slider.addEventListener("mouseout",function(){
        interval = setInterval(nextSlide, 5000)
    })
    document.getElementById("timeline").append(...nodes)
}
document.addEventListener("scroll", (e) => {
    var navbar = document.getElementById("navbar")
    if(!document.getElementById("welcome-text")){
        if(navbar.scrollHeight < document.documentElement.scrollTop){
            navbar.classList.add("bg-black")
        }else{
            navbar.classList.remove("bg-black")
        }
        return 
    }
    var welcomeText = document.getElementById("welcome-text")
    if((welcomeText.offsetTop - navbar.scrollHeight) < document.documentElement.scrollTop){
        navbar.classList.add("bg-black")
    }else{
        navbar.classList.remove("bg-black")
    }
})

