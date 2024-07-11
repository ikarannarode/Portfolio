import React, { useEffect } from 'react';
import './Home.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const Home = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const canvas = document.querySelector('.homeCanvas');
        const renderer = new THREE.WebGLRenderer({ canvas });

        const moonGeometry = new THREE.SphereGeometry(3, 64, 64);
        const moonMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.z = 10;
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        const controls = new OrbitControls(camera, renderer.domElement);
        camera.position.z = 10;
        scene.add(moon);
        scene.add(pointLight);


        const animate = () => {
            requestAnimationFrame(animate);
            moon.rotation.y += 0.01;
            // camera.position.x += 0.01;
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
        }

        animate();




    }, [])
    return (
        <div className='home'>
            <canvas className='homeCanvas'></canvas>



        </div>
    )
}

export default Home