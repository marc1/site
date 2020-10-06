import React from 'react'
import * as THREE from 'three'

import style from "./logo.module.scss"

const font_json = require('src/fonts/helvetica_neue_bold_italic.typeface.json');

class Logo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0,
        };
    }

    setup_dimensions(renderer, camera) {
        if(!this.mount) {
            return false;
        }
        
        this.setState({
            width: this.mount.clientWidth,
            height: this.mount.clientHeight
        }, () => {
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(this.state.width, this.state.height);
            camera.aspect = this.state.width/this.state.height * 0.75; // Slightly stretched look
            camera.updateProjectionMatrix();

            return true;
        });

        return false;
    }

    setup_model(scene, renderer, camera) {
        THREE.Cache.enabled = true;

        camera.fov = 25;
        camera.position.z = 125; 

        let mesh_1 = null, mesh_1_wire = null;
        let mesh_2 = null, mesh_2_wire = null;

        const font = new THREE.Font(font_json);

        const text_1 = new THREE.TextGeometry("MARC", {
            font: font,
            size: 20,
            height: 8,
            curveSegments: 1,
            bevelEnabled: true,
            bevelSize: 0.5,
            bevelSegments: 1,
            bevelThickness: 1
        });

        const text_2 = new THREE.TextGeometry("YEO", {
            font: font,
            size: 20,
            height: 8,
            curveSegments: 1,
            bevelEnabled: true,
            bevelSize: 0.5,
            bevelSegments: 1,
            bevelThickness: 1
        });

        text_1.center();
        text_2.center();

        let bb_1 = text_1.boundingBox;
        let bb_2 = text_2.boundingBox;

        text_1.translate(-(bb_1.max.x - bb_1.min.x) / 2 * 1.075, 0, 0);
        text_2.translate((bb_2.max.x - bb_2.min.x) / 2 * 1.075, 0, 0);

        const mat = new THREE.MeshBasicMaterial({ color: 0xfcfcfc });

        const mat_wire = new THREE.MeshBasicMaterial({ color: 0x212121, wireframe: true });
        mat_wire.opacity = 0.85;
        const group = new THREE.Group();

        mesh_1 = new THREE.Mesh(new THREE.BufferGeometry().fromGeometry(text_1),
            mat);
        mesh_1_wire = new THREE.Mesh(new THREE.BufferGeometry().fromGeometry(text_1),
            mat_wire);

        mesh_2 = new THREE.Mesh(new THREE.BufferGeometry().fromGeometry(text_2), 
            mat);
        mesh_2_wire = new THREE.Mesh(new THREE.BufferGeometry().fromGeometry(text_2),
            mat_wire);

        group.add(mesh_1);
        group.add(mesh_1_wire);
        group.add(mesh_2);
        group.add(mesh_2_wire);

        // Center
        new THREE.Box3().setFromObject(group).getCenter(group.position).multiplyScalar(- 1);

        scene.add(group);

        const animate = () => {
             requestAnimationFrame(animate);

            if (!mesh_1 || !mesh_1_wire || !mesh_2 || !mesh_2_wire) {
                return;
            }

            const rotationSpeed = -1 / 150;

            mesh_1.rotation.x += rotationSpeed;
            mesh_1_wire.rotation.x += rotationSpeed;

            mesh_2.rotation.x += rotationSpeed * 0.9;
            mesh_2_wire.rotation.x += rotationSpeed * 0.9;

            renderer.render(scene, camera);
        }

        animate();

        return renderer.domElement;
    }

    on_resize = (renderer, camera) => this.setup_dimensions(renderer, camera);

    componentDidMount() {
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        const camera = new THREE.PerspectiveCamera(0, 0, .1, 1000);

        if(!scene || !renderer || !camera)
            return;

        window.addEventListener('resize', this.on_resize.bind(this, renderer, camera));

        this.setup_dimensions(renderer, camera);

        const dom_element = this.setup_model(scene, renderer, camera);
        this.mount.appendChild(dom_element);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.id);
        window.removeEventListener('resize', this.on_resize);
    }

    render() {
        return (
            <figure className={style.Logo} ref={(ref => (this.mount = ref))}/>
        )
    }
}
export default Logo;
