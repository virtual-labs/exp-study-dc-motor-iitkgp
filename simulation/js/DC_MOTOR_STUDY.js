 
   /* This HTML page and script files are developed by
    Piyali Chattopadhyay
    Project Scientist-Technical,
    Virtual Labs IIT Kharagpur.*/      

/////////////////////////////////////////////ALL FUNCTIONS FOR ROTATING KNOBS///////////////////////////////////
var angle1= 0,angle2= 0,angle3= 0;
function rotate1(){
	
	angle1++;
	var deg = angle1*10;
	//alert(deg);
	var knob1= document.getElementById('knob1');	
	knob1.style.transform="rotate("+deg+"deg)";
	
   document.getElementById('Ea').stepUp(1);
   document.getElementById('motor_arm_voltage').stepUp(1);
   
   if( deg>120){
	alert('This is the highest value, can not rotate knob') ;  
	knob1.style.transform=null; 
	document.getElementById('Ea').value ="0";
	angle=0;
	return;
   }
    
 }
 function rotate2(){
	
	angle1--;
	var deg = angle1*10;
	//alert(deg);
	var knob1= document.getElementById('knob1');	
	knob1.style.transform="rotate("+deg+"deg)";
	 /*str1 = document.getElementById('span1').innerHTML;
	 sp = parseInt(str1 ,10)+n;
	 n++;
	 alert(sp);*/
	document.getElementById('Ea').stepDown(1);
   document.getElementById('motor_arm_voltage').stepDown(1);
   
   if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob1.style.transform=null; 
	document.getElementById('Ea').value ="0";
	angle=0;
	return;
   }
    
 }
 function rotate3(){
	
	angle2++;
	var deg = angle2*2;
	//alert(deg);
	var knob2= document.getElementById('knob2');	
	knob2.style.transform="rotate("+deg+"deg)";
	
   document.getElementById('Es').stepUp(1);
   
   if( deg>200){
	alert('This is the highest value, can not rotate knob') ;  
	knob2.style.transform=null; 
	document.getElementById('Es').value ="0";
	angle2=0;
	return;
   }
    
 }
 function rotate4(){
	
	angle2--;
	var deg = angle2*2;
	//alert(deg);
	var knob2= document.getElementById('knob2');	
	knob2.style.transform="rotate("+deg+"deg)";
	
   document.getElementById('Es').stepDown(1);
   
   if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob2.style.transform=null; 
	document.getElementById('Es').value ="0";
	angle2=0;
	return;
   }
    
 }
 function rotate5(){
	
	angle3++;
	
	var deg = angle3*40;
	//alert(deg);
	var knob3= document.getElementById('knob3');	
	knob3.style.transform="rotate("+deg+"deg)";
	
   document.getElementById('RL').stepUp(1);
   document.getElementById('counterchk').value = "1";
  
   
   if( deg>200){
	alert('This is the highest value, can not rotate knob') ;  
	knob3.style.transform=null; 
	document.getElementById('RL').value ="0";
	angle3=0;
	return;
   }
    
 }
 function rotate6(){
	
	angle3--;
	
	var deg = angle3*40;
	//alert(deg);
	var knob3= document.getElementById('knob3');	
	knob3.style.transform="rotate("+deg+"deg)";
	
   document.getElementById('RL').stepDown(1);
   document.getElementById('counterchk').value = "2";
   
   if(deg<0 ){
	alert('This is the lowest value, can not rotate knob') ;  
	knob3.style.transform=null; 
	document.getElementById('RL').value ="0";
	angle3=0;
	return;
   }
    
 }

 function planton(){
	 
	 if(document.getElementById('pon').src.match("./images/off.png")){
	
	document.getElementById('pon').src = "./images/on.png"; 
	
	document.getElementById('motor_arm_current').style.color="red"; 
	document.getElementById('motor_arm_voltage').style.color="red"; 
	document.getElementById('motor_tau').style.color="red"; 
	document.getElementById('motor_speed').style.color="red";
 }

else if(document.getElementById('pon').src.match("./images/on.png")){
	
	document.getElementById('pon').src = "./images/off.png"; 
	
	document.getElementById('motor_arm_current').style.color="#A6A6A7"; 
	document.getElementById('motor_arm_voltage').style.color="#A6A6A7"; 
	document.getElementById('motor_tau').style.color="#A6A6A7";
	document.getElementById('motor_speed').style.color="#A6A6A7";
	
	document.getElementById('motor_arm_current').value = "0";
	document.getElementById('motor_arm_voltage').value = "0";
	document.getElementById('motor_tau').value = "0";
	document.getElementById('motor_speed').value = "0"
	 
 }

 }

