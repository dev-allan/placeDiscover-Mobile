const UserSchema = {

    name: "User",

    properties: {
      _id: "objectId",
      lastname: "string",
      firstname: "string",
      email: "string", 
      password: "string",
      avatar_url: "string?",
      last_position: "string?",
      vehicle: { "type": "string", "default": 'walk' },
      preference: "preference?"
    },

    primaryKey: "_id",

  };


  const PreferenceSchema = {

    name: "Favorite",

    properties: {
      _id: "objectId",

      //totalité
      all: { "type": "bool", "default": true },
      other: { "type": "bool", "default": false },

      // culture
      museum: { "type": "bool", "default": false },
      monument: { "type": "bool", "default": false },
      library: { "type": "bool", "default": false },

      // divertissement
      cinema: { "type": "bool", "default": false },
      theater: { "type": "bool", "default": false },
      show: { "type": "bool", "default": false },

      //Restauration
      bar: { "type": "bool", "default": false },
      pub: { "type": "bool", "default": false },
      restaurant: { "type": "bool", "default": false },
      brewery: { "type": "bool", "default": false },
      chip_shop: { "type": "bool", "default": false },
      snack: { "type": "bool", "default": false },
      food_truck: { "type": "bool", "default": false },

      // Evénement
      concert: { "type": "bool", "default": false },
      exposition: { "type": "bool", "default": false },
      festival: { "type": "bool", "default": false },
      market: { "type": "bool", "default": false },


      // Nocturne
      pub: { "type": "bool", "default": false },
      nightclub: { "type": "bool", "default": false },

      // Détente
      park: { "type": "bool", "default": false },
      garden: { "type": "bool", "default": false },
      hiking: { "type": "bool", "default": false }, // randonnée
      tourist_circuit: { "type": "bool", "default": false },
      swimming_pool: { "type": "bool", "default": false },
      spa: { "type": "bool", "default": false }, // spa sauna hammam, etc...
      
      // Sport
      sport_hall: { "type": "bool", "default": false },
      soccer_field: { "type": "bool", "default": false }, // terrain de foot
      play_area: { "type": "bool", "default": false }, // aire de jeu

      // loisirs
      paintball: { "type": "bool", "default": false },
      lazer_game: { "type": "bool", "default": false },
    },

    primaryKey: "_id",

  };

export default UserSchema;