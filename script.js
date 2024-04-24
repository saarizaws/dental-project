function addAttachment(){
    var icon1 = document.getElementById("icon1");
    // var icon2 = document.getElementById("icon2");
    // var icon3 = document.getElementById("icon3");
    // var icon4 = document.getElementById("icon4");
    var checkBox = document.getElementById("checkBox");
    if (checkBox.checked == true){
        icon1.style.display = "block";
        // icon2.style.display = "block";
        // icon3.style.display = "block";
        // icon4.style.display = "block";
    }
    else{
        icon1.style.display = "none";
        // icon2.style.display = "none";
        // icon3.style.display = "none";
        // icon4.style.display = "none";
    }
}

window.onload = function(){
    document.getElementById("download").addEventListener("click",()=>{
        const main = document.getElementById("main");
        var opt = {
            margin: [15, 0, 15, 0],
            filename: `CV-${name}.pdf`,
            image: { type: 'jpeg', quality: 1 },
            html2canvas: {
              dpi: 192,
              scale:4,
              letterRendering: true,
              useCORS: true
            },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
          };
        html2pdf(main,opt);
    })
}