function motoron(){
	 
	 if((document.getElementById('mon').src.match("./images/off.png")) && (document.getElementById('pon').src.match("./images/on.png")) ){
	
	document.getElementById('mon').src = "./images/on.png"; 
	 
	document.getElementById('knob1').style['pointer-events'] = "auto";
	document.getElementById('knob2').style['pointer-events'] = "auto";
	document.getElementById('knob3').style['pointer-events'] = "auto";
	 
 }
 
 else if((document.getElementById('mon').src.match("./images/on.png")) && (document.getElementById('pon').src.match("./images/on.png")) ){
	
	document.getElementById('mon').src = "./images/off.png"; 
	 
	document.getElementById('knob1').style['pointer-events'] = "none";
	document.getElementById('knob2').style['pointer-events'] = "none";
	document.getElementById('knob3').style['pointer-events'] = "none";
	 
 }

else if((document.getElementById('pon').src.match("./images/off.png"))&&(document.getElementById('pon').src.match("./images/off.png"))){
	
	alert('Switch on the Circuit first');
 }

 }

function rron(){
	 
	 if(document.getElementById('rr').src.match("./images/off.png")){
	
	document.getElementById('rr').src = "./images/on.png"; 
	 
	
 }

else if(document.getElementById('rr').src.match("./images/on.png")){
	
	document.getElementById('rr').src = "./images/off.png"; 
	 
	 
 }

 }
/////////////////////////////Math model of No-Load///////////////////////////////////////////



var Ra = parseFloat(4.42);///motor internal resistance;there will be motor internal small inductance df 2.21mH approx. due to which total resistance will be approx 0.66ohm
var Kb = parseFloat(0.0218881667);///back emf constant from observation table avg value in volt/rad/sec;
var KT = Kb;
//var KM = parseFloat(417.6079734219);///Motor constant from observation plot of real time data in rpm/volt;
var KG = parseFloat(0.0021457166);///Generator constant from observation plot of real time data;
var B = parseFloat(94.83 * Math.pow(10,-6));///viscous friction coefficient of motor from observation plot of real time data;
var J = parseFloat(4.47087522 * Math.pow(10,-5));///Motor inertia from observation of real time data;

var Eg;
function No_Load(){
	
var Ea = document.getElementById('Ea').value;

var KM = math.divide(KT,math.add(math.multiply(Ra,B),math.multiply(KT,Kb))); ///motor gain constant	
var Taum = math.divide(math.multiply(Ra,J),math.add(math.multiply(Ra,B),math.multiply(KT,Kb))); ///motor time constant

for (var t=0; t<=10; t+=0.1){
	
var w = math.multiply(Ea,KM,math.subtract(1,math.pow(math.e,-math.divide(t,Taum))));///speed in rad/sec
	
	
}
console.log(w);
var speed = math.divide(math.multiply(w,60),math.multiply(2,math.pi));

var kg2= parseFloat(math.multiply(KG,60),math.multiply(2,math.PI));
	
 Eg = parseFloat(KG * w);
 console.log("Eg ="+Eg);

var Eb = parseFloat(Kb * w);
console.log("Eb ="+Eb);
	
var Ia = math.multiply(math.divide(math.subtract(Ea,Eb),Ra),1000);
	
document.getElementById('Eg').value = Eg;
document.getElementById('motor_arm_current').value = Ia;
document.getElementById('motor_speed').value = speed ;	
	
}
///////////////Math model with loading gnerator////////////////////////////////////////////////////
var n,c;
var nl1=parseFloat(417.60),
nl2=parseFloat(726),
nl3=parseFloat(1140),
nl4=parseFloat(1550),
nl5=parseFloat(1960),
nl6=parseFloat(2349),
nl7=parseFloat(2762),
nl8=parseFloat(3175),
nl9=parseFloat(3611),
nl10=parseFloat(3993),
nl11=parseFloat(4379),
nl12=parseFloat(4740);

