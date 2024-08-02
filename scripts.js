document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const sideMenu = document.querySelector(".side-menu");

  navbarToggler.addEventListener("click", function () {
    sideMenu.classList.toggle("active");
  });
});

var Date = new Date();
var date = Date.toLocaleString(); // Convert date to local date and time string
date = date + " IST";
console.log(date);
// Adding Query Selector

var length = document.querySelector("#length");
var width = document.querySelector("#width");
var height = document.querySelector("#height");
var printed = document.querySelector("#printed");
var quantity = document.querySelector("#quantity");
var PLY = document.querySelector("#PLY");
var rate = document.querySelector("#rate");
var price = document.querySelector("#price");
var ugsm = document.querySelector("#UGSM");
var fgsm = document.querySelector("#FGSM");
var lgsm = document.querySelector("#LGSM");
var gsm4 = document.querySelector("#GSM4");
var gsm5 = document.querySelector("#GSM5");
var gsm6 = document.querySelector("#GSM6");
var gsm7 = document.querySelector("#GSM7");
var gsm8 = document.querySelector("#GSM8");
var gsm9 = document.querySelector("#GSM9");
var margin = document.querySelector("#margin");
var print = document.querySelector("#printed");
var Fixed_charge = document.querySelector("#fixed_charge");
var Die_cost = document.querySelector("#die_cost");
var form = document.querySelector("#form");
var pcpb = document.querySelector("#printpbox");
var poverallcost = document.querySelector("#printoverall");
var fmail = document.querySelector("#mail");
var fphno = document.querySelector("#phno");


// Adding Event Listner

var Length, Width, Height, gsm, ply, Rate, Price, Printed = 0.0, Quantity, UGSM = 0, FGSM = 0, LGSM = 0, GSM4 = 0, GSM5 = 0, GSM6 = 0, GSM7 = 0, GSM8 = 0, GSM9 = 0, Margin = 0.0, PrintpBox = 0, Overallcost = 0;
margin.addEventListener("input", function () {
  if (document.getElementById("margin").value == "") {
    Margin = 0;
  }

  else {
    Margin = parseFloat(document.getElementById('margin').value);
    Margin = parseFloat(Margin);

  }
  console.log(Margin);
  Costing();
})

length.addEventListener("input", function () {
  Length = parseFloat(document.getElementById('length').value);
  Length = parseFloat(Length);

})

width.addEventListener("input", function () {
  Width = parseFloat(document.getElementById('width').value);
  Width = parseFloat(Width);
  // console.log(Width);
  Costing();

})

height.addEventListener("input", function () {
  Height = parseFloat(document.getElementById('height').value);
  Height = parseFloat(Height);
  // console.log(Height);
  Costing();

})

lgsm.addEventListener("input", function () {
  LGSM = parseFloat(document.getElementById('LGSM').value);
  LGSM = parseFloat(LGSM);
  console.log(LGSM);
  Costing();
})

fgsm.addEventListener("input", function () {
  FGSM = parseFloat(document.getElementById('FGSM').value);
  FGSM = parseFloat(FGSM);
  console.log(FGSM);
  Costing();
})
ugsm.addEventListener("input", function () {
  UGSM = parseFloat(document.getElementById('UGSM').value);
  UGSM = parseFloat(UGSM);
  console.log(UGSM);
  Costing();
})
gsm4.addEventListener("input", function () {
  GSM4 = parseFloat(document.getElementById('GSM4').value);
  GSM4 = parseFloat(GSM4);
  console.log(GSM4);
  Costing();
})
gsm5.addEventListener("input", function () {
  GSM5 = parseFloat(document.getElementById('GSM5').value);
  GSM5 = parseFloat(GSM5);
  console.log(GSM5);
  Costing();
})
gsm6.addEventListener("input", function () {
  GSM6 = parseFloat(document.getElementById('GSM6').value);
  GSM6 = parseFloat(GSM6);
  console.log(GSM6);
  Costing();
})
gsm7.addEventListener("input", function () {
  GSM7 = parseFloat(document.getElementById('GSM7').value);
  GSM7 = parseFloat(GSM7);
  console.log(GSM7);
  Costing();
})
gsm8.addEventListener("input", function () {
  GSM8 = parseFloat(document.getElementById('GSM8').value);
  GSM8 = parseFloat(GSM8);
  console.log(GSM8);
  Costing();
})
gsm9.addEventListener("input", function () {
  GSM9 = parseFloat(document.getElementById('GSM9').value);
  GSM9 = parseFloat(GSM9);
  console.log(GSM9);
  Costing();
})


