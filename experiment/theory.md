# Theory

The first step in the analysis of control system is to derive its mathematical model to understand the working of the complete system.
               			   
<b>The Plant (Coupled-DC Motor-Generator Set)</b><br/>

In a dc motor, an armature rotates inside a magnetic field. The basic working principle of a dc motor is based on the fact that when ever
a current carrying conductor is placed inside a magnetic field, there will be a mechanical force experienced by that conductor.
All kinds of dc motors work under this principle. Hence for constructing a dc motor, it is essential to establish a magnetic field.
The magnetic field is established by using a magnet. Different types of magnets can be used – it may be an electromagnet or 
it can be a permanent magnet.
<br>
A permanent magnet dc motor is a type of dc motor that uses a permanent magnet to create the magnetic field required for
the operation of a dc motor.	
<br>

<div align="center" >				
<img alt="" class="img-fluid" src="./images/pmdc.png" class="img-fluid"><br/>
<b>Fig. 1. Permanent Magnet DC Motor</b>
</div><br>

<br/><b>Mechanical Section</b><br/>
It comprises of the experimental permanent magnet dc motor
(&asymp; 8 W) coupled to a small dc generator (&asymp; 2 W), which serves the twin
purposes of,<br/>

1. Electrical loading of the motor<br/>
2. Transient response signal pick-up.<br/>

Further, a slotted disk mounted on the common shaft produces 6 pulses per revolution
through an opto - interrupter, which is used in a 4-digit speed display in r.p.m.<br/>

The specifications of the main experimental dc motor are:<br/>

• Operating voltage :12 V dc<br/>
• No load current: 0.09 A<br/>
• Full load current: 1.0 A<br/>
• Torque: 30 mN-m / 300 g-cm<br/>

<br/><b>Permanent Magnet DC Motor (PMDC Motor)</b><br/>

The field poles of this motor are essentially made of permanent magnet. This motor mainly consists of two parts.
A stator and an armature. Here the stator is a steel cylinder. The magnets are mounted in the inner periphery of this cylinder.
The permanent magnets are mounted in such a way that the N-pole and S-pole of each magnet are alternatively faced towards the armature
as shown in the Fig. 2.

<div align="center">				
<img alt="" class="img-fluid" src="./images/t1.png" class="img-fluid"><br/>
<b>Fig. 2. Cross section of PMDC Motor</b>
</div><br>				

<br/><b>Working Principle</b><br/>

The working principle of permanent magnet dc motor is just similar to the general working principle of a dc motor.
When a current carrying conductor comes inside a magnetic field, a mechanical force will be experienced by the conductor and
the direction of this force is governed by Fleming’s left hand rule.
As in a permanent magnet dc motor, the armature is placed inside the magnetic field of a permanent magnet,
the armature rotates in the direction of the generated force. Here each conductor of the armature experiences
the mechanical force F = B.I.L Newton where, B is the magnetic field strength in Tesla (weber / m<sup>2</sup>),
I is the current (ampere) flowing through that conductor and L is the length of the conductor (meter) comes under the magnetic field.
Each conductor of the armature experiences a force and the compilation of those forces produces a torque, which tends to rotate the armature.

<div align="center">				
<img alt="" class="img-fluid" src="./images/t2.png" class="img-fluid"><br/>
<b>Fig. 3. Schematic diagram of DC Motor</b>
</div><br>

<b>DC Motor model </b><br>

The schematic diagram of a dc motor is shown in Fig. 3 where the following notations are used<br>
<span class="fontCss">e<sub>a</sub></span> : Armature voltage (volts)<br>
<span class="fontCss">i<sub>a</sub></span> : Armature current (amp.)<br>
<span class="fontCss2">R<sub>a</sub></span> : Armature resistance (ohms)<br>
<span class="fontCss2">L<sub>a</sub></span> : Armature inductance (henrys)<br>
<span class="fontCss">e<sub>b</sub></span> : Back emf (volts)<br>
<span class="fontCss">i<sub>f</sub></span> : Field current (amp.)<br>
<span class="fontCss2">T<sub>M</sub></span> : Motor torque (newton-m)<br>
<span class="fontCss2">T<sub>L</sub></span> : Load torque (newton-m)<br>
<span class="fontCss2">&omega;</span> : Angular velocity (rad/sec)<br>
<span class="fontCss2">J</span> : Moment of inertia of the rotor including external loading if any (newton-m/rad/sec<sup>2</sup>)<br>
<span class="fontCss2">B</span> : Viscous friction coefficient including external loading if any (newton-m/rad/sec)<br>
<span class="fontCss2">K<sub>T</sub></span> : Torque constant<br>
<span class="fontCss2">K<sub>b</sub></span> : Back emf constant<br>


