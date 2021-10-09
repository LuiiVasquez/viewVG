import {GLTFLoader} from './threejs/GLTFLoader.js';
let scene = new THREE.Scene();

let loader = new GLTFLoader();


/* ---------------------- Función de modelos ----------------------*/
function models(){

    // modelo de a1
    loader.load('/models/a/a1.gltf', result => {
        var model = result.scene.children[0];
        // para las sombras
        model.traverse(n =>{
            if(n.isMesh){
                n.castShadow = true;
                n.receiveShadow = true;
                if(n.material.map) n.material.map.anisotropy = 16;
            }
        });
        model.position.set(0,0,0);
        model.rotation.set(0,Math.PI/2,0);
    
        scene.add(model);
    });
    
    // modelo de a2
    let moduloa2 = loader.load('/models/a/a2.gltf', result => {
        var model = result.scene.children[0];
        // para las sombras
        model.traverse(n =>{
            if(n.isMesh){
                n.castShadow = true;
                n.receiveShadow = true;
                if(n.material.map) n.material.map.anisotropy = 16;
            }
        });
        model.position.set(0,0,-20);
        model.rotation.set(0,Math.PI/2,0);
        scene.add(model);
    });
    // modelo de a3
    let moduloa3 = loader.load('/models/a/a3.gltf', result => {
        var model = result.scene.children[0];
        // para las sombras
        model.traverse(n =>{
            if(n.isMesh){
                n.castShadow = true;
                n.receiveShadow = true;
                if(n.material.map) n.material.map.anisotropy = 16;
            }
        });
        model.position.set(0,0,-40);
        model.rotation.set(0,Math.PI/2,0);
        scene.add(model);
    });
    // modelo de a4
    let moduloa4 = loader.load('/models/a/a4.gltf', result => {
        var model = result.scene.children[0];
        // para las sombras
        model.traverse(n =>{
            if(n.isMesh){
                n.castShadow = true;
                n.receiveShadow = true;
                if(n.material.map) n.material.map.anisotropy = 16;
            }
        });
        model.position.set(0,0,-60);
        model.rotation.set(0,Math.PI/2,0);
        scene.add(model);
    });
    
    
    
    };

models();