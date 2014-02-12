(function(){
	//alert("test");
	var width = 500;
	var height = 300;

	//scene
	var scene = new THREE.Scene();

	//mesh
	//cube
	var geometry = new THREE.CubeGeometry(50, 50, 50);
	//var material = new THREE.MeshBasicMaterial({color: "#ff0000"});
	var material = new THREE.MeshLambertMaterial({color: "#ff0000"});
	var cube = new THREE.Mesh(geometry, material);
	cube.position.set(0, 50, 0); // rotate, scaleができる
	scene.add(cube);

	//plane
	var pGeometry = new THREE.PlaneGeometry(300, 300);
	var pMaterial = new THREE.MeshLambertMaterial({color: 0x0096d6, 
													side:THREE.DoubleSide });
	var plane = new THREE.Mesh(pGeometry, pMaterial);
	plane.position.set(0,0, 0); 
	plane.rotation.x = 90* Math.PI /180;
	scene.add(plane);

	//light
	var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    var ambient = new THREE.AmbientLight(0x550000);
    scene.add(ambient);
	
	//camera
	var camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000);
	camera.position.set(200, 300, 500);
	camera.lookAt(cube.position);

	//helper
	var axis = new THREE.AxisHelper(1000);
	axis.position.set(0, 0, 0);
	scene.add(axis);

	//rendering
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	renderer.setClearColor("#eeeeee", 1);
	document.getElementById("stage").appendChild(renderer.domElement);
	renderer.render(scene, camera);
})();