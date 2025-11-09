// https://hydra.ojack.xyz/?code=b3NjKDEzJTJDJTIwMCUyQyUyMDEpJTBBJTIwJTIwLmthbGVpZCgpJTBBJTIwJTIwLm1hc2soc2hhcGUoNCUyQyUyMDAuMyUyQyUyMDEpKSUwQSUyMCUyMC5tb2R1bGF0ZVJvdGF0ZShzaGFwZSg0JTJDJTIwMC4xJTJDJTIwMSkpJTBBJTIwJTIwLm1vZHVsYXRlUm90YXRlKHNoYXBlKDQlMkMlMjAwLjElMkMlMjAwLjkpKSUwQSUyMCUyMC5tb2R1bGF0ZVJvdGF0ZShzaGFwZSg0JTJDJTIwMC4xJTJDJTIwMC44KSklMEElMjAlMjAuc2NhbGUoMC4zKSUwQSUyMCUyMC5hZGQoc2hhcGUoNCUyQyUyMDAuMiUyQyUyMDEpLmNvbG9yKDAuMyUyQyUyMDElMkMlMjAxJTJDJTIwMC41KSklMEElMjAlMjAucm90YXRlKCgpJTIwJTNEJTNFJTIwdGltZSklMEElMjAlMjAub3V0KCklM0IlMEE%3D
osc(13, 0, 1)
  .kaleid()
  .mask(shape(4, 0.3, 1))
  .modulateRotate(shape(4, 0.1, 1))
  .modulateRotate(shape(4, 0.1, 0.9))
  .modulateRotate(shape(4, 0.1, 0.8))
  .scale(0.3)
  .add(shape(4, 0.2, 1).color(0.3, 1, 1, 0.5))
  .rotate(() => time)
  .out();
