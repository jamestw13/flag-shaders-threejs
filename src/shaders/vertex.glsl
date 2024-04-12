uniform float uFrequencyX;
uniform float uFrequencyY;
uniform float uTime;

varying vec2 vUv;
varying float vElevation;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float elevation =  sin(modelPosition.x * uFrequencyX - uTime) * 0.1;
  elevation += sin(modelPosition.y * uFrequencyY - uTime)* 0.1;
  
  modelPosition.z += elevation;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  gl_Position = projectedPosition;

  vUv = uv;
  vElevation = elevation;
}