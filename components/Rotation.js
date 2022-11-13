AFRAME.registerComponent('terrain-rotation-reader', {
    schema: {
        speedOfRotation: {type: "number", default: 0}
    },
    init: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "d") {
                this.data.speedOfRotation += 0.03;
            }
            if (e.key === "a") {
                this.data.speedOfRotation -= 0.03;
            }
        });
    },
    tick: function () {
        const mapRotation = this.el.getAttribute("rotation");

        mapRotation.y += this.data.speedOfRotation;

        this.el.setAttribute("rotation", {
            x: mapRotation.x,
            y: mapRotation.y,
            z: mapRotation.z
        });
    }
});

AFRAME.registerComponent('plane-rotation-reader', {
    schema: {
        speed: {type: 'number', default: 0},
        direction: {type: 'number', default: 0}
    },
    init: function () {
        const handleEvent = (e) => {
            this.data.direction = this.el.getAttribute('position');
            this.data.speed = this.el.getAttribute('rotation');
            let pr = this.data.speed, pd = this.data.direction;
            if (e.key === 'w') {
                pr.z += 0.3;
                this.el.setAttribute('rotation', pr);
                pd.y += 0.3;
                this.el.setAttribute('position', pd);
            }
            if (e.key === 's') {
                pr.z -= 0.03;
                this.el.setAttribute('rotation', pr);
                pd.y -= 0.03;
                this.el.setAttribute('position', pd);
            }
            if (e.key === 'a') {
                pr.x -= 0.3;
                this.el.setAttribute('rotation', pr);
            }
            if (e.key === 'd') {
                pr.x += 0.3;
                this.el.setAttribute('rotation', pr);
            }
        }
        window.addEventListener('keydown', handleEvent);
    }
});