quantity.addEventListener("input", function () {
  Quantity = parseFloat(document.getElementById('quantity').value);
  Quantity = parseFloat(Quantity);
  Costing();
})

print.addEventListener("change", function () {
  if (print.value == "one" || print.value == "Two" || print.value == "Multi") {
    prt_ques.style.display = "block";
    cal_print();

    Die_cost.addEventListener("input", function () {
      Costing();
    })
    Fixed_charge.addEventListener("input", function () {
      Costing();
    })
    pcpb.addEventListener("input", () => {
      console.log(pcpb.value);
      Costing();
    })

    poverallcost.addEventListener("input", () => {
      console.log(poverallcost.value);
      Costing();
    })


  }
  else {

    prt_ques.style.display = "none";
  }
  Costing();
})


// prt_type.addEventListener("change", function () {

//   Printed = 0.000;


//   // cal_print();
//   // console.log(Printed);
//   Costing();

// })

PLY.addEventListener("input", function () {
  ply = parseInt(document.getElementById('PLY').value);
  ply = parseFloat(ply);
  // if (ply=="4"){
  //   document.getElementById("gsm1").style.display="block";
  //   document.getElementById("gsm2").style.display="none";
  //   document.getElementById("gsm3").style.display="none";
  //   document.getElementById("gsm4").style.display="none";
  //   document.getElementById("gsm5").style.display="none";
  //   document.getElementById("gsm6").style.display="none";
  // }
  if (ply == "5") {
    document.getElementById("gsm1").style.display = "block";
    document.getElementById("gsm2").style.display = "block";
    document.getElementById('GSM6').disabled = true;
    document.getElementById('GSM6').style.backgroundColor = "#8888886c";
    document.getElementById("gsm3").style.display = "block";
    document.getElementById("gsm4").style.display = "none";
    document.getElementById("gsm5").style.display = "none";
    document.getElementById("gsm6").style.display = "none";

  }

  // if (ply=="6"){
  //   document.getElementById("gsm1").style.display="block";
  //   document.getElementById("gsm2").style.display="block";
  //   document.getElementById("gsm3").style.display="block";
  //   document.getElementById("gsm4").style.display="none";
  //   document.getElementById("gsm5").style.display="none";
  //   document.getElementById("gsm6").style.display="none";
  // }
  if (ply == "7") {
    document.getElementById("gsm1").style.display = "block";
    document.getElementById("gsm2").style.display = "block";
    document.getElementById("gsm3").style.display = "block";
    document.getElementById("gsm4").style.display = "block";
    document.getElementById("gsm5").style.display = "none";
    document.getElementById("gsm6").style.display = "none";
    document.getElementById('GSM6').disabled = false;
    document.getElementById('GSM6').style.backgroundColor = "white";
  }
  // if (ply=="8"){
  //   document.getElementById("gsm1").style.display="block";
  //   document.getElementById("gsm2").style.display="block";
  //   document.getElementById("gsm3").style.display="block";
  //   document.getElementById("gsm4").style.display="block";
  //   document.getElementById("gsm5").style.display="block";
  //   document.getElementById("gsm6").style.display="none";
  // }

  if (ply == "9") {
    document.getElementById("gsm1").style.display = "block";
    document.getElementById("gsm2").style.display = "block";
    document.getElementById("gsm3").style.display = "block";
    document.getElementById("gsm4").style.display = "block";
    document.getElementById("gsm5").style.display = "block";
    document.getElementById("gsm6").style.display = "block";
    document.getElementById('GSM6').disabled = false;
    document.getElementById('GSM6').style.backgroundColor = "white";
  }
  if (ply == "3") {
    document.getElementById("gsm1").style.display = "none";
    document.getElementById("gsm2").style.display = "none";
    document.getElementById("gsm3").style.display = "none";
    document.getElementById("gsm4").style.display = "none";
    document.getElementById("gsm5").style.display = "none";
    document.getElementById("gsm6").style.display = "none";
    document.getElementById('GSM6').disabled = true;
    document.getElementById('GSM6').style.backgroundColor = "white";
  }
  // console.log(ply);
  Costing();

})

