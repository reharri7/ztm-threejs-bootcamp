import * as THREE from 'three';
import App from './app.js';
import {sizesStore} from "./utils/store.js";
export default class Renderer {
    constructor() {
        this.app = new App();
        this.canvas = this.app.canvas;
        this.camera = this.app.camera;
        this.scene = this.app.scene;
        this.sizesStore = sizesStore;
        this.sizes = this.sizesStore.getState();
        this.setInstance();
        this.setResizeListener();

    }

    setInstance() {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });
        this.instance.setSize(this.sizes.width, this.sizes.height);
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
    }

    setResizeListener() {
        this.sizesStore.subscribe((sizes)=>{
            this.instance.setSize(sizes.width, sizes.height)
            this.instance.setPixelRatio(Math.min(sizes.pixelRatio, 2))
        })
    }

    loop() {
        this.instance.render(this.scene, this.camera.instance);
    }
}