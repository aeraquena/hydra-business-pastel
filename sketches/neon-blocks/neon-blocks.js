// Ascending neon blocks
// https://hydra.ojack.xyz/?code=b3NjKCgpJTIwJTNEJTNFJTIwY2MlNUJnZXRLbm9iKDElMkMzKSU1RCUyMColMjAxMCUyQyUyMCgpJTIwJTNEJTNFJTIwY2MlNUJnZXRLbm9iKDElMkM0KSU1RCUyQyUyMDMwMCklMEElMDkuY29sb3IoMC45JTJDJTIwMC43JTJDJTIwMC44KSUwQSUwOS5kaWZmKG9zYyg0NSUyQyUyMDAuMyUyQyUyMDEwMCklMEElMDklMDkuY29sb3IoMC45JTJDJTIwMC45JTJDJTIwMC45KSUwQSUwOSUwOS5yb3RhdGUoMC4xOCklMEElMDklMDkucGl4ZWxhdGUoMTIpKSUwQSUwOS5zY3JvbGxYKCgpJTIwJTNEJTNFJTIwY2MlNUJnZXRLbm9iKDElMkMxKSU1RCUyMColMjAxMCklMEElMDkubHVtYSgoKSUyMCUzRCUzRSUyMGNjJTVCZ2V0S25vYigxJTJDNSklNUQpJTBBJTA5Lm1vZHVsYXRlKG9zYygoKSUyMCUzRCUzRSUyMGNjJTVCZ2V0S25vYigxJTJDMiklNUQlMkMlMjAtMC45JTJDJTIwMDApKSUwQSUwOS5vdXQoKSUzQiUwQSUwQXNwZWVkJTIwJTNEJTIwMSUzQg%3D%3D

speed = 1;
setResolution(640, 480);

osc(
  () => cc[getKnob(1, 1)] * 10,
  () => cc[getKnob(1, 2)],
  300
)
  .color(0.9, 0.7, 0.8)
  .diff(osc(45, 0.3, 100).color(0.9, 0.9, 0.9).rotate(0.18).pixelate(12))
  .scrollX(() => cc[getKnob(1, 3)] * 10)
  .luma(() => cc[getKnob(1, 4)])
  .modulate(osc(() => cc[getKnob(1, 5)], -0.9, 0))
  .out();