rate.addEventListener("input", function () {
  Rate = parseFloat(document.getElementById('rate').value);
  Rate = parseFloat(Rate);
  // console.log(Rate);
  Costing();
})

price.addEventListener("input", function () {
  Price = parseFloat(document.getElementById('price').value);
  Price = parseFloat(Price);

})

fmail.addEventListener("input", function () {
  if (document.getElementById("mail").value != "") {
    document.getElementById('phno').disabled = true;
    document.getElementById('phno').style.backgroundColor = "#8888886c";
  }
  else {
    document.getElementById('phno').disabled = false;
    document.getElementById('phno').style.backgroundColor = "white";
  }
})
fphno.addEventListener("input", function () {
  if (document.getElementById("phno").value != "") {
    document.getElementById('mail').disabled = true;
    document.getElementById('mail').style.backgroundColor = "#8888886c";
  }
  else {
    document.getElementById('mail').disabled = false;
    document.getElementById('mail').style.backgroundColor = "white";
  }

})

//var Length,Width,Height,gsm,ply,Rate,Price,Printed,Quantity,UGSM,FGSM,LGSM;
function cal_gsm() {
  var Flute_factor = ((FGSM + GSM4 + GSM6 + GSM8) / 1000) * 1.5;
  var Linear_gsm_factor = (UGSM + LGSM + GSM5 + GSM7 + GSM9) / 1000;

  console.log(Flute_factor + Linear_gsm_factor);
  return Flute_factor + Linear_gsm_factor;
}

function cal_print() {
  var fixed = 0;
  if (document.getElementById("fixed_charge").value != "") {
    fixed = parseFloat(document.getElementById("fixed_charge").value);
  }
  var die_cost = 0;
  if (document.getElementById("die_cost").value != "") {
    die_cost = parseFloat(document.getElementById("die_cost").value);
  }

  var color_cost = 0.0;
  if (Quantity != undefined) {
    if (document.getElementById("printed").value == "No") {
      color_cost = 0;
    }
    if (document.getElementById("printed").value == "Multi") {
      color_cost = 0;
    }
    if (document.getElementById("printed").value == "one") {
      color_cost = 0;
    }
    if (document.getElementById("printed").value == "Two") {
      color_cost = 0;
    }
  }

  Printed = (die_cost + fixed + color_cost) / Quantity;
  console.log(color_cost);
  if (poverallcost.value != "") {
    Printed = Printed + (poverallcost.value / Quantity);
  }
  if (pcpb.value != "") {
    console.log(pcpb.value);
    Printed = Printed + parseFloat(pcpb.value);
  }
  console.log("Print Cost: ", Printed);
  return Printed;
}
function check_values() {
  if ((isNaN(Length)) || (isNaN(Width)) || (isNaN(Height)) || isNaN(ply) || isNaN(Rate) || isNaN(Quantity) || isNaN(UGSM) || isNaN(FGSM) || isNaN(LGSM)) {
    return false;
  }
  else {
    return true;
  }
}

function fixed_values() {
  LGSM = parseFloat(document.getElementById('LGSM').value);
  LGSM = parseFloat(LGSM);
  FGSM = parseFloat(document.getElementById('FGSM').value);
  FGSM = parseFloat(FGSM);
  UGSM = parseFloat(document.getElementById('UGSM').value);
  UGSM = parseFloat(UGSM);
  Rate = parseFloat(document.getElementById('rate').value);
  Rate = parseFloat(Rate);
  Price = parseFloat(document.getElementById('price').value);
  Price = parseFloat(Price);
}


function gen_uid() {
  return "ED" + Math.random().toString(36).slice(7);
}
var id = gen_uid();