function loadtest(){
	
var Ea = document.getElementById('Ea').value;
var RL = document.getElementById('RL').value;
document.getElementById('vchk').value = document.getElementById('Ea').value;
n = document.getElementById('motor_speed').value;
	
if(document.getElementById('vchk').value==1 && document.getElementById('RL').value == 0){
	
 n = nl1;	
c = parseFloat(15.00);	
}	
else if(document.getElementById('vchk').value==2 && document.getElementById('RL').value == 0){
	
 n = nl2;	
c = parseFloat(26.6);	
}	
else if(document.getElementById('vchk').value==3 && document.getElementById('RL').value == 0){
	
 n = nl3;	
c = parseFloat(37.5);	
}	
else if(document.getElementById('vchk').value==4 && document.getElementById('RL').value == 0){
	
 n = nl4;	
c = parseFloat(53.00);
}	
else if(document.getElementById('vchk').value==5 && document.getElementById('RL').value == 0){
	
 n = nl5;	
c = parseFloat(71.5);	
}	
else if(document.getElementById('vchk').value==6 && document.getElementById('RL').value == 0){
	
 n = nl6;	
c = parseFloat(85.67);	
}
else if(document.getElementById('vchk').value==7 && document.getElementById('RL').value == 0){
	
 n = nl7;	
c = parseFloat(102.33);	
}
else if(document.getElementById('vchk').value==8 && document.getElementById('RL').value == 0){
	
 n = nl8;	
c = parseFloat(122.00);	
}
else if(document.getElementById('vchk').value==9 && document.getElementById('RL').value == 0){
	
 n = nl9;	
c = parseFloat(139.00);	
}
else if(document.getElementById('vchk').value==10 && document.getElementById('RL').value == 0){
	
 n = nl10;	
c = parseFloat(144.00);	
}
else if(document.getElementById('vchk').value==11 && document.getElementById('RL').value == 0){
	
 n = nl11;	
c = parseFloat(164.00);	
}
else if(document.getElementById('vchk').value==12 && document.getElementById('RL').value == 0){
	
 n = nl12;	
c = parseFloat(189.50);	
}


else if(document.getElementById('RL').value != 0 && document.getElementById('counterchk').value == 1){
	
	n =parseFloat(n-c);
	}
	
	else if(document.getElementById('RL').value != 0 && document.getElementById('counterchk').value == 2){
	
	n =math.add(n,c);
	}
	
	
var w = Math.round(parseFloat(parseFloat(2*Math.PI*n)/60));

var Eb = parseFloat(Kb * w);
var Ia = parseFloat((parseFloat(Ea-Eb)/Ra)*1000);
var kg2= parseFloat((KG*60)/parseFloat(2*Math.PI));
 Eg = parseFloat(kg2 * w);

document.getElementById('motor_speed').value = n;
document.getElementById('Eg').value = Eg;
document.getElementById('motor_arm_current').value = Ia;


}

var Timeconst,inertia;
function step_response(){
	
No_Load();

document.getElementById('vchk').value = document.getElementById('Ea').value;
document.getElementById('Eschk').value = parseFloat(0.632*Eg);

var mul = parseFloat(B + (Math.pow(Kb,2)/Ra));	
	
Timeconst = parseFloat((J/mul)*1000);

inertia = parseFloat((Timeconst/1000)* mul);	
	
if(document.getElementById('RL').value==0 && document.getElementById('mon').src.match('./images/on.png') && document.getElementById('rr').src.match('./images/on.png') ){
	
document.getElementById('motor_tau').value = Timeconst;	
	
}
else if(document.getElementById('RL').value!=0){
	
	alert('Go through the instructions properly\n Load should be zero or knob3 should be at zero value');///\n Set ‘RESET’ switch to ‘READY’\nSwitch on the motor');
	
}


}


