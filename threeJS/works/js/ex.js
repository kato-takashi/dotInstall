(function(){
	//alert("test");
	var width = 500;
	var height = 300;

	//scene
	var scene = new THREE.Scene();

	//mesh
	var geometry = new THREE.CubeGeometry(50, 50, 50);
	var material = new THREE.MeshBasicMaterial({color: "#ff0000"});
	var cube = new THREE.Mesh(geometry, material);
	cube.position.set(0, 0, 0); // rotate, scaleができる
	scene.add(cube);

	//light
	
	//camera
	var camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000);
	//camera.position.set(0, 0, 0);
	//camera.position.x = 0;
	//camera.position = new THREE.Vector3(0, 0, 0);
	camera.position.set(200, 200, 500);
	camera.lookAt(cube.position);

	//rendering
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	renderer.setClearColor("#eeeeee", 1);
	document.getElementById("stage").appendChild(renderer.domElement);
	renderer.render(scene, camera);
})();