function Costing() {
  fixed_values();
  if (check_values()) {
    if (document.getElementById("box_type").value == "peti") {
      var Sheet_Len = Width + Length + 2;
      var Sheet_Width = Width;
      var Sheet_Height = (Sheet_Len) * (Sheet_Width + Height) * (2);
      var gsm_fact = cal_gsm();
      var Total_Sheet = (gsm_fact * Sheet_Height) / 1550;
      var Cost_Box = Total_Sheet * Rate;
      if (document.getElementById("printed").value != "No") {
        var Cost_print = cal_print(Cost_Box);
      }
      else {
        var Cost_print = 0;
      }

      console.log("Printed:" + Cost_print);
      Cost_Box = Cost_Box + ((Margin * Cost_Box) / 100.0) + Cost_print;
      console.log(Sheet_Height);
      console.log(gsm_fact);
      console.log(Total_Sheet);

      Total_Sheet = Total_Sheet * 1000;
      Total_Sheet = Total_Sheet.toFixed(2);

      var Order_Cost = (Cost_Box * Quantity);
      Order_Cost = Order_Cost.toFixed(2);
      Cost_Box = Cost_Box.toFixed(2);

      var WPB = String(Total_Sheet) + " " + "g";
      var CPB = String(Cost_Box) + " " + "INR";
      var TV = String(Order_Cost) + " " + "INR";
      document.getElementById('wgh').value = Total_Sheet;
      document.getElementById('box_rater').value = Cost_Box;
      document.getElementById('price').value = Order_Cost;
      document.getElementById('wpb').innerHTML = WPB;
      document.getElementById('cpb').innerHTML = CPB;
      document.getElementById('tv').innerHTML = TV;
    }

    if (document.getElementById("box_type").value == "tuck") {
      var Sheet_Len = (Width * 2) + (Height * 3);
      var Sheet_Width = Length + ((Height * 4) + 1);
      var gsm_fact = cal_gsm();
      console.log(Sheet_Len, Sheet_Width, gsm_fact);
      var Total_Sheet = (gsm_fact * Sheet_Width * Sheet_Len) / 1550;
      console.log(Sheet_Len, Sheet_Width, gsm_fact, Total_Sheet);
      var Cost_Box = Total_Sheet * Rate;
      console.log(Sheet_Len, Sheet_Width, gsm_fact, Total_Sheet, Cost_Box);
      if (document.getElementById("printed").value != "No") {
        var Cost_print = cal_print(Cost_Box);
      }
      else {
        var Cost_print = 0;
      }
      console.log("Printed:" + Cost_print);

      Cost_Box = Cost_Box + ((Margin * Cost_Box) / 100.0) + Cost_print;


      console.log(Sheet_Height);
      console.log(gsm_fact);
      console.log(Total_Sheet);

      Total_Sheet = Total_Sheet * 1000;
      Total_Sheet = Total_Sheet.toFixed(2);

      var Order_Cost = (Cost_Box * Quantity);
      Order_Cost = Order_Cost.toFixed(2);

      var WPB = String(Total_Sheet) + " " + "g";
      var CPB = String(Cost_Box.toFixed(2)) + " " + "INR";
      var TV = String(Order_Cost) + " " + "INR";


      document.getElementById('wgh').value = Total_Sheet;
      document.getElementById('box_rater').value = Cost_Box;
      document.getElementById('price').value = Order_Cost;
      document.getElementById('wpb').innerHTML = WPB;
      document.getElementById('cpb').innerHTML = CPB;
      document.getElementById('tv').innerHTML = TV;


    }

    update_local();
    id = gen_uid();
    handleFormSubmit();

  }
}




function handleFormSubmit() {
  if (document.getElementById('wgh').value == "" || document.getElementById('box_rater').value == "" || document.getElementById('price').value == "") {

    return;
  }
  var forms = document.querySelector('#form');
  var d = new FormData(forms);
  console.log(d);
  try {
    const response = fetch("https://script.google.com/macros/s/AKfycbyTE1AkovuRnWWSMrUq1_qQHbO8JYo3eFkmi3_VkLc3o7swUtVcMd90m11aXj_kMSrXHw/exec", {
      mode: 'no-cors',
      method: "POST",
      body: d,
    });
    console.log(response)
  } catch (e) {
    console.error(e);
  }

}



function validatePhoneNumber() {

  // Regular expression pattern for phone numbers
  var pattern = /^[6-9]\d{9}$/;
  var phone = parseInt(document.getElementById("phno").value);
  // Check if the provided phone number matches the pattern

  return pattern.test(phone);
}


