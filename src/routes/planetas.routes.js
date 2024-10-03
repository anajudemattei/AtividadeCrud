import { Router } from "express";

const filmesRoutes = Router();

let filmesMarcantes = [
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        titulo: "É Assim que Acaba",
        gênero: "Romance",
        emCartaz: true
    },
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        titulo: "O Rei do Show",
        gênero: "Musical",
        emCartaz: false 
    },
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        titulo: "A Fantástica Fabrica de Chocolate",
        gênero: "Fantasia",
        emCartaz: false 
    },
];

//Rota para buscar todos os elementos do array filmesMarcantes.
filmesRoutes.get("/", (req, res) => {
    return res.status(200).send(filmesMarcantes);
});

//Rota para criar novo filme marcante.
filmesRoutes.post("/", (req, res) => {
    const { titulo, genero, emCartaz } = req.body;
  
    const novoFilme = {
      id: Number(Math.floor(Math.random() * 99) + 1),
      titulo,
      genero,
      emCartaz,
    };
  
    filmesMarcantes.push(novoFilme);
    return res.status(201).send(filmesMarcantes);
  });

  //Rota para buscar um elemento especifico do array filmesMarcantes.
filmesRoutes.get("/:id", (req, res) => {
    const { id } = req.params

    //console.log(id);

    const filme = filmesMarcantes.find((movie) =>  movie.id === Number(id));

    //console.log(guloseima);

    if (!filme) {
        return res.status(404). send({ massage: "Filme não encontrado!"});
    }

    return res.status(200). send(filme);
});

//Rota para editar um filmeMarcante
filmesRoutes.put("/:id", (req, res) => {
    const{ id } = req.params

    const filme = filmesMarcantes.find((movie) => movie.id === Number(id));

    //console.log(guloseima);

    if (!filme) {
        return res.status(404). send({ massage: "filme não encontrado!"});
    }

        const{titulo, genero, emCartaz} = req.body;
        //console.log(nome);

        filme.titulo = titulo
        filme.genero = genero
        filme.emCartaz = emCartaz

        return res.status(200).send({
            message: "filme atualizado!",
            filme,
        });
    });


    //Rota para deletar um filme Marcante.
filmesRoutes.delete("/:id", (req, res) => {
    const{ id } = req.params

    const filme = filmesMarcantes.find((movie) =>  movie.id === Number(id));

    if (!filme) {
        return res.status(404). send({ massage: "filme não encontrado!"});
    }

    filmesMarcantes = filmesMarcantes.filter((movie) => movie.id !== Number(id));

    return res.status(200).send({
        message: "filme deletado!",
        filme,
    });
});

export default filmesRoutes;



