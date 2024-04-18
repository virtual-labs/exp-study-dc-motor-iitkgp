### Procedure


<div align="center">
<img class="img-fluid"  src="./images/dcpanel.png" alt="">

<b>Fig. 1. Panel drawing of the DC Motor plant</b>
</div>


<b>Steps to perform the simulation</b>

<b style="color:blue;text-align:center">Motor and Generator Characteristics</b>

1. First click on "Tests" button and click on 'No Load' to perform the experiment for finding the dc motor and generator characteristics.

2. Click on 'ON' button to switch on the motor unit. Connect (blue dots for wire connection) 1-3, 
set 'MOTOR' switch to 'ON' by clicking on it. Set the 'RESET' switch to 'RESET'. Set load to 0 value. 

3. Apply armature voltage E<sub>a</sub> through knob1 (start with 3 volts). Click on 'Simulate' button. Observe motor armature current (mA), speed (rpm). Now click on the connected wire (1-3) to delete that and connect 2-3 , click on 'Simulate' button. Observe generator voltage E<sub>g</sub>.
Click on 'Table' button to get the observation table.

<div align="center">
<img class="img-fluid"  src="./images/ps1.png" alt="">

<b>Fig. 2. DC Motor plant simulation model</b>
</div>				


4. Delete connection 2-3 and again connect 1-3, click on 'Simulate' button. Increase the armature voltage to 4 volts and follow
step 3.

5. Vary E<sub>a</sub> from 5 - 12 volts and follow step 3.
Now Click on 'Plot' button, then on 'Speed (N) Vs. Motor armature voltage (E<sub>a</sub>)'. From a slope of the plot calculate motor constant <span class="fontCss2">K<sub>M</sub></span> (rpm/volts) (calculation explained in theory). 

Again click on 'Generator voltage (E<sub>g</sub>) Vs. Speed (N)' under plot button. From a slope of this plot
calculate generator constant <span class="fontCss2">K<sub>G</sub></span> (volts/rpm) (calculation explained in theory). 

Plots can be downloaded by clicking on 'Download Plot' button. Now enter the values of <span class="fontCss2">K<sub>M</sub></span> and <span class="fontCss2">K<sub>G</sub></span> in the corresponding box under 'Result Block'.

6. Bring back all the knobs to zero value. Set 'MOTOR' switch to 'OFF' by clicking on it again and switch off the motor unit. 


<b style="color:blue;text-align:center">Torque-Speed Characteristics</b>

1. First click on "Tests" button and click on 'Load' to perform the experiment for finding the dc motor torque-speed characteristics.

2. Click on 'ON' button to switch on the motor unit. Connect 1-3, set 'MOTOR' switch to 'ON' by clicking on it. Set the 'RESET' switch to 'RESET'. Set load to 0 value. 

3. Apply armature voltage E<sub>a</sub> through knob1 and set E<sub>a</sub> to 6 volts. Click on 'Simulate' button. Observe motor armature current (mA), speed (rpm). Now click on the connected wire (1-3) to delete that and connect 2-3 , click on 'Simulate' button. Observe generator voltage E<sub>g</sub>.
Click on 'Table' button to get the observation data.

4. Set load to 1 through knob3. Delete connection 2-3 and again connect 1-3. Click on 'Simulate' button and follow step 3. Now vary the load from 2 to 5 through knob3 and take observations following step 3. 
Click on 'Simulate' button each time after a wire connection is made. Click on 'Plot' then click on 'Torque (T<sub>M</sub>) Vs. Speed (N)'.
Now from a slope of the plot calculate viscous friction coefficient <span class="fontCss2">B</span> (newton-meter/rad/sec) of motor and calculate average value of motor back emf constant <span class="fontCss2">K<sub>b</sub></span>
(volts/rad/sec) from the observation table. Now enter the values of <span class="fontCss2">B</span> and <span class="fontCss2">K<sub>b</sub></span> in the corresponding box under 'Result Block'.

5. Bring back all the knobs to zero value.
Follow steps 1-4 for E<sub>a</sub> = 8, 10 and 12 volts. Set 'MOTOR' switch to 'OFF' by clicking on it again and switch off the motor unit.


<b style="color:blue;text-align:center">Step Response of Motor</b>

1. First click on "Tests" button and click on 'Step Response' to perform the experiment for finding the dc motor transfer function.

2. Click on 'ON' button to switch on the motor unit. Connect 1-3, set 'MOTOR' switch to 'ON' by clicking on it. Set the 'RESET' switch to 'RESET'. Set load to 0 value.

3. Apply armature voltage E<sub>a</sub> through knob1 and set E<sub>a</sub> to 8 volts. Click on 'Simulate' button. Observe motor armature current (mA), speed (rpm). Now click on the connected wire (1-3) to delete that and connect 2-3 , click on 'Simulate'. Observe generator voltage E<sub>g</sub>

4. Now delete connection 2-3 and connect 4-3 , click on 'Simulate' to observe	E<sub>s</sub> value in DVM. Set E<sub>s</sub> through knob2 to 63.2 &percnt; of E<sub>g</sub> (measured above).</sub>

5. Set 'MOTOR' switch to 'OFF'. Set 'RESET' switch to 'READY'. Now set the 'MOTOR' switch to 'ON', click on 'Simulate' and observe the 'Time Constant (msec)'.

6. Click on 'Table' to get the observation data. Observe the step response. Now find the motor inertia <span class="fontCss2">J</span> using the values of <span class="fontCss2">B, K<sub>b</sub></span> (calculated before) and <span class="fontCss2">&tau;<sub>m</sub></span> from observation table following the formula provided in 'Result Block'.
Now enter the value of <span class="fontCss2">J</span> in corresponding box under 'Result Block'.
Click on 'Show Transfer Function' button to get the transfer function of the motor.

7. Bring back all the knobs to zero value. Follow steps (1-6) for E<sub>a</sub>= 10 and 12 volts. Set 'MOTOR' switch to 'OFF' and switch off the motor unit..

  
<link href="./simulation/css/DC.css" rel="stylesheet">

  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>