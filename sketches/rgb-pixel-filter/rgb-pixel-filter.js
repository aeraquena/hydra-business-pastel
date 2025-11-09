// https://hydra.ojack.xyz/?code=dmFyJTIwbiUyMCUzRCUyMDUwJTNCJTBBdmFyJTIwZnVuYyUyMCUzRCUyMCgpJTIwJTNEJTNFJTIwb3NjKDMwJTJDJTIwMC4xJTJDJTIwMSkubW9kdWxhdGUobm9pc2UoNCUyQyUyMDAuMSkpJTNCJTBBdmFyJTIwcGl4JTIwJTNEJTIwKCklMjAlM0QlM0UlMjBzaGFwZSg0JTJDJTIwMC4zKS5zY2FsZSgxJTJDJTIwMSUyQyUyMDMpLnJlcGVhdChuJTJDJTIwbiklM0IlMEFwaXgoKS5tdWx0KGZ1bmMoKS5jb2xvcigxJTJDJTIwMCUyQyUyMDApLnBpeGVsYXRlKG4lMkMlMjBuKSkub3V0KG8xKSUzQiUwQXBpeCgpJTBBJTIwJTIwLm11bHQoZnVuYygpLmNvbG9yKDAlMkMlMjAxJTJDJTIwMCkucGl4ZWxhdGUobiUyQyUyMG4pKSUwQSUyMCUyMC5zY3JvbGxYKDElMjAlMkYlMjBuJTIwJTJGJTIwMyklMEElMjAlMjAub3V0KG8yKSUzQiUwQXBpeCgpJTBBJTIwJTIwLm11bHQoZnVuYygpLmNvbG9yKDAlMkMlMjAwJTJDJTIwMSkucGl4ZWxhdGUobiUyQyUyMG4pKSUwQSUyMCUyMC5zY3JvbGxYKDIlMjAlMkYlMjBuJTIwJTJGJTIwMyklMEElMjAlMjAub3V0KG8zKSUzQiUwQXNvbGlkKCkuYWRkKHNyYyhvMSklMkMlMjAxKS5hZGQoc3JjKG8yKSUyQyUyMDEpLmFkZChzcmMobzMpJTJDJTIwMSkub3V0KG8wKSUzQiUwQQ%3D%3D

// RGB pixel filter
// func is decomposed into R, G, and B channels and overlaid on top of each other.
var n = 50;
var func = () => osc(30, 0.1, 1).modulate(noise(4, 0.1));
var pix = () => shape(4, 0.3).scale(1, 1, 3).repeat(n, n);
pix().mult(func().color(1, 0, 0).pixelate(n, n)).out(o1);
pix()
  .mult(func().color(0, 1, 0).pixelate(n, n))
  .scrollX(1 / n / 3)
  .out(o2);
pix()
  .mult(func().color(0, 0, 1).pixelate(n, n))
  .scrollX(2 / n / 3)
  .out(o3);
solid().add(src(o1), 1).add(src(o2), 1).add(src(o3), 1).out(o0);
