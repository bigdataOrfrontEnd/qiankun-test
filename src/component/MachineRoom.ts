//机房对象
import {
  MeshBasicMaterial,
  MeshStandardMaterial,
  Mesh,
  PerspectiveCamera,
  Raycaster,
  Scene,
  Texture,
  TextureLoader,
  WebGLRenderer,
  Vector2,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// GLTF 模型加载器
const gltfLoader = new GLTFLoader();
export default class MachineRoom {
  // 渲染器
  renderer: WebGLRenderer;
  // 场景
  scene: Scene;
  // 相机
  camera: PerspectiveCamera;
  // 轨道控制器
  controls: OrbitControls;
  // 存放模型文件的目录
  modelPath: string;

  // 初始化场景
  constructor(canvas: HTMLCanvasElement, modelPath: string = "./models/") {
    this.renderer = new WebGLRenderer({ canvas });
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      45,
      canvas.width / canvas.height,
      0.1,
      1000
    );
    this.camera.position.set(0, 10, 15);
    this.camera.lookAt(0, 0, 0);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.modelPath = modelPath;
  }

  // 加载GLTF模型
  loadGLTF(modelName: string = "") {
    gltfLoader.load(this.modelPath + modelName, ({ scene: { children } }) => {
      this.scene.add(...children);
    });
  }

  // 连续渲染
  animate() {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => {
      this.animate();
    });
  }
}