<br/> Upper case notations <span class="fontCss2">E<sub>a</sub></span>, 
<span class="fontCss2">I<sub>a</sub></span>, <span class="fontCss2">E<sub>b</sub></span>, 
<span class="fontCss2">I<sub>f</sub></span> 

are used for steady state values of the respective
variables <span class="fontCss">e<sub>a</sub></span>, <span class="fontCss">i<sub>a</sub></span> ,
<span class="fontCss">e<sub>b</sub></span> and <span class="fontCss">i<sub>f</sub></span> 				
<br/>

In the present setup a permanent magnet dc motor is used, the field winding is thus absent and the air gap flux is constant. 
The input drive may therefore be applied to the armature only, i.e. only armature controlled operation is possible.
The mathematical equations in this operating mode are, 

$$T_M = K_T \ i_a \tag{1}$$

$$e_b = K_b \ \omega \tag{2}$$

Armature circuit model

$$L_a\frac{di_a}{dt} + R_a i_a + e_b = e_a \tag{3}$$

Mechanical model

$$J\frac{d\omega}{dt} + B\omega + T_L = T_M \tag{4}$$

Taking Laplace Transform of (3) and (4),

$$\frac{\omega(s)}{E_a(s)} = \frac{K_T}{(sL_a + R_a)(sJ + B) + K_T K_b} \tag{5}$$

Assuming the inductance of the armature circuit to be very small, the motor transfer function may be written as, 

$$G_M(s) = \frac{\omega(s)}{E_a(s)} = \frac{K_T/R_a}{Js + B + \frac{K_T K_b}{R_a}} = \frac{K_M}{s\tau_m + 1}    \tag{6}$$

Motor Gain Constant (<span class="fontCss2">K<sub>M</sub></span>)

$$K_M = \frac{K_T}{R_a B + K_T K_b} \tag{7}$$

Motor Time Constant (<span class="fontCss">&tau;<sub>m</sub></span>)

$$\tau_m = \frac{R_a J}{R_a B + K_T K_b} \tag{8}$$


The armature controlled motor therefore has a first order type-0 transfer function and the two constant <span class="fontCss2">K<sub>M</sub></span> and 
<span class="fontCss">&tau;<sub>m</sub></span>

depend upon motor parameters.<br/><br/>

<b> Torque – Speed Curves</b><br/>

As a mechanical actuator the magnitude of the steady state torque produced by the motor with a given armature voltage 
needs to be known. With a simple rearrangement of terms, the motor torque may be written as,<br>

steady state armature current,<br>

$$I_a = \frac{E_a-E_b}{R_a} = \frac{E_a}{R_a} - \frac{K_b \omega}{R_a} \tag{9}$$

steady state torque generated,<br>

$$T_M = K_T I_a = \frac{-K_T K_b}{R_a}\omega + \frac{K_T}{R_a}E_a \tag{10}$$

Here <span class="fontCss2">T<sub>M</sub>, E<sub>a</sub>, E<sub>b</sub></span>, <span class="fontCss2">I<sub>a</sub></span> and <span class="fontCss2">&omega;</span> are the steady state values of the motor torque, applied
armature voltage, back emf, armature current and angular velocity of the shaft.<br/>

A typical plot of the equation (10) is shown in Fig. 4. This assumes a linear torque-speed behaviour.<br/><br/>

<div align="center">				
<img alt="" class="img-fluid" src="./images/t3.png" class="img-fluid"><br/>
<b> Fig. 4. Torque - Speed Characteristics</b>
</div><br>

As the motor runs at a constant speed,<br/>
Electrical power input, <span class="fontCss2">P<sub>in</sub> = E<sub>a</sub> &times; I<sub>a</sub></span> Watts <br/>
Power lost in <span class="fontCss2">R<sub>a</sub> = R<sub>a</sub> &times; I<sub>a</sub> &times; I<sub>a</sub></span><br/>
Power available in the armature, <span class="fontCss2">P<sub>arm</sub></span> = (<span class="fontCss2">E<sub>a</sub> – I<sub>a</sub> R<sub>a</sub></span>)
<span class="fontCss2">I<sub>a</sub> = E<sub>b</sub> &times; I<sub>a</sub>
= K<sub>b</sub> &times; &omega; &times; I<sub>a</sub></span><br/>

