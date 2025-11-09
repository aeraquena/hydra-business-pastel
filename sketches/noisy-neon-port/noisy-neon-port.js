// https://hydra.ojack.xyz/?code=b3NjKDUlMkMlMjAwLjklMkMlMjAwLjAwMSklMEElMjAlMjAua2FsZWlkKCU1QjMlMkMlMjA0JTJDJTIwNSUyQyUyMDclMkMlMjA4JTJDJTIwOSUyQyUyMDEwJTVELmZhc3QoMC4xKSklMEElMjAlMjAuY29sb3IoMC41JTJDJTIwMC4zKSUwQSUyMCUyMC5jb2xvcmFtYSgwLjQpJTBBJTIwJTIwLnJvdGF0ZSgwLjAwOSUyQyUyMCgpJTIwJTNEJTNFJTIwTWF0aC5zaW4odGltZSklMjAqJTIwLTAuMDAxKSUwQSUyMCUyMC5tb2R1bGF0ZVJvdGF0ZShvMCUyQyUyMCgpJTIwJTNEJTNFJTIwTWF0aC5zaW4odGltZSklMjAqJTIwMC4wMDMpJTBBJTIwJTIwLm1vZHVsYXRlKG8wJTJDJTIwMC45KSUwQSUyMCUyMC5zY2FsZSgwLjkpJTBBJTIwJTIwLmx1bWEoMC43KSUwQSUyMCUyMC5vdXQobzApJTNCJTBB
osc(5, 0.9, 0.001)
  .kaleid([3, 4, 5, 7, 8, 9, 10].fast(0.1))
  .color(0.5, 0.3)
  .colorama(0.4)
  .rotate(0.009, () => Math.sin(time) * -0.001)
  .modulateRotate(o0, () => Math.sin(time) * 0.003)
  .modulate(o0, 0.9)
  .scale(0.9)
  .luma(0.7)
  .out(o0);
