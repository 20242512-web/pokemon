// admin/controllers/carrer_controllers.js

export function home(req, res) {
  let pokemones = [
    { id: 1, name: "Pikachu", type: "Eléctrico" },
    { id: 2, name: "Charizard", type: "Fuego / Volador" },
    { id: 3, name: "Bulbasaur", type: "Planta / Veneno" },
    { id: 4, name: "Squirtle", type: "Agua" },
    { id: 5, name: "Gengar", type: "Fantasma / Veneno" }
  ];

  return res.render('admin/pokemones', {
    title: 'Admin Pokemon',
    pokemones: pokemones,
    currentPage: 'pokemones',
    description:
      'Aqui veras muchos pokemones'
  });
}