import * as THREE from 'three';
import Camera from './camera.js';
import Renderer from './renderer.js';
import Loop from './utils/loop.js';
import World from './world/world.js';
import Resize from './utils/resize.js';

let instance = null;

export default class App {
    constructor() {
        if(instance) {
            return instance;
        }
        instance = this;

        this.canvas = document.querySelector("canvas.threejs");
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.world = new World();
        this.loop = new Loop();
        this.resize = new Resize();
    }
}