import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WebGL Viewer';
  renderCanvas: HTMLCanvasElement;
  gl: WebGLRenderingContext;

  private verstexShader: string = `
    attribute vec4 a_position;
    
    void main(){
      gl_Position = a_position; 
    } 
  `;
  private fragmentShader: string = `
    precision mediump float;
    
    void main(){
      gl_FragColor = vec4(1, 0, 0.5, 1); 
    } 
  `;

  public ngOnInit() {
    this.renderCanvas = <HTMLCanvasElement>document.getElementById('renderCanvas');
    this.gl = <WebGLRenderingContext>this.renderCanvas.getContext('webgl');
    this.checkWebGLAvailable();

    const vertexS = this.createShader(this.gl, this.gl.VERTEX_SHADER, this.verstexShader);
    const fragS = this.createShader(this.gl, this.gl.FRAGMENT_SHADER, this.fragmentShader);
    const program = this.createProgram(this.gl, vertexS, fragS);

    const positionAttributeLocation = this.gl.getAttribLocation(program, 'a_position');
    const positionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
      0, 0,
      0, 0.5,
      0.7, 0
    ];
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);

    this.gl.viewport(0, 0, this.renderCanvas.width, this.renderCanvas.height);
    this.gl.clearColor(0, 0, 0 ,0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    this.gl.useProgram(program);
    this.gl.enableVertexAttribArray(positionAttributeLocation);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);

    const size = 2;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    this.gl.vertexAttribPointer(positionAttributeLocation, size, this.gl.FLOAT, normalize, stride, offset);

    const primitiveType = this.gl.TRIANGLES;
    const count = 3;
    this.gl.drawArrays(primitiveType, offset, count);
  }

  private checkWebGLAvailable() {
    if (!this.gl) {
      const p = document.createElement('div');
      const text = document.createTextNode('No WebGL For You!');
      p.appendChild(text);
      document.body.appendChild(p);
      this.renderCanvas.remove();
    }
  }

  private createShader(context: WebGLRenderingContext, shaderType: GLenum, shaderSource: string) {
    const shader = context.createShader(shaderType);
    context.shaderSource(shader, shaderSource);
    context.compileShader(shader);
    const success = context.getShaderParameter(shader, context.COMPILE_STATUS);
    if (success) {
      return shader;
    } else {
      console.log(context.getShaderInfoLog(shader));
      context.deleteShader(shader);
    }
  }

  private createProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
      return program;
    } else {
      gl.deleteProgram(program);
    }
  }

}
