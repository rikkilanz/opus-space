"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { logoBlack } from "../assets";

export default function Logo3D() {
  const initializedRef = useRef(false);
  let scene, camera, renderer, object;

  useEffect(() => {
    const init = () => {
      // Create a scene
      scene = new THREE.Scene();

      // Create a camera
      camera = new THREE.PerspectiveCamera(45, 1, 1, 100000);
      camera.position.set(0, 0, 50);

      // Create a renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

      // Get the container element
      const container = document.getElementById("three-container");

      // Set renderer size to match container size
      updateRendererSize();

      // Append renderer to the container
      container.appendChild(renderer.domElement);

      // Load the 3D object
      const loader = new GLTFLoader();
      loader.load(
        logoBlack,
        function (gltf) {
          object = gltf.scene.children[0];
          object.scale.set(200, 200, 200);
          object.position.set(0, 0, 0);

          object.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(0xffffff),
            metalness: 2,
            roughness: 0,
          });

          scene.add(object);
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function (error) {
          console.log("An error happened");
          console.error(error);
        }
      );

      // Add lights
      const directionalLightBack = new THREE.DirectionalLight(0xa4aaff, 1);
      directionalLightBack.position.set(0, 0, -500);
      scene.add(directionalLightBack);

      const directionalLightFront = new THREE.DirectionalLight(0xffffff, 1);
      directionalLightFront.position.set(0, 0, 500);
      scene.add(directionalLightFront);

      // Ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientLight);

      // Listen for window resize events
      window.addEventListener("resize", onWindowResize);
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the object
      if (object) {
        object.rotation.y += 0.005;
      }

      // Render the scene
      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      updateRendererSize();
    };

    const updateRendererSize = () => {
      const container = document.getElementById("three-container");
      const width = container.clientWidth;
      const height = container.clientHeight;

      // Set renderer size based on the dimensions of the parent div
      renderer.setSize(width, height);

      // Update camera aspect ratio
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    if (!initializedRef.current) {
      init();
      animate();
      initializedRef.current = true;
    }

    return () => {
      // Remove event listener on cleanup
      window.removeEventListener("resize", onWindowResize);
    };
  }, []); // Empty dependency array to run this effect once

  return <div id="three-container" className="h-full"></div>;
}