Mechanical power developed,

$$P_{mech} = T_M \times \omega \ \ newton-m \ rad/sec \ = K_T \times I_a \times \omega \tag{11}$$

Assuming 100% conversion of power from electrical input to mechanical output, the above two expressions of <i style="font-family:'Sitka Text'">P<sub>mech</sub></i> and <i style="font-family:'Sitka Text'">P<sub>arm</sub></i>
can be equated to get

$$K_b \ ( \frac{volts}{rad/s} ) = K_T \ ( \frac{newton-m}{amp.} ) \tag{12}$$

Thus, the numerical values of <span class="fontCss2">K<sub>T</sub></span> and <span class="fontCss2">K<sub>b</sub></span> may be assumed to be identical. The torque may then be expressed as,

$$T_M = \frac{-K_b^2}{R_a}\omega + \frac{K_b}{R_a}E_a \tag{13}$$

When the motor is loaded, the speed decreases which reduces the back emf. This
increases armature current <span class="fontCss">i<sub>a</sub></span> so that the motor develops more torque in order to supply the load.

At steady state (<span class="fontCss2">&omega;</span> = constant) the load torque equation can be written as, 

$$T_M = B \omega + T_L \tag{14}$$ 

where, <span class="fontCss2">T<sub>L</sub></span>  = Load Torque<br/><br/>



In the experimental work <span class="fontCss2">T<sub>L</sub></span> is increased in steps by loading the motor with the help of the coupled generator and the values
of <span class="fontCss2">T<sub>M</sub></span> and <span class="fontCss2">&omega;</span> are recorded. While <span class="fontCss2">&omega;</span> is computed from the speed <span class="fontCss2">N </span>
in rpm, as displayed on the motor unit,

the following expression is used to compute	the motor torque <span class="fontCss2">T<sub>M</sub></span> at a constant value of <span class="fontCss2">E<sub>a</sub></span>.

$$T_M = K_T I_a = K_b I_a = \frac{E_b}{\omega} I_a = \frac{E_a - I_a R_a}{\omega} I_a \tag{15}$$



Two motor parameters, <span class="fontCss2">B</span> and <span class="fontCss2">K<sub>b</sub></span>, may therefore be determined from the torque-speed
characteristics obtained under steady state conditions or constant speed operation of the motor. <br><br>

<b>Transient Response </b><br>

In response to a step input,

$$e_a(t) = E \ U(t), \ i.e. \ E_a(s) = \frac{1}{s} \tag{16}E$$

The motor speed will follow the expression,

$$\omega(t)= E \ K_M (1- e^\frac{-t}{\tau_m}) \tag{17}$$

as shown in Fig. 5<br/><br/>

The step response is very similar to that of an RC circuit charging from a step voltage input.
The parameters of interest <span class="fontCss2">E K<sub>M</sub></span> and <span class="fontCss">&tau;<sub>m</sub></span> are indicated in Fig. 5. 

The steady state speed <span class="fontCss2">N</span>, and hence the value of <span class="fontCss2">K<sub>M</sub></span> can easily be computed or measured.

$$\omega(t)\vert_{t\rightarrow\infty} = \omega_{ss} = E \ K_M \tag{18}$$

$$or, \ K_M = \frac{N}{E} \frac{rpm}{volt} = \frac{\pi N}{30 E} \ \frac{rad/s}{volt} \tag{19}$$

<span class="fontCss">&tau;<sub>m</sub></span> is the time taken by the motor speed to rise from zero and attain 63.2% of 
<i style="font-family:'Sitka Text'">&omega;<sub>ss</suab></i>, where <i style="font-family:'Sitka Text'">&omega;<sub>ss</suab></i> is the steady state speed (rad/s) of the motor.

<div align="center">				
<img alt="" class="img-fluid" src="./images/t4.png" class="img-fluid"><br/>
<b>Fig. 5. Step response of the motor</b>
</div><br><br/>

<b>Calculations from plots</b><br/>

<b>Calculation of the motor constant <span class="fontCss2">K<sub>M</sub></span> (rpm/volts), generator constant <span class="fontCss2">K<sub>G</sub></span> (volts/rpm) and viscous friction coefficient of motor (<span class="fontCss2">B</span>)</b><br/>

