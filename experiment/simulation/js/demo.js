/* This  script file is edited by
    Piyali Chattopadhyay
    Project Scientist-Technical,
    Virtual Labs IIT Kharagpur.*/



jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
                var o = instance.getOffset(el, true),
                    o2 = instance.getOffset(el),
                    s = jsPlumb.getSize(el),
                    pxy = [e.pageX || e.clientX, e.pageY || e.clientY],
                    c = [pxy[0] - (o.left + (s[0] / 2)), pxy[1] - (o.top + (s[1] / 2))],
                    oo = [c[0] / s[0], c[1] / s[1]],
                    DIST = 350,
                    l = o2.left + (oo[0] * DIST),
                    t = o2.top + (oo[1] * DIST);

                var id = el.getAttribute("id");
                instance.animate(el, {left: l, top: t}, { duration: 350, easing: 'easeOutBack' });
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
	// for all live red connection//
        endpoint = {
            anchors: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 8, stroke: "#C50806" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 100,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);            			
			
            return instance.addEndpoint(elId, endpoint);
					},
					
			
					
			endpoint_oven = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 9, stroke: "grey" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 1,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare_oven = function (elId) {
            initAnimation(elId);            			
			
            return instance_black.addEndpoint(elId, endpoint_oven);
					},
					
					endpoint_ovenlod = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 15, stroke: "grey" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 1,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

		prepare_ovenlod = function (elId) {
            initAnimation(elId);            			
			
            return instance_ovenlod.addEndpoint(elId, endpoint_ovenlod);
					},					
					

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 162;
            var x = (0.2 * w) + Math.floor(Math.random() * (0.5 * w));
            var y = (0.2 * h) + Math.floor(Math.random() * (0.6 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "./images/littledot.png" } ],
        Connector: [ "Bezier", { curviness:-8 } ],
        Container: "canvas"
    });
	
	instance_black = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "./images/ovendot.png" } ],
        Connector: [ "Bezier", { curviness:80 } ],
        Container: "canvas"
    });
	
	instance_ovenlod = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "./images/loddot.png" } ],
        Connector: [ "Bezier", { curviness:80 } ],
        Container: "canvas"
    });
	
	
	
	/*jsPlumb.connect({ 
  sourceId:"bd3",
  targetId:"bd5",
  connector: [ "Bezier", { curviness:175 } ],
  paintStyle:{ lineWidth:25, strokeStyle:'yellow' }
});*/

	
	
	
	
	
	

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("bd1"),            
            e2 = prepare("bd2"),
			e3 = prepare("bd3"),
            e4 = prepare("bd4"),
			e5 = prepare_oven("bd5"),
			e6 = prepare("bd6");
                       
           		
            /*clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

        /*instance.on(clearBtn, "click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            instance.detachEveryConnection();
        });*/
				
             instance.connect({ source: e5, target: e6 });
			 
			 //delete clicked connection
      instance.bind("click", function (conn, originalEvent) {
		  
           if ( confirm("Delete connection ?")) {////for clicking on a connection
               instance.deleteConnection(conn);			  
			         }
       }); 
		
  

   


    });
	
	
      document.getElementById("simu").addEventListener("click", function () {
        var correct_connections_1_3 = [
            {
                "source": "bd1",
                "target": "bd3"
            },

            {
                "source": "bd3",
                "target": "bd1"
            }
        ];

        var correct_connections_2_3 = [
            {
                "source": "bd2",
                "target": "bd3"
            },

            {
                "source": "bd3",
                "target": "bd2"
            }
        ];        

        var correct_connections_4_3 = [
            {
                "source": "bd4",
                "target": "bd3"
            },
    
            {
                "source": "bd3",
                "target": "bd4"
            }
        ];

        var correct_connections_5_6 = [
            {
                "source": "bd5",
                "target": "bd6"
            },

            {
                "source": "bd6",
                "target": "bd5"
            }
        ];

        
        
		       //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "bd1",
                "target": "bd3"
            },
    
            {
                "source": "bd3",
                "target": "bd1"
            },
            
            {
                "source": "bd2",
                "target": "bd3"
            },

            {
                "source": "bd3",
                "target": "bd2"
            },

            {
                "source": "bd4",
                "target": "bd3"
            },
    
            {
                "source": "bd3",
                "target": "bd4"
            },
			
			{
                "source": "bd5",
                "target": "bd6"
            },

            {
                "source": "bd6",
                "target": "bd5"
            },
			
            
			 
        ];

        var actual_connections = instance.getAllConnections();

				var is_connected_1_3 = false;//for Ea
				var is_connected_2_3 = false;//for Eg
				var is_connected_4_3 = false;//for Es
				var is_connected_5_6 = false;//for load
				
				
       
        var unallowed_connection_present = false;
        var count =0; // counts number of connection


        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_3){
                is_connected_1_3 = correct_connections_1_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false

        });

        //checking for 3_7 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_2_3){
                is_connected_2_3 = correct_connections_2_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_3){
                is_connected_4_3 = correct_connections_4_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_5_6){
                is_connected_5_6 = correct_connections_5_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		///////////////EDIT NEEDED///////////////		
		
        if (is_connected_1_3 && is_connected_5_6 && !unallowed_connection_present ) {
			
			  
            document.getElementById('motor_arm_voltage').style.display = "block";
			document.getElementById('motor_arm_voltage').value = document.getElementById('Ea').value;
			document.getElementById('Es').style.display = "none";
			
           }
	    if(is_connected_2_3 && is_connected_5_6 && !unallowed_connection_present) {
			
				document.getElementById('motor_arm_voltage').style.display = "block";
			   document.getElementById('motor_arm_voltage').value = document.getElementById('Eg').value;
               document.getElementById('Es').style.display = "none"; 
            }  
			
			else if(is_connected_4_3 && is_connected_5_6 && !unallowed_connection_present) {
				
               document.getElementById('motor_arm_voltage').style.display = "none";
			   document.getElementById('Es').style.display = "block";
                
            } 
			 
			
			
			
			



    });
});


	
	
	
	
	
	
	
	
	
	
	
	
	
	







