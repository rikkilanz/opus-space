"use client";

import { useEffect } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as THREE from "three";
import { logo3DBlack } from "../assets/";

export default function Logo3D() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera();
  const renderer = new THREE.WebGLRenderer();

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      logo3DBlack,
      function (gltf) {
        scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  }, []); // Empty dependency array to ensure this effect runs once when the component mounts

  useEffect(() => {
    // Set up renderer and append it to the DOM
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("three-container").appendChild(renderer.domElement);

    // Render your scene after the 3D object is loaded
    renderer.render(scene, camera);
  }, [scene, renderer]); // Add dependencies as needed

  return <div id="three-container"></div>;
}