function simulate(){
	
if( document.getElementById('testchk').value == 1){
	
No_Load();
	
}	
else if( document.getElementById('testchk').value == 2){
	
loadtest();
	
}	
	
else if( document.getElementById('testchk').value == 3){
	
step_response();
	
}	
	
}

///////////////////////////////////////////////////////////////////////////////Table Creation//////////////////////////////////////////////////////////////////////////////////////
 
 var tabrowindex = 0;
 var tabrowindex2 = 0;
 var tabrowindex3 = 0;
 
var arr = [];
var arr2=[];
var arr3=[];

var table;
var table2;
var table3;

var chart;

// var showAlert;
//------------------------------------------------- Table Creation1 -----------------------------------------------//
function createTable1() {


    arr[0] = tabrowindex+1 ;
    arr[1] = document.getElementById("Ea").value;
    arr[2] = document.getElementById("motor_arm_current").value;
    arr[3] = document.getElementById("motor_speed").value;
	arr[4] = document.getElementById("Eg").value;
	
	table = document.getElementById("myTable");
        
    var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 50) {
        
         // Row increment
        for (var q = 0; q < 5; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }
	
}    
 
 
//------------------------------------------------- Table Creation2 -----------------------------------------------//
function createTable2() {


    arr2[0] = tabrowindex2+1 ;
    arr2[1] = document.getElementById("RL").value;
    arr2[2] = document.getElementById("motor_arm_current").value;
	arr2[3] = parseFloat(document.getElementById("motor_speed").value);
    arr2[4] = parseFloat(parseFloat(document.getElementById("motor_speed").value*2*Math.PI)/60);
	arr2[5] = parseFloat(arr2[4]*Kb);
	arr2[6] = parseFloat(arr2[5]/arr2[4]);
	arr2[7] = parseFloat(Kb*arr2[2]*Math.pow(10,-3));
	
	table2 = document.getElementById("myTableload");
        
    var row = table2.insertRow(++tabrowindex2);
   
    if (table2.rows.length <= 50) {
        
         // Row increment
        for (var q = 0; q < 8; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr2[q];

    }

    }

}     

//------------------------------------------------- Table Creation3 -----------------------------------------------//
function createTable3() {
	
	var yop = new Array();	
	
	var dataOPPoints=[];


    arr3[0] = tabrowindex3+1 ;
    arr3[1] = document.getElementById("Ea").value;
    arr3[2] = document.getElementById("Eg").value;
	arr3[3] = parseFloat(document.getElementById("motor_speed").value);
    arr3[4] = document.getElementById("Eschk").value;
	arr3[5] = document.getElementById("motor_tau").value;
	arr3[6] = parseFloat((arr3[3]*Math.PI)/(arr3[1]*30));
	
	document.getElementById('tfn').value = arr3[6];
	document.getElementById('tfd').value = parseFloat(arr3[5]/1000);
	document.getElementById('motor_inertia').value = inertia;
	
	
	table3 = document.getElementById("myTablestep");
        
    var row = table3.insertRow(++tabrowindex3);
   
    if (table3.rows.length <= 50) {
        
         // Row increment
        for (var q = 0; q < 7; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr3[q];

    }

    }
	var stdstv = parseFloat(arr3[1]*arr3[6]);
	
	for(var t=0;t<=(2*stdstv);t++){
	
	yop[t] = parseFloat(parseFloat(arr3[1]*arr3[6])*parseFloat(1-Math.exp(-(parseFloat(t/arr3[5])))));
	
	dataOPPoints.push({x:(t), y:(yop[t])});
	
	
	}
document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer4').style.display  = "block";
document.getElementById('chartContainer3').style.display  = "none";
document.getElementById('chartContainer2').style.display  = "none";
document.getElementById('chartContainer').style.display  = "none";
 	
	var chart = new CanvasJS.Chart("chartContainer4",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "DC motor Step Response "
	  
      },
	  
	  axisX:{
        interlacedColor: "#B2F9FA",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "motor Speed(&omega;(t))",
			
			//maximum:0.03,
        }		
		],
	data: [
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints
	
       }
       
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});


}   
  
