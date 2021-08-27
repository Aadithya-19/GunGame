AFRAME.registerComponent("bullets", {
    init:function(){
        this.shootBullet();
    },
    shootBullet:function(){
        window.addEventListener("keydown", (e) => {
            if(e.key === "z"){
                const bullets = document.createElement("a-entity");
                bullets.setAttribute("geometry", {
                    primitive:"sphere",
                    radius:"0.1"
                });
                bullets.setAttribute("material", "color","black")
                var cam = document.querySelector("#camera")
                var pos = cam.getAttribute("position")
                bullets.setAttribute("position", {
                    x: pos.x,
                    y:pos.y,
                    z:pos.z,
                })
                var camera = document.querySelector("#camera").object3D;
                //get the camera direction as Three.js vector
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)
                //set velocity and directions
                bullets.setAttribute("velocity", direction.multiplyScalar(-10))
                var scene = document.querySelector("#scene")
                scene.appendChild(bullets)

            }
        })
  
    },
})