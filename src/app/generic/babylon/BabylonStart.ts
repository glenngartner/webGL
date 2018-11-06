import * as BABYLON from 'babylonjs';
import 'babylonjs-materials';

export class BabylonStart {
  public static canvas: HTMLCanvasElement;
  public static engine: BABYLON.Engine;
  public static scene: BABYLON.Scene;
  public static camera: BABYLON.FreeCamera;
  public static light: BABYLON.Light;

  static startAndRunEngine(canvasElement: HTMLCanvasElement) {
    BabylonStart.initializeEngine(canvasElement);
    BabylonStart.createScene();
    BabylonStart.doRender();
  }

  static initializeEngine(canvasElement: HTMLCanvasElement) {
    BabylonStart.canvas = canvasElement;
    BabylonStart.engine = new BABYLON.Engine(canvasElement, true);
  }

  static createScene() {
    BabylonStart.scene = new BABYLON.Scene(BabylonStart.engine);
    BabylonStart.camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), BabylonStart.scene);
    BabylonStart.camera.setTarget(BABYLON.Vector3.Zero());
    BabylonStart.camera.attachControl(BabylonStart.canvas, false);

    const light = new BABYLON.HemisphericLight('hemiLight1', new BABYLON.Vector3(0, 1, 0), BabylonStart.scene);
    light.intensity = 0.7;

    // const skyMaterial = new BABYLON.SkyMaterial('sky_mat', BabylonStart.scene);
    // skyMaterial.backFaceCulling = false;
    // const skyBox = BABYLON.MeshBuilder.CreateBox('skybox', {size: 1000}, BabylonStart.scene);
    const skyBox = BABYLON.Mesh.CreateBox('skybox', 1000, BabylonStart.scene, false, BABYLON.Mesh.BACKSIDE);
    // skyBox.material = skyMaterial;
    skyBox.material = new BABYLON.SkyMaterial('skyMat', BabylonStart.scene);
    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments: 16, diameter: 2}, BabylonStart.scene);
    const ground = BABYLON.MeshBuilder.CreateGround('ground', {width: 6, height: 6}, BabylonStart.scene);

    const reflectionProbe = new BABYLON.ReflectionProbe('reflProbe01', 512, BabylonStart.scene);
    reflectionProbe.renderList.push(skyBox);

    const pbrMaterial = new BABYLON.PBRMaterial('pbrMat01', BabylonStart.scene);
    pbrMaterial.reflectionTexture = reflectionProbe.cubeTexture;
    sphere.material = pbrMaterial;
  }

  static doRender() {
    BabylonStart.engine.runRenderLoop(() => {
      BabylonStart.scene.render();
    });

    window.addEventListener('resize', () => {
      BabylonStart.engine.resize();
    });
  }
}