The motor constant <span class="fontCss2">K<sub>M</sub></span> is calculated from the plot 'Speed (<span class="fontCss2">N</span>) Vs. Motor armature voltage (<span class="fontCss2">E<sub>a</sub></span>)' as
shown in Fig. 6. Consider a slope is taken between points (<span class="fontCss3">c<sub>2</sub>, d<sub>2</sub></span>) and (<span class="fontCss3">c<sub>1</sub>, d<sub>1</sub></span>) first. then the <span class="fontCss2">K<sub>M</sub></span> will be

$$K_M = \frac{d_{2} - d_{1}}{c_{2} - c_{1}} \ rpm/volts \tag{20}$$

Where, <span class="fontCss3">d<sub>2</sub></span> is speed (rpm) of the motor at armature voltage of <span class="fontCss3">c<sub>2</sub></span> volts and 
<span class="fontCss3">d<sub>1</sub></span> is speed (rpm) of the motor at armature voltage of <span class="fontCss3">c<sub>1</sub></span> volts.
<br/>
<div align="center">				
<img alt="" class="img-fluid" src="./images/Chart1.jpg" class="img-fluid"><br/>
<b>Fig. 6. Motor constant <span class="fontCss2">K<sub>M</sub></span> calculation</b>
</div><br><br/>

The generator constant <span class="fontCss2">K<sub>G</sub></span> is calculated from the plot 
'Generator voltage (<span class="fontCss2">E<sub>g</sub></span>) Vs. Speed (<span class="fontCss2">N</span>)' as
shown in Fig. 7. Consider a slope is taken between points (<span class="fontCss3">c<sub>2</sub>, d<sub>2</sub></span>) and (<span class="fontCss3">c<sub>1</sub>, d<sub>1</sub></span>) first. Then the <span class="fontCss2">K<sub>G</sub></span> will be

$$K_G = \frac{d_{2} - d_{1}}{c_{2} - c_{1}} \ volts/rpm \tag{21}$$

Where, <span class="fontCss3">d<sub>2</sub></span> is generator voltage (volts) at speed of <span class="fontCss3">c<sub>2</sub></span> rpm and 
<span class="fontCss3">d<sub>1</sub></span> is generator voltage (volts) at speed of <span class="fontCss3">c<sub>1</sub></span> rpm.
<br/>
<div align="center">				
<img alt="" class="img-fluid" src="./images/Chart2.jpg" class="img-fluid"><br/>
<b>Fig. 7. Generator constant <span class="fontCss2">K<sub>G</sub></span> calculation</b>
</div><br><br/>

The viscous friction coefficient of motor (<span class="fontCss2">B</span>) is calculated from the plot 
'Torque (<span class="fontCss2">T<sub>M</sub></span>) Vs. Speed (<span class="fontCss2">N</span>)' as
shown in Fig. 8. Consider a slope is taken between points (<span class="fontCss3">c<sub>2</sub>, d<sub>2</sub></span>) and (<span class="fontCss3">c<sub>1</sub>, d<sub>1</sub></span>) first. Then the <span class="fontCss2">B</span> will be

$$B = \frac{d_{2} - d_{1}}{c_{2} - c_{1}} \ newton-meter/rpm \tag{22}$$

Where, <span class="fontCss3">d<sub>2</sub></span> is torque (newton-meter) at speed of <span class="fontCss3">c<sub>2</sub></span> rpm and 
<span class="fontCss3">d<sub>1</sub></span> is torque (newton-meter) at speed of <span class="fontCss3">c<sub>1</sub></span> rpm.
Calculate <span class="fontCss2">B</span> in newton-meter/rad/sec. The negative sign in calculation will depict negative slope (ignore it for calculating the motor inertia <span class="fontCss2">J</span>).
<br/>
<div align="center">				
<img alt="" class="img-fluid" src="./images/Chart3.png" class="img-fluid"><br/>
<b>Fig. 8. Viscous friction coefficient of motor (<span class="fontCss2">B</span>) calculation</b>
</div><br><br/>

The motor inertia <span class="fontCss2">J</span> (newton-meter/rad/sec<sup>2</sup>) is calculated using the formula below (<span class="fontCss">&tau;<sub>m</sub></span> is taken in sec)

$$J = \tau_m (B + \frac{K_b^2}{R_a}) \tag{23}$$

where, <span class="fontCss">&tau;<sub>m</sub></span> is the motor time constant and <span class="fontCss2">R<sub>a</sub></span> = 4 &ohm;
				

				
<link href="./simulation/css/DC.css" rel="stylesheet">			    
						
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>								