/////////////////////////////////////////////////////////////////////Plot creation Torque vs. Speed////////////////////////////////////////////////////////////////////////// 



	var y = new Array();
    var dataPoints1=[];
	var dataPoints2=[];
	var dataPoints3=[];
	
	function plot1(){
	 document.getElementById('plotbucket').style.display  = "block";
	 
	 document.getElementById('chartContainer').style.display  = "block";
	 document.getElementById('chartContainer2').style.display  = "none";
	 document.getElementById('chartContainer3').style.display  = "none";
	 document.getElementById('chartContainer4').style.display  = "none";
	 
	 document.getElementById('result').style.display  = "block";
 
    var table1 = document.getElementById('myTable');
    for (var tabrowindex1 = 1; tabrowindex1 < table1.rows.length; tabrowindex1++) {
        var rwe1 = table1.rows[tabrowindex1].cells;

        dataPoints1.push({x: parseFloat((rwe1[1].innerHTML)), y: parseFloat(rwe1[3].innerHTML)});
    }
 
	
 
	var chart = new CanvasJS.Chart("chartContainer",
    {
      //animationEnabled: true,
		  //animationDuration: 10000, 
	  title:{
      text: "Speed Vs. Ea Plot(Motor Characteristics) "
	  
      },
	  
	  axisX:
	  
	  {
        interlacedColor: "#B2F9FA",
        title: "Ea(Volts)"
      },
	  
	  
	  
	  
	  
    axisY: 
	      {// Y axis
            title: "Speed(rpm)",
			
			//maximum:28,
        },
		
		
	data: [
      {        
        type: "line",
		color:"109DB6",
        dataPoints:dataPoints1
	
       },
       
      ]	
	});

	chart.render();
	
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	}
	
	
	function plot2(){
	 document.getElementById('plotbucket').style.display  = "block";
	 
	 document.getElementById('chartContainer2').style.display  = "block";
	 document.getElementById('chartContainer').style.display  = "none";
	 document.getElementById('chartContainer3').style.display  = "none";
	 document.getElementById('chartContainer4').style.display  = "none";
	 
	 document.getElementById('result').style.display  = "block";
 
    var table1 = document.getElementById('myTable');
    for (var tabrowindex1 = 1; tabrowindex1 < table1.rows.length; tabrowindex1++) {
        var rwe1 = table1.rows[tabrowindex1].cells;

        dataPoints2.push({x: parseFloat((rwe1[3].innerHTML)), y: parseFloat(rwe1[4].innerHTML)});
    }
 
	
 
	var chart = new CanvasJS.Chart("chartContainer2",
    {
      //animationEnabled: true,
		  //animationDuration: 10000, 
	  title:{
      text: "Eg Vs. Speed Plot(Generator Characteristics) "
	  
      },
	  
	  axisX:
	  
	  {
        interlacedColor: "#B2F9FA",
        title: "Speed(rpm)"
      },
	  
	  
	  
	  
	  
    axisY: 
	      {// Y axis
            title: "Eg(Volts)",
			
			//maximum:28,
        },
		
		
	data: [
      {        
        type: "line",
		color:"109DB6",
        dataPoints:dataPoints2
	
       },
       
      ]	
	});

	chart.render();
	
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	}
	
	
	
 
 function plot3(){
	 document.getElementById('plotbucket').style.display  = "block"; 
	 
	 document.getElementById('chartContainer3').style.display  = "block";
	 document.getElementById('chartContainer').style.display  = "none";
	 document.getElementById('chartContainer2').style.display  = "none";
	 document.getElementById('chartContainer4').style.display  = "none";
	 
	 document.getElementById('result').style.display  = "block";
 
    var table1 = document.getElementById('myTableload');
    for (var tabrowindex1 = 1; tabrowindex1 < table1.rows.length; tabrowindex1++) {
        var rwe1 = table1.rows[tabrowindex1].cells;

        dataPoints3.push({x: parseFloat((rwe1[3].innerHTML)), y: parseFloat(rwe1[7].innerHTML)});
    }
 
	
 
	var chart = new CanvasJS.Chart("chartContainer3",
    {
      //animationEnabled: true,
		  //animationDuration: 10000, 
	  title:{
      text: "Torque Vs. Speed "
	  
      },
	  
	  axisX:
	  
	  {
        interlacedColor: "#B2F9FA",
        title: "Speed(rpm)"
      },
	  
	  
	  
	  
	  
    axisY: 
	      {// Y axis
            title: "TM(N-m)",
			
			//maximum:28,
        },
		
		
	data: [
      {        
        type: "line",
		color:"109DB6",
        dataPoints:dataPoints3
	
       },
       
      ]	
	});

	chart.render();
	
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	}
 
 
 function Tableshow1(){
	 
	//document.getElementById('myTable').style.display = "block";
	//document.getElementById('myTableload').style.display = "none";
	//document.getElementById('myTablestep').style.display = "none";
	document.getElementById('vchkspan').style.display = "none";
	 document.getElementById('testchk').value = "1";
	 
 }
 
 function Tableshow2(){
	 
	//document.getElementById('myTableload').style.display = "block";
	document.getElementById('vchkspan').style.display = "block";
	//document.getElementById('myTable').style.display = "none";
	//document.getElementById('myTablestep').style.display = "none";
	 document.getElementById('testchk').value = "2";
	 
 }
 
 function Tableshow3(){
	 
	//document.getElementById('myTablestep').style.display = "block";
	document.getElementById('vchkspan').style.display = "block";
	//document.getElementById('myTable').style.display = "none";
	//document.getElementById('myTableload').style.display = "none";
	 document.getElementById('testchk').value = "3";
	 
 }
 
 function Tabled(){
	 
	if( document.getElementById('testchk').value == 1){
		
	createTable1();	
		
	}
	 
	else if( document.getElementById('testchk').value == 2){
		
	createTable2();	
		
	} 
	 
	 else if( document.getElementById('testchk').value == 3){
		
	createTable3();	
		
	} 	 
 }
 
 
 function Result(){
	if( document.getElementById('testchk').value == 1 && (document.getElementById('chartContainer').style.display == "block" || document.getElementById('chartContainer2').style.display == "block")){ 
	 
	 document.getElementById('result_noload').style.display = "block";
	 
	}
	
else if( document.getElementById('testchk').value == 2 && document.getElementById('chartContainer3').style.display == "block"){ 
	 
	 document.getElementById('result_load').style.display = "block";
	 
	}
	
else if( document.getElementById('testchk').value == 3 && document.getElementById('chartContainer4').style.display == "block"){ 
	 
	 document.getElementById('result_step').style.display = "block";
	 	 
	}	
	
 }
 
 
 function Refresh(){
	 if(document.getElementById('testchk').value == 1){
	var Dtable= document.getElementById('myTable');
	 }
	 else if(document.getElementById('testchk').value == 2){
	var Dtable= document.getElementById('myTableload');
	 }
	 else if(document.getElementById('testchk').value == 3){
	var Dtable= document.getElementById('myTablestep');
	 }
	var Trow = Dtable.rows.length;
	for (var i= Trow-1;i>0;i--){

	Dtable.deleteRow(i);
	}
	//Dtable.style.display="none";
	tabrowindex=0;
	tabrowindex2=0;
	tabrowindex3=0;
	
	dataPoints1 = [];
	dataPoints2 = [];
	dataPoints3 = [];
	dataOPPoints = [];
	
	document.getElementById('plotbucket').style.display="none";
	document.getElementById('result_noload').style.display="none";
	document.getElementById('result_load').style.display="none";
	document.getElementById('result_step').style.display="none";
	
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 