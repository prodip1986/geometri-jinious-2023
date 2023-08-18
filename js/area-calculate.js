function calculaterTriangeArea(){
    const baseField = document.getElementById('triangele-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    const hieghtField =document.getElementById('triangle-height');
    const heightValueText = hieghtField.value;
    const height = parseFloat(heightValueText);
    
   const area = 0.5* base*height
    
   const areaSpan = document.getElementById('triangle-area');
   areaSpan.innerText =area ;
   
}
function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat (widthValueText); 
    
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueTest = lengthField.value;
    const length = parseFloat(lengthValueTest);
    
    const area = width * length 
    // show the area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText =area ;
}