function sendwhatsapp() {

  document.getElementById("ID").value = id;
  var phonenumber = "+91" + document.getElementById("phno").value;
  if (phonenumber == "+91" || validatePhoneNumber() == false) {
    alert("Please provide a valid phone number");
    return;
  }
  if (document.getElementById('wgh').value == "" || document.getElementById('box_rater').value == "" || document.getElementById('price').value == "") {
    alert("No data available to share");
    return;
  }
  var L = length.value;
  var W = width.value;
  var H = height.value;
  var P = printed.value;
  var Q = quantity.value;
  var BoxColor = document.getElementById("bx_color_type").value;
  var PL = PLY.value;
  var Cpb = document.getElementById("box_rater").value;
  var TC = document.getElementById("price").value;
  TC=Math.round(TC);
  Cpb=Math.round(Cpb);
  var VT = document.getElementById("days").value;

  console.log(phonenumber);
  var WhatsappUrl = "https://wa.me/" + phonenumber + "?text=" + "*QUOTATION* *DETAILS* " + "%0a" + "*Quotaion* *ID* *:* " + id + "%0a"
    + "*Length* *:* " + L + " inch" + "%0a"
    + "*Width* *:* " + W + " inch" + "%0a" + "*Height* *:* " + H + " inch" + "%0a" + "*Box* *color* *type* *:* " + BoxColor + "%0a" + "*Quantity* *:* " + Q + "%0a" + "*PLY* *:* " + PL + "%0a" + "*Print* *:* " + P +" Color"+ "%0a" ;
    if (document.getElementById("MGSM").checked){
      WhatsappUrl = WhatsappUrl + "*1st GSM liner* *:* "+document.getElementById("UGSM").value+"%0a"+"*2nd GSM flute* *:* "+document.getElementById("FGSM").value+"%0a"+"*3rd GSM liner* *:* "+document.getElementById("LGSM").value+"%0a"
      +"*4th GSM flute* *:* "+document.getElementById("GSM4").value+"%0a"+"*5th GSM liner* *:* "+document.getElementById("GSM5").value+"%0a"+"*6th GSM flute* *:* "+document.getElementById("GSM6").value+"%0a"
      +"*7th GSM liner* *:* "+document.getElementById("GSM7").value+"%0a"+"*8th GSM flute* *:* "+document.getElementById("GSM8").value+"%0a"+"*9th GSM liner* *:* "+document.getElementById("GSM9").value+"%0a";
    }

    if (document.getElementById("MPSC").checked){
      WhatsappUrl = WhatsappUrl + "*Paper Sheet Cost* *:* "+document.getElementById("rate").value+" INR"+"%0a";
    }
    if (document.getElementById("MSM").checked){
      WhatsappUrl = WhatsappUrl + "*Selling Margin Percentage* *:* "+document.getElementById("margin").value+" %"+"%0a";
    }
    
    WhatsappUrl=  WhatsappUrl+"*Cost* *per* *box* *:* " + Cpb + " INR" + "%0a" + "*Order* *Cost* *:* " + TC + " INR" + "%0a" + "*Quotation* *valid* *till* *:* " + VT + " Days" + "%0a" + "*Time* *Stamp* *:* " + date + "%0a" + "*Note* *:* " + "The rates quoted here do not include applicable taxes.";
  handleFormSubmit();
  window.open(WhatsappUrl, "_blank").focus();
  document.getElementById("ID").value = "";
  var x = document.getElementById("msgconfirm");
  x.style.display="block";

}


function validateEmail() {
  // Regular expression pattern for email validation
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the provided email matches the pattern
  return pattern.test(document.getElementById("mail").value);
}





function sendMail() {
  
  document.getElementById("ID").value = id;
  var mail = document.getElementById("mail").value;
  if (mail == "" || validateEmail() == false) {
    alert("Please enter a valid email");
    return;
  }
  if (document.getElementById('wgh').value == "" || document.getElementById('box_rater').value == "" || document.getElementById('price').value == "") {
    alert("No data available to share");
    return;
  }
  var L = length.value;
  var W = width.value;
  var H = height.value;
  var P = printed.value;
  var Q = quantity.value;
  var PL = PLY.value;
  // var UG = ugsm.value;
  var BoxColor = document.getElementById("bx_color_type").value;
  // var FG = fgsm.value;
  // var LG = lgsm.value;
  var Cpb = document.getElementById("box_rater").value;
  var TC = document.getElementById("price").value;
   TC=Math.round(TC);
  Cpb=Math.round(Cpb);
  var VT = document.getElementById("days").value;
  var formattedBody = "Quotation ID :" + id + "\n" + "Length :" + L + " inch" + "\n"
    + "Width :" + W + " inch" + "\n" + "Height :" + H + " inch" + "\n" + "Box Color Type :" + BoxColor + "\n" + "Quantity :" + Q + "\n" + "PLY :" + PL + "\n" + "Print :" + P + " Color"+"\n" ;
    if (document.getElementById("MGSM").checked){
      formattedBody = formattedBody + "1st GSM liner :"+document.getElementById("UGSM").value+"\n"+"2nd GSM flute :"+document.getElementById("FGSM").value+"\n"+"3rd GSM liner :"+document.getElementById("LGSM").value+"\n"
      +"4th GSM flute :"+document.getElementById("GSM4").value+"\n"+"5th GSM liner :"+document.getElementById("GSM5").value+"\n"+"6th GSM flute :"+document.getElementById("GSM6").value+"\n"
      +"7th GSM liner :"+document.getElementById("GSM7").value+"\n"+"8th GSM flute :"+document.getElementById("GSM8").value+"\n"+"9th GSM liner :"+document.getElementById("GSM9").value+"\n";
    }

    if (document.getElementById("MPSC").checked){
      formattedBody = formattedBody + "Paper Sheet Cost :"+document.getElementById("rate").value+" INR"+"\n";
    }
    if (document.getElementById("MSM").checked){
      formattedBody = formattedBody + "Selling Margin Percentage :"+document.getElementById("margin").value+" %"+"\n";
    }
    formattedBody=formattedBody+"Cost per box :" + Cpb + " INR" + "\n" + "Order Cost :" + TC + " INR" + "\n" + "Quotation valid till :" + VT + " Days" + "\n" + "Time Stamp :" + date + "\n" + "Note: The rates quoted here do not include applicable taxes.";

  var mailurl = "mailto:" + mail + "?subject=Quote Details&body=" + encodeURIComponent(formattedBody);
  // window.location.href = mailurl;
  handleFormSubmit();
  window.open(mailurl, "_blank").focus();
  document.getElementById("ID").value = "";

  var x = document.getElementById("msgconfirm");
  x.style.display="block";

}

function share() {
  console.log(document.getElementById("mail").value);
  if (document.getElementById("mail").value != "") {
    sendMail();
  }
  else if (document.getElementById('phno').value != "") {
    sendwhatsapp();
  }
  else {
    alert("Please enter a customer's email or phone number");
  }
}

function update_local() {

  localStorage.setItem("rate", document.getElementById("rate").value);
  localStorage.setItem("margin", document.getElementById("margin").value);
  localStorage.setItem("fixed_charge", document.getElementById("fixed_charge").value);
  localStorage.setItem("validity", document.getElementById("days").value);
  localStorage.setItem("die_cost", document.getElementById("die_cost").value);
  localStorage.setItem("printpbox", document.getElementById("printpbox").value);
  localStorage.setItem("printoverall", document.getElementById("printoverall").value);
}
function update_Page() {
  if (localStorage.getItem("lgsm") == null && localStorage.getItem("ugsm") == null && localStorage.getItem("fixed_charge") == null &&
    localStorage.getItem("days") == null && localStorage.getItem("rate") == null) {
    return;
  }

  document.getElementById("days").value = localStorage.getItem("validity");
  document.getElementById("rate").value = localStorage.getItem("rate");
  document.getElementById("margin").value = localStorage.getItem("margin");
  document.getElementById("fixed_charge").value = localStorage.getItem("fixed_charge");
  document.getElementById("die_cost").value = localStorage.getItem("die_cost");
  document.getElementById("printpbox").value = localStorage.getItem("printpbox");
  document.getElementById("printoverall").value = localStorage.getItem("printoverall");
}

update_Page();



function toggleTandC() {

  var x = document.getElementById("T&C");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function togglemsg() {
  var x = document.getElementById("msgconfirm");
  x.style.display="none";
}
