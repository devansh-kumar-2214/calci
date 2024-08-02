function translate() {
    if(localStorage.getItem("lang")=="hi"){

    document.querySelector("#lang").value="hi";
    let x = 0;
    document.getElementById("heading").innerHTML = " करुगाटेड बॉक्स कॉस्ट कैलकुलेटर";
    document.querySelectorAll(".vo").forEach(item => {
        if (x == 0) {
            item.innerHTML = "दिनों मे वैलिडिटी";
            x++;
        }
        else if (x >= 1 && x <= 9) {
            item.innerHTML = String(x) + " दिन";
            x++;
        }
        else if (x == 10) { item.innerHTML = "10 दिन";
            x++;
         }
        else if (x == 11) { item.innerHTML = "15 दिन"; 
            x++;
        }
        else {
            item.innerHTML = "30 दिन";
            x++;
        }
        
    })

    document.getElementById("valid").innerHTML="कोटशन  वैलिडिटी";

    x=0;
    document.querySelectorAll(".bxco").forEach(item => {
        if (x == 0) {
            item.innerHTML = "ब्राउन";
            x++;
        }
        else {
            item.innerHTML = "सफ़ेद";
            x++;
        }
        
    })
document.getElementById("bxcolor").innerHTML="बॉक्स का रंग";
document.getElementById("boxtype").innerHTML="बॉक्स का प्रकार";
x=0;
document.querySelectorAll(".bxto").forEach(item => {
    if (x == 0) {
        item.innerHTML = "पेटी बॉक्स";
        x++;
    }
    else {
        item.innerHTML = "टक इन बॉक्स";
        x++;
    }
})
document.getElementById("L").innerHTML="लंबाई";
document.getElementById("W").innerHTML="चौड़ाई";
document.getElementById("H").innerHTML="ऊंचाई";
document.getElementById("length").placeholder="० इंच ";
document.getElementById("width").placeholder="० इंच ";
document.getElementById("height").placeholder="० इंच ";

document.getElementById("LPLY").innerHTML="प्लाई ";
x=0;
document.querySelectorAll(".plyo").forEach(item => {
    if (x == 0) {
        item.innerHTML = "प्लाई का चयन करें";
        x++;
    }
    else {
        x=x+2;
        let text=String(x)+" प्लाई बॉक्स - ";
        if (x==3){
            text+="सिंगल-वाल";
        }
        else if(x==5){
            text+="डबल-वाल";
        }
        else if (x==7){
            text+="ट्रिपल-वाल";
        }
        else{
            text+="हैवी-ड्यूटी";
        }
        item.innerHTML = text;
    }
})
document.getElementById("LPS").innerHTML="प्रिंट विशिष्टता";
x=0;
document.querySelectorAll(".pso").forEach(item => {
    if (x == 0) {
        item.innerHTML = "सेलेक्ट कलर ऑप्शन";
    }
    else {
        let text="";
        if (x==1){
            text+="कोई कलर नहीं";
        }
        else if(x==2){
            text+="सिंगल कलर";
        }
        else if (x==3){
            text+="दो कलर";
        }
        else{
            text+="मल्टी / फोर कलर";
        }
        item.innerHTML = text;
    }
    x++;
})
x=1;
document.querySelectorAll(".lGSM").forEach(item => {
    if (x%2 == 0) {
        item.innerHTML = String(x)+" फ्लूट जीएसएम";
    }
    else {
        let text=String(x)+" लाइनर जीएसएम";
        item.innerHTML = text;
    }
    x++;
})
document.querySelectorAll(".gsmfield").forEach(item => {
item.placeholder="जीएसएम";
})

x=0;
document.querySelectorAll(".psL").forEach(item => {
    let text=["फिक्स्ड चार्ज ( आईएनआर )","डाई चार्ज ( आईएनआर )","प्रिंटिंग कॉस्ट/बॉक्स ( आईएनआर )","ओवरआल प्रिंटिंग कॉस्ट ( आईएनआर )"]
        item.innerHTML = text[x];
        x++;
})
x=0;
document.querySelectorAll(".psi").forEach(item => {
    let text=["फिक्स्ड चार्ज ( आईएनआर )","डाई चार्ज ( आईएनआर )","प्रिंटिंग कॉस्ट/बॉक्स ( आईएनआर )","ओवरआल प्रिंटिंग कॉस्ट ( आईएनआर )"]
        item.placeholder = text[x];
        x++;
})

document.getElementById("LQ").innerHTML="मात्रा";
document.getElementById("quantity").placeholder="आवश्यक मात्रा";
document.getElementById("PSRL").innerHTML="पेपर शीट दर (प्रति किलोग्राम)";
document.getElementById("rate").placeholder="शीट दर रुपये/किग्रा में";
document.getElementById("SML").innerHTML="विक्रय मार्जिन (%)";
document.getElementById("WPBL").innerHTML="वज़न/बॉक्स :&nbsp";
document.getElementById("CPBL").innerHTML="लागत/बॉक्स :&nbsp";
document.getElementById("TOVL").innerHTML="कुल ऑर्डर मूल्य :&nbsp";
document.getElementById("MFSL").innerHTML="साझा किए जाने वाले अतिरिक्त विवरण का चयन करें";
document.getElementById("MGSMF").innerHTML="जीएसएम विवरण";
document.getElementById("MPSCF").innerHTML="पेपर शीट की लागत";
document.getElementById("MSMF").innerHTML="विक्रय मार्जिन";

document.getElementById("whatsappL").innerHTML="व्हाट्सएप पर शेयर करें";

document.getElementById("phno").placeholder="ग्राहक व्हाट्सएप नंबर";
document.getElementById("emailL").innerHTML="ईमेल पर साझा करें";
document.getElementById("mail").placeholder="ग्राहक का ईमेल पता";
document.getElementById("terms").innerHTML="द्वारा कैलकुलेटर सेवा का उपयोग करके या स्वीकार करें पर क्लिक करके, आप पुष्टि करते हैं कि आपने पढ़ लिया है, समझ लिया है और इससे सहमत हैं इन नियमों और शर्तों से बंधे रहें";
x=0;
document.querySelectorAll(".navlinks").forEach(item => {
    let text=["होम ","आरएफक्यू फॉर्म","डिजिटल कार्ड","लागत कैलकुलेटर","कैलकुलेटर प्रतिक्रिया"]
        item.innerHTML = text[x];
        x++;
})

x=0;
document.querySelectorAll(".sidelinks").forEach(item => {
    let text=["होम ","आरएफक्यू फॉर्म","डिजिटल कार्ड","लागत कैलकुलेटर","कैलकुलेटर प्रतिक्रिया"]
        item.innerHTML = text[x];
        x++;
})

document.getElementById("hinditerms").style.display="block";
document.getElementById("engterms").style.display="none";
document.getElementById("seperator").innerHTML="या";

}

else{

    document.querySelector("#lang").value="en";
    document.getElementById("hinditerms").style.display="none";

}
}

var lang=document.querySelector("#lang");
lang.addEventListener("change",function(){

    if(lang.value=="hi"){
        localStorage.setItem("lang", "hi");
        translate();
        }
        else{
            localStorage.setItem("lang", "eng");
            location.reload();
            }
})
var lang2=document.querySelector("#lang2");
lang2.addEventListener("change",function(){

    if(lang2.value=="hi"){
        localStorage.setItem("lang", "hi");
        
        translate();
        }
        else{
            localStorage.setItem("lang", "eng");
            location.reload();
            }
          
})


translate();
