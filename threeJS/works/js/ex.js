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
	cube.position.set(0, 0, 0); // rotate, scaleができる
	scene.add(cube);

	//sphere
	var sGeometry = new THREE.SphereGeometry(30);
	//var material = new THREE.MeshBasicMaterial({color: "#ff0000"});
	var sMaterial = new THREE.MeshLambertMaterial({color: "#ffff00"});
	var sphere = new THREE.Mesh(sGeometry, sMaterial);
	sphere.position.set(100, 100, 100); // rotate, scaleができる
	scene.add(sphere);

	//light
	var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    var ambient = new THREE.AmbientLight(0x550000);
    scene.add(ambient);
	
	//camera
	var camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000);
	//camera.position.set(0, 0, 0);
	//camera.position.x = 0;
	//camera.position = new THREE.Vector3(0, 0, 0);
	camera.position.set(200, 200, 500);
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