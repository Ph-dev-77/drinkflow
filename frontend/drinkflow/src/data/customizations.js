/*const customizations = [

            {
                id: "gelo",
                name: "Gelo",
                category:"refrigerante-com-gelo",
                options: [
                    "Com gelo",
                    "Pouco gelo",
                    "Sem gelo"
                ]

            },
            
            {
                id: "laranja",
                name: "Laranja",
                category:"refrigerante-com-laranja",
                options: [
                    "Com laranja",
                    "Sem laranja"

                ]
            },

            {
                id: "limao",
                name: "Limão",
                category:"refrigerante-com-limao",
                options: [
                    "Com limão",
                    "Sem limão"

                ]
            },

            {
                id: "limao-espremido",
                name: "Limão espremido",
                category:"refrigerante-com-limao",
                options: [
                    "Com limão espremido",
                ]
            },



        ]


        
    


export default customizations ;

*/

export const customizations = {
    gelo: {
        id: "gelo",
        name:"Gelo",
        options: [
            {id:"com-gelo", name:"Com gelo"},
            {id:"pouco-gelo", name:"Pouco gelo"},
            {id:"sem-gelo", name:"Sem gelo"}
        ],
    },

    acucar: {
        id: "acucar",
        name:"Açúcar",
        options: [
            {id:"com-acucar", name:"Com açúcar"},
            {id:"sem-acucar", name:"Sem açúcar"}
        ]
    },

    ingredientesDeSucos:{
        id: "ingredientes-de-sucos",
        name:"Ingredientes",
        selectionType: "multiple",
        options: [
            {id:"gengibre", name:"Gengibre"},
            {id:"beterraba", name:"Beterraba"},
            {id:"cenoura", name:"Cenoura"},
        ]
    },

    complementosDeRefrigerante: {
            id: "complementos-de-refrigerante",
            name:"Complementos",
            options: [
                {id:"limao-fatiado", name:"Limão fatiado"},
                {id:"limao-espremido", name:"Limão espremido"},
                {id:"laranja-fatiado", name:"Laranja fatiada"},
                {id:"sem-complementos", name:"Sem complementos"},

            ],
        },

       

        

  